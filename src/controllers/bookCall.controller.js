import { PrismaClient } from "@prisma/client";
import { sendEmail } from "../utils/sendEmail.js";
import { emailTemplate } from "../utils/emailTemplate.js";

const prisma = new PrismaClient();
export const createBookCall = async (req, res) => {
  try {
    const { name, email, date, time } = req.body;

    if (!name || !email || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const booking = await prisma.bookCall.create({
      data: {
        name,
        email,
        date,
        time,
      },
    });

    // Email to client
await sendEmail(
  email,
  "Request Received",
  `<p>Hi ${name}, your request has been sent. We will confirm soon.</p>`
);
   
    await sendEmail(
      process.env.EMAIL_USER,
      "New Meeting  request ",
      emailTemplate(name,date,time,booking.id)
    )

    res.status(201).json({
      success: true,
      message: "Booking saved & Email send",
      booking,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// acceeept booking 
export const acceptBooking = async (req, res) => {
  try {
    const { id } = req.params;
    // Temorary meeting link 
    const meetingLink = `https://meet.google.com/${id}-abc`;

    // Update DB
    const booking = await prisma.bookCall.update({
      where: { id: Number(id) },
      data: {
        status: "accepted",
        meetingLink,
      }
    });

    // send final email to client
    await sendEmail(
      booking.email,
      "Meeting Confirmed – AlphKnot",
      `
    <div style="font-family: Arial, sans-serif; background: #f0f0f0; padding: 40px 16px;">
      <style>
        @media (max-width: 480px) {
          .ak-card { border-radius: 10px !important; }
          .ak-header { padding: 18px 16px 16px !important; }
          .ak-body { padding: 20px 16px !important; }
          .ak-name { font-size: 17px !important; }
          .ak-details-card { padding: 16px !important; }
          .ak-details-row { flex-direction: column !important; gap: 12px !important; }
          .ak-footer { flex-direction: column !important; align-items: flex-start !important; gap: 6px !important; }
        }
        @media (max-width: 360px) {
          .ak-header { padding: 14px 12px !important; }
          .ak-body { padding: 14px 12px !important; }
        }
      </style>

      <div class="ak-card" style="max-width: 560px; margin: auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #ddd;">

        <!-- Header -->
        <div class="ak-header" style="background: #0B1E3E; padding: 28px 32px 24px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
            <div style="width: 36px; height: 36px; background: #C9A45C; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L12.5 7.5H18L13.5 11L15.5 16.5L10 13L4.5 16.5L6.5 11L2 7.5H7.5L10 2Z" fill="#0B1E3E"/>
              </svg>
            </div>
            <span style="font-size: 18px; font-weight: 600; color: #F5F0E8;">AlphKnot</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 8px; height: 8px; background: #C9A45C; border-radius: 50%; flex-shrink: 0;"></div>
            <span style="font-size: 12px; color: #C9A45C; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;">Meeting Confirmed</span>
          </div>
        </div>

        <!-- Gold Bar -->
        <div style="height: 3px; background: linear-gradient(90deg, #C9A45C, #E8C878, #C9A45C);"></div>

        <!-- Body -->
        <div class="ak-body" style="padding: 32px;">

          <p style="font-size: 14px; color: #888; margin: 0 0 4px;">Hello,</p>
          <p class="ak-name" style="font-size: 20px; font-weight: 600; color: #0B0B0F; margin: 0 0 20px;">${booking.name}</p>

          <p style="font-size: 14px; color: #555; line-height: 1.7; margin: 0 0 24px;">
            Your meeting with <strong>AlphKnot</strong> has been confirmed. Here are your details:
          </p>

          <!-- Details Card -->
          <div class="ak-details-card" style="background: #0B1E3E; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
            <div class="ak-details-row" style="display: flex; gap: 32px; flex-wrap: wrap;">
              <div>
                <p style="font-size: 11px; color: #C9A45C; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; margin: 0 0 4px;">Date</p>
                <p style="font-size: 15px; color: #F5F0E8; font-weight: 600; margin: 0;">${booking.date}</p>
              </div>
              <div>
                <p style="font-size: 11px; color: #C9A45C; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; margin: 0 0 4px;">Time</p>
                <p style="font-size: 15px; color: #F5F0E8; font-weight: 600; margin: 0;">${booking.time}</p>
              </div>
            </div>
          </div>

          <!-- Join Button -->
          <a href="${meetingLink}"
            style="display: block; text-align: center; padding: 14px 24px;
                   background: #C9A45C; color: #0B1E3E; text-decoration: none;
                   border-radius: 8px; font-weight: 700; font-size: 14px; margin-bottom: 28px;">
            Join Meeting
          </a>

          <!-- Sign Off -->
          <p style="font-size: 13px; color: #555; line-height: 1.7; margin: 0 0 4px;">
            If you have any questions, simply reply to this email.
          </p>
          <p style="font-size: 13px; color: #555; margin: 0;">
            Warm regards,<br/>
            <strong style="color: #0B1E3E;">The AlphKnot Team</strong>
          </p>

          <!-- Footer -->
          <div class="ak-footer" style="border-top: 1px solid #eee; margin-top: 24px; padding-top: 16px; display: flex; justify-content: space-between; align-items: center;">
            <p style="font-size: 12px; font-weight: 600; color: #0B0B0F; margin: 0;">AlphKnot</p>
            <p style="font-size: 11px; color: #bbb; margin: 0;">© ${new Date().getFullYear()} AlphKnot. All rights reserved.</p>
          </div>

        </div>
      </div>
    </div>
      `
    );

    res.send("Meeting Accepted ✅");

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};