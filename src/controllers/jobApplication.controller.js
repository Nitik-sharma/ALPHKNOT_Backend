import { PrismaClient } from "@prisma/client";
import { sendEmail } from "../utils/sendEmail.js";
import { candidateTemplate,recruiterTemplate } from "../utils/emailTemplate.js";

const prisma = new PrismaClient()

export const createJobApplication = async (req, res) => {
    try {
        const { name, email, phone, role, experience, skills, portfolio, whyUs, resumeUrl } = req.body;

        // validation

         if (
      !name ||
      !email ||
      !phone ||
      !role ||
      !experience ||
      !skills ||
             !whyUs ||
             !resumeUrl
    ) {
      return res.status(400).json({
        message: "All required fields are required",
      });
        }
        
        const application = await prisma.JobApplication.create({
            data: {
                name,
                email,
                phone,
                role,
                experience,
                 skills,
      portfolio,
                whyUs,
                resumeUrl
                
            }
        })


        // Email send to candidate

        await sendEmail(
            email,
            "Application Received - Alph Knot",
            candidateTemplate(name,role)
        )


        // Email send to recruiter

        await sendEmail(
            email,
            "New JobApplication"
            ,   recruiterTemplate(
    name,
    email,
    role,
    experience,
    skills,
    resumeUrl
  )
        )


          res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      application,
          });
        
    } catch (error) {
         res.status(500).json({
      error: error.message,
    });
    }
}



