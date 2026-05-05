export const emailTemplate = (name, date, time, id) => {
  return `
    <div style="font-family: Arial, sans-serif; background: #f0f0f0; padding: 40px 16px;">
      <div style="max-width: 560px; margin: auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #ddd;">

        <!-- Header -->
        <div style="background: #0B1E3E; padding: 28px 32px 24px;">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
            <div style="width: 36px; height: 36px; background: #C9A45C; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L12.5 7.5H18L13.5 11L15.5 16.5L10 13L4.5 16.5L6.5 11L2 7.5H7.5L10 2Z" fill="#0B1E3E"/>
              </svg>
            </div>
            <span style="font-size: 18px; font-weight: 600; color: #F5F0E8; letter-spacing: 0.04em;">AlphKnot</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 10px; height: 10px; background: #C9A45C; border-radius: 50%;"></div>
            <span style="font-size: 12px; color: #C9A45C; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;">Meeting Confirmed</span>
          </div>
        </div>

        <!-- Gold Bar -->
        <div style="height: 3px; background: linear-gradient(90deg, #C9A45C 0%, #E8C878 50%, #C9A45C 100%);"></div>

        <!-- Body -->
        <div style="padding: 32px;">

          <p style="font-size: 14px; color: #888; margin: 0 0 4px;">Hello,</p>
          <p style="font-size: 20px; font-weight: 600; color: #0B0B0F; margin: 0 0 20px;">${name}</p>

          <p style="font-size: 14px; color: #555; line-height: 1.7; margin: 0 0 24px;">
            Your meeting has been successfully scheduled. We look forward to connecting with you at the time below.
          </p>

          <!-- Details Card -->
          <div style="background: #0B1E3E; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <p style="font-size: 11px; color: #C9A45C; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; margin: 0 0 4px;">Date</p>
                <p style="font-size: 15px; color: #F5F0E8; font-weight: 600; margin: 0;">${date}</p>
              </div>
              <div>
                <p style="font-size: 11px; color: #C9A45C; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 600; margin: 0 0 4px;">Time</p>
                <p style="font-size: 15px; color: #F5F0E8; font-weight: 600; margin: 0;">${time}</p>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 8px; border-top: 1px solid rgba(201,164,92,0.25); margin-top: 16px; padding-top: 14px;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background: #4CAF82; flex-shrink: 0;"></div>
              <span style="font-size: 12px; color: rgba(245,240,232,0.6);">Confirmed &amp; added to your calendar</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div style="display: flex; gap: 10px; margin-bottom: 16px;">

            <!-- Accept -->
            <a href="http://localhost:5000/api/book-call/accept/${id}"
              style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px;
                     padding: 12px 16px; background: #1A3A2A; color: #4CAF82;
                     text-decoration: none; border-radius: 8px; font-weight: 700;
                     font-size: 13px; border: 1px solid #4CAF82;">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7l3.5 3.5L12 3" stroke="#4CAF82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Accept
            </a>

            <!-- Reject -->
            <a href="http://localhost:5000/api/book-call/reject/${id}"
              style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px;
                     padding: 12px 16px; background: #3A1A1A; color: #E24B4A;
                     text-decoration: none; border-radius: 8px; font-weight: 700;
                     font-size: 13px; border: 1px solid #E24B4A;">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 3l8 8M11 3l-8 8" stroke="#E24B4A" stroke-width="2" stroke-linecap="round"/>
              </svg>
              Reject
            </a>

            <!-- Reschedule -->
            <a href="http://localhost:3000/reschedule/${id}"
              style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px;
                     padding: 12px 16px; background: #1A2A3A; color: #C9A45C;
                     text-decoration: none; border-radius: 8px; font-weight: 700;
                     font-size: 13px; border: 1px solid #C9A45C;">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7a5 5 0 1 0 5-5" stroke="#C9A45C" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M2 3v4h4" stroke="#C9A45C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Reschedule
            </a>

          </div>

          <!-- Join Meeting Button -->
          <a href="http://localhost:3000/meeting/${id}"
            style="display: flex; align-items: center; justify-content: center; gap: 8px;
                   padding: 14px 24px; background: #C9A45C; color: #0B1E3E;
                   text-decoration: none; border-radius: 8px; font-weight: 700;
                   font-size: 14px; letter-spacing: 0.02em; margin-bottom: 16px;">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="3" width="9" height="10" rx="1.5" stroke="#0B1E3E" stroke-width="1.5"/>
              <path d="M11 6l3-2v8l-3-2V6z" fill="#0B1E3E"/>
            </svg>
            Join Meeting
          </a>

          <!-- Calendar Link -->
          <p style="text-align: center; margin: 0 0 24px;">
            <a href="#" style="font-size: 13px; color: #C9A45C; text-decoration: none; border-bottom: 1px solid rgba(201,164,92,0.4); padding-bottom: 1px;">Add to calendar</a>
          </p>

          <!-- Footer -->
          <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #eee; padding-top: 20px;">
            <div>
              <p style="font-size: 13px; font-weight: 600; color: #0B0B0F; margin: 0;">AlphKnot</p>
              <p style="font-size: 11px; color: #999; margin: 2px 0 0;">Global Services Company</p>
            </div>
            <div style="display: flex; gap: 8px;">
              <div style="width: 30px; height: 30px; border-radius: 6px; border: 1px solid #e0e0e0; display: flex; align-items: center; justify-content: center;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="#888" stroke-width="1.2" fill="none"/>
                  <path d="M1 6h12" stroke="#888" stroke-width="1.2"/>
                  <path d="M4 1v2M10 1v2" stroke="#888" stroke-width="1.2" stroke-linecap="round"/>
                </svg>
              </div>
              <div style="width: 30px; height: 30px; border-radius: 6px; border: 1px solid #e0e0e0; display: flex; align-items: center; justify-content: center;">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="5.5" stroke="#888" stroke-width="1.2" fill="none"/>
                  <path d="M7 4v3.5l2 1" stroke="#888" stroke-width="1.2" stroke-linecap="round"/>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
};