import { PutObjectCommand } from "@aws-sdk/client-s3";

import s3 from "../config/s3.js";

export const uploadTos3 = async (file) => {
     console.log("STEP 1 - Upload function called");
    const fileName = `${Date.now()}-${file.originalname}`;

    const command = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName,
        Body: file.buffer,
        ContentType:file.mimetype,
    })
  console.log("STEP 2 - Sending to S3");
    await s3.send(command)
    console.log("Upload completed");

     return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    

}