export const emailTemplate = (name, date, time, id) => {
  return `
    <div style="font-family: Arial, sans-serif; background: #f0f0f0; padding: 24px 12px;">
      <div style="max-width: 560px; margin: auto; background: #ffffff; border-radius: 14px; overflow: hidden; border: 1px solid #ddd;">

        <!-- Header -->
        <div style="background: #0B1E3E; padding: 22px 24px 20px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 16px;">
            <div style="width: 34px; height: 34px; background: #C9A45C; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L12.5 7.5H18L13.5 11L15.5 16.5L10 13L4.5 16.5L6.5 11L2 7.5H7.5L10 2Z" fill="#0B1E3E"/>
              </svg>
            </div>
            <span style="font-size: 17px; font-weight: 600; color: #F5F0E8; letter-spacing: 0.04em;">AlphKnot</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 8px; height: 8px; background: #C9A45C; border-radius: 50%; flex-shrink: 0;"></div>
            <span style="font-size: 11px; color: #C9A45C; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;">Meeting Confirmed</span>
          </div>
        </div>

        <!-- Gold Bar -->
        <div style="height: 3px; background: linear-gradient(90deg, #C9A45C 0%, #E8C878 50%, #C9A45C 100%);"></div>

        <!-- Body -->
        <div style="padding: 24px 20px;">

          <p style="font-size: 13px; color: #888; margin: 0 0 3px;">Hello,</p>
          <p style="font-size: 18px; font-weight: 700; color: #0B0B0F; margin: 0 0 16px;">${name}</p>

          <p style="font-size: 13px; color: #555; line-height: 1.7; margin: 0 0 20px;">
            Your meeting has been successfully scheduled. We look forward to connecting with you at the time below.
          </p>

          <!-- Details Card — table for email-client compatibility -->
          <div style="background: #0B1E3E; border-radius: 11px; padding: 18px 20px; margin-bottom: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 0 12px 0 0; vertical-align: top; width: 50%;">
                  <p style="font-size: 10px; color: #C9A45C; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; margin: 0 0 4px;">Date</p>
                  <p style="font-size: 14px; color: #F5F0E8; font-weight: 700; margin: 0;">${date}</p>
                </td>
                <td style="padding: 0; vertical-align: top; width: 50%;">
                  <p style="font-size: 10px; color: #C9A45C; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; margin: 0 0 4px;">Time</p>
                  <p style="font-size: 14px; color: #F5F0E8; font-weight: 700; margin: 0;">${time}</p>
                </td>
              </tr>
            </table>
            <div style="display: flex; align-items: center; gap: 8px; border-top: 1px solid rgba(201,164,92,0.25); margin-top: 14px; padding-top: 12px;">
              <div style="width: 7px; height: 7px; border-radius: 50%; background: #4CAF82; flex-shrink: 0;"></div>
              <span style="font-size: 11px; color: rgba(245,240,232,0.6);">Confirmed &amp; added to your calendar</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 14px;">
            <tr>
              <td style="padding: 0 5px 0 0; width: 50%;">
                <a href="http://localhost:5000/api/book-call/accept/${id}"
                  style="display: flex; align-items: center; justify-content: center; gap: 6px; padding: 11px 12px; background: #1A3A2A; color: #4CAF82; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 13px; border: 1px solid #4CAF82;">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 3" stroke="#4CAF82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Accept
                </a>
              </td>
              <td style="padding: 0 0 0 5px; width: 50%;">
                <a href="http://localhost:5000/api/book-call/reject/${id}"
                  style="display: flex; align-items: center; justify-content: center; gap: 6px; padding: 11px 12px; background: #3A1A1A; color: #E24B4A; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 13px; border: 1px solid #E24B4A;">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M3 3l8 8M11 3l-8 8" stroke="#E24B4A" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  Reject
                </a>
              </td>
            </tr>
          </table>

         

        

          <!-- Footer -->
          <table style="width: 100%; border-collapse: collapse; border-top: 1px solid #eee;">
            <tr>
              <td style="padding-top: 18px; vertical-align: middle;">
                <p style="font-size: 13px; font-weight: 600; color: #0B0B0F; margin: 0;">AlphKnot</p>
                <p style="font-size: 11px; color: #999; margin: 2px 0 0;">Global Services Company</p>
              </td>
              <td style="padding-top: 18px; vertical-align: middle; text-align: right;">
                <span style="display: inline-flex; gap: 6px;">
                  <span style="width: 28px; height: 28px; border-radius: 6px; border: 1px solid #e0e0e0; display: inline-flex; align-items: center; justify-content: center;">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><rect x="1" y="2" width="12" height="11" rx="1.5" stroke="#888" stroke-width="1.2" fill="none"/><path d="M1 6h12" stroke="#888" stroke-width="1.2"/><path d="M4 1v2M10 1v2" stroke="#888" stroke-width="1.2" stroke-linecap="round"/></svg>
                  </span>
                  <span style="width: 28px; height: 28px; border-radius: 6px; border: 1px solid #e0e0e0; display: inline-flex; align-items: center; justify-content: center;">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="#888" stroke-width="1.2" fill="none"/><path d="M7 4v3.5l2 1" stroke="#888" stroke-width="1.2" stroke-linecap="round"/></svg>
                  </span>
                </span>
              </td>
            </tr>
          </table>

        </div>
      </div>
    </div>
  `;
};


export const candidateTemplate = (name, role) => `
<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;background:#ffffff;">
  
  <!-- Header -->
  <div style="background:#1F2E4F;padding:32px 36px;">
    <p style="font-size:12px;color:#94a3b8;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 4px;">Alph Knot</p>
    <p style="font-size:22px;font-weight:700;color:#ffffff;margin:0;">Application Received</p>
  </div>

  <!-- Body -->
  <div style="padding:36px;">
    <span style="display:inline-block;background:#e8f5e9;color:#2e7d32;font-size:12px;font-weight:600;padding:4px 12px;border-radius:20px;margin-bottom:20px;">✓ Successfully Submitted</span>
    <p style="font-size:18px;font-weight:600;color:#1F2E4F;margin:0 0 16px;">Hi ${name} 👋</p>
    <p style="font-size:15px;line-height:1.75;color:#374151;margin:0 0 14px;">Thank you for applying at Alph Knot. We're glad you took the time to share your profile with us.</p>
    <div style="background:#f0f4ff;border-left:3px solid #1F2E4F;border-radius:0 8px 8px 0;padding:14px 18px;margin:20px 0;">
      <span style="font-weight:600;color:#1F2E4F;font-size:15px;">${role}</span>
    </div>
    <p style="font-size:15px;line-height:1.75;color:#374151;margin:0 0 14px;">Your application is now under review. Our recruitment team will carefully evaluate your profile and reach out soon with the next steps.</p>
    <p style="font-size:15px;line-height:1.75;color:#374151;margin:0 0 24px;">Feel free to reach out if you have any questions.</p>
    <hr style="border:none;border-top:0.5px solid #e5e7eb;margin:0 0 24px;" />
    <p style="font-size:14px;color:#6b7280;line-height:1.6;margin:0;">
      <strong style="color:#1F2E4F;display:block;font-size:15px;margin-bottom:2px;">Alph Knot Recruitment Team</strong>
      recruitment@alphknot.com
    </p>
  </div>

  <!-- Footer -->
  <div style="background:#f8fafc;padding:16px 36px;border-top:0.5px solid #e5e7eb;">
    <p style="font-size:12px;color:#9ca3af;text-align:center;margin:0;">© 2025 Alph Knot · You received this because you applied for a role.</p>
  </div>

</div>
`;

export const recruiterTemplate = (name, email, role, experience, skills, resumeUrl) => {
  const skillTags = skills.split(',').map(s =>
    `<span style="background:#f0f4ff;color:#1F2E4F;font-size:12px;font-weight:500;padding:3px 10px;border-radius:20px;display:inline-block;margin:2px;">${s.trim()}</span>`
  ).join('');

  const row = (label, value) =>
    `<tr>
      <td style="font-size:13px;color:#6b7280;padding:11px 0;border-bottom:0.5px solid #f3f4f6;width:90px;">${label}</td>
      <td style="font-size:14px;color:#111827;font-weight:500;padding:11px 0 11px 16px;border-bottom:0.5px solid #f3f4f6;text-align:right;">${value}</td>
    </tr>`;

  return `
<div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;background:#ffffff;">

  <!-- Header -->
  <div style="background:#1F2E4F;padding:32px 36px;">
    <p style="font-size:12px;color:#94a3b8;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 4px;">Alph Knot · Recruitment</p>
    <p style="font-size:22px;font-weight:700;color:#ffffff;margin:0;">New Application 🚀</p>
  </div>

  <!-- Body -->
  <div style="padding:36px;">
    <table style="width:100%;border-collapse:collapse;">
      ${row('Name', name)}
      ${row('Email', `<a href="mailto:${email}" style="color:#1F2E4F;text-decoration:none;">${email}</a>`)}
      ${row('Role', role)}
      ${row('Experience', experience)}
      <tr>
        <td style="font-size:13px;color:#6b7280;padding:11px 0;width:90px;vertical-align:top;">Skills</td>
        <td style="padding:11px 0 11px 16px;text-align:right;">${skillTags}</td>
      </tr>
    </table>
    <a href="${resumeUrl}" style="display:block;text-align:center;background:#1F2E4F;color:#ffffff;font-size:15px;font-weight:600;padding:14px 28px;border-radius:8px;text-decoration:none;margin-top:28px;">View Resume →</a>
  </div>

  <!-- Footer -->
  <div style="background:#f8fafc;padding:16px 36px;border-top:0.5px solid #e5e7eb;">
    <p style="font-size:12px;color:#9ca3af;text-align:center;margin:0;">© 2025 Alph Knot · Internal recruitment notification</p>
  </div>

</div>
`;
};