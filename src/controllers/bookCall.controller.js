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
  <div style="font-family:Arial,sans-serif;background:#f0f0f0;padding:20px 10px;">
    <div style="max-width:560px;margin:auto;background:#fff;border-radius:14px;overflow:hidden;border:1px solid #ddd;">

      <!-- Header -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#0B1E3E;">
        <tr><td style="padding:22px 24px 18px;">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-right:10px;vertical-align:middle;">
                <div style="width:32px;height:32px;background:#C9A45C;border-radius:7px;display:flex;align-items:center;justify-content:center;">
                  <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L12.5 7.5H18L13.5 11L15.5 16.5L10 13L4.5 16.5L6.5 11L2 7.5H7.5L10 2Z" fill="#0B1E3E"/>
                  </svg>
                </div>
              </td>
              <td style="vertical-align:middle;">
                <span style="font-size:16px;font-weight:600;color:#F5F0E8;letter-spacing:0.04em;">AlphKnot</span>
              </td>
            </tr>
          </table>
          <div style="margin-top:14px;display:flex;align-items:center;gap:7px;">
            <div style="width:7px;height:7px;background:#C9A45C;border-radius:50%;flex-shrink:0;"></div>
            <span style="font-size:10px;color:#C9A45C;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;">Meeting Confirmed</span>
          </div>
        </td></tr>
      </table>

      <!-- Gold Bar -->
      <div style="height:3px;background:linear-gradient(90deg,#C9A45C,#E8C878,#C9A45C);"></div>

      <!-- Body -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="padding:22px 20px;">

          <p style="font-size:12px;color:#888;margin:0 0 3px 0;">Hello,</p>
          <p style="font-size:17px;font-weight:700;color:#0B0B0F;margin:0 0 14px 0;">${booking.name}</p>

          <p style="font-size:13px;color:#555;line-height:1.7;margin:0 0 18px 0;">
            Your meeting with <strong>AlphKnot</strong> has been confirmed. Here are your details:
          </p>

          <!-- Details Card -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0B1E3E;border-radius:11px;margin-bottom:18px;">
            <tr><td style="padding:18px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:top;width:50%;padding-right:10px;">
                    <p style="font-size:10px;color:#C9A45C;letter-spacing:0.08em;text-transform:uppercase;font-weight:600;margin:0 0 4px 0;">Date</p>
                    <p style="font-size:14px;color:#F5F0E8;font-weight:700;margin:0;">${booking.date}</p>
                  </td>
                  <td style="vertical-align:top;width:50%;">
                    <p style="font-size:10px;color:#C9A45C;letter-spacing:0.08em;text-transform:uppercase;font-weight:600;margin:0 0 4px 0;">Time</p>
                    <p style="font-size:14px;color:#F5F0E8;font-weight:700;margin:0;">${booking.time}</p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>

          <!-- Join Banner -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:18px;">
            <tr>
              <td style="background:#C9A45C;border-radius:8px;padding:12px 16px;text-align:center;">
                <table cellpadding="0" cellspacing="0" style="margin:auto;">
                  <tr>
                    <td style="padding-right:7px;vertical-align:middle;">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="3" width="9" height="10" rx="1.5" stroke="#0B1E3E" stroke-width="1.5"/>
                        <path d="M11 6l3-2v8l-3-2V6z" fill="#0B1E3E"/>
                      </svg>
                    </td>
                    <td style="font-size:12px;font-weight:700;color:#0B1E3E;letter-spacing:0.02em;vertical-align:middle;">
                      A meeting link will be created shortly
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>

          <!-- Sign Off -->
          <p style="font-size:13px;color:#555;line-height:1.7;margin:0 0 4px 0;">
            If you have any questions, simply reply to this email.
          </p>
          <p style="font-size:13px;color:#555;margin:0 0 20px 0;">
            Warm regards,<br/>
            <strong style="color:#0B1E3E;">The AlphKnot Team</strong>
          </p>

          <!-- Footer -->
          <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #eee;">
            <tr>
              <td style="padding-top:14px;vertical-align:middle;">
                <p style="font-size:12px;font-weight:600;color:#0B0B0F;margin:0;">AlphKnot</p>
              </td>
              <td style="padding-top:14px;vertical-align:middle;text-align:right;">
                <p style="font-size:11px;color:#bbb;margin:0;">© ${new Date().getFullYear()} AlphKnot. All rights reserved.</p>
              </td>
            </tr>
          </table>

        </td></tr>
      </table>

    </div>
  </div>
  `
);
    res.send("Meeting Accepted ✅");

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Reject call

export const rejectBooking = async (req, res) => {
  try {
    const { id } = req.params

    // updated DB

    const booking = await prisma.bookCall.update({
      where: {
        id:Number(id)
      },
      data: {
        status:"rejected"
      }
    })

     // send rejection email to client
    await sendEmail(
      booking.email,
      "Meeting Request Rejected",
      `
        <div style="font-family: Arial; padding:20px;">
          <h2>Hi ${booking.name}</h2>

          <p>We appreciate your interest in meeting with us.</p>

          <p>
            Unfortunately, your meeting request could not be approved at this time.
          </p>

          <p>
            You may submit another request later.
          </p>

          <br/>

          <p>Thank you,<br/>AlphKnot Team</p>
        </div>
      `
    );

    res.send("Meeting Rejected ❌");

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
    
  