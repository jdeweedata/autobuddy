import nodemailer from 'nodemailer';
import { getVerificationEmailTemplate, getPasswordResetEmailTemplate } from '@/utils/emailTemplates';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export async function sendVerificationEmail(email: string, verificationToken: string) {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/api/auth/verify-email?token=${verificationToken}`;
  const htmlContent = getVerificationEmailTemplate(verificationUrl);
  
  await sendEmail({
    to: email,
    subject: 'Verify Your Email Address',
    html: htmlContent,
  });
}

export async function sendPasswordResetEmail(email: string, resetUrl: string) {
  const htmlContent = getPasswordResetEmailTemplate(resetUrl);
  
  await sendEmail({
    to: email,
    subject: 'Reset Your Password',
    html: htmlContent,
  });
}
