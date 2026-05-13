import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const createTalent = async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body;

        // validation

        if(!firstName || !lastName || !email){
            return res.status(400).json({
                message:"All feilds are required "
            })
        }

        // save in db

        const talent = await prisma.HireTalent.create({
            data: {
                firstName,
                lastName,
                email,

            }
        })

          res.status(201).json({
      success: true,
      message: "Lead saved successfully",
      talent,
    });

    } catch (error) {
        res.status(500).json({
      error: error.message,
    });
  
    }
}