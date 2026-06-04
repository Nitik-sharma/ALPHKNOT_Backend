import { PrismaClient } from "@prisma/client";
import { sendEmail } from "../utils/sendEmail.js";
import { candidateTemplate, recruiterTemplate } from "../utils/emailTemplate.js";
import { uploadTos3 } from "../utils/uploadToS3.js";

const prisma = new PrismaClient()

export const createJobApplication = async (req, res) => {
   console.log("CONTROLLER HIT");
    try {
        const { name, email, phone, role, experience, skills, portfolio, whyUs } = req.body;

      const resumeUrl = req.file
  ? await uploadTos3(req.file)
  : null;
    console.log(JSON.stringify(req.file, null, 2));
      console.log("Resume URL:", resumeUrl);
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
        
        const application = await prisma.jobApplication.create({
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
           process.env.EMAIL_USER,
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

       console.log(JSON.stringify(error, null, 2));
         res.status(500).json({
      error: error.message,
    });
    }
}



