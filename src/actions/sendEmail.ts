'use server';

import { EmailTemplate } from '@/components/emailTemplate/emailTemplate';
import { personalInformations } from '@/config/personalInformations';
import { Resend } from 'resend';

export async function sendEmail(data: {
  name: string;
  email: string;
  message: string;
  captchaToken: string;
}) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const recaptchaResponse = await verifyCaptcha(data.captchaToken);

  console.log(recaptchaResponse, data.captchaToken);
  if (!recaptchaResponse.success) {
    throw new Error('Failed reCAPTCHA validation');
  }

  try {
    const response = await resend.emails.send({
      from: `Wiadomość z portfolio <onboarding@resend.dev>`,
      to: [personalInformations.email],
      subject: 'Zapytanie z portfolio',
      replyTo: `${data.email}`,
      react: EmailTemplate({ ...data }),
    });
    return response;
  } catch (error) {
    throw new Error('Failed to send email');
  }
}

async function verifyCaptcha(token: string): Promise<any> {
  const secretKey = process.env.CAPTCHA_SECRET_KEY!;
  const url = `https://www.google.com/recaptcha/api/siteverify`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${secretKey}&response=${token}`,
  });

  return response.json();
}
