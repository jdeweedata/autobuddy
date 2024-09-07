export function getVerificationEmailTemplate(verificationUrl: string): string {
  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Verify Your Email Address</h2>
          <p>Thank you for registering with AutoBuddy. Please click the button below to verify your email address:</p>
          <p>
            <a href="${verificationUrl}" class="button">Verify Email</a>
          </p>
          <p>If you didn't request this verification, you can safely ignore this email.</p>
          <p>This verification link will expire in 24 hours.</p>
          <p>Best regards,<br>The AutoBuddy Team</p>
        </div>
      </body>
    </html>
  `;
}

export function getPasswordResetEmailTemplate(resetUrl: string): string {
  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Reset Your Password</h2>
          <p>You have requested to reset your password for your AutoBuddy account. Click the button below to set a new password:</p>
          <p>
            <a href="${resetUrl}" class="button">Reset Password</a>
          </p>
          <p>If you didn't request this password reset, you can safely ignore this email. Your password will remain unchanged.</p>
          <p>This password reset link will expire in 1 hour.</p>
          <p>Best regards,<br>The AutoBuddy Team</p>
        </div>
      </body>
    </html>
  `;
}

export function getWelcomeEmailTemplate(userName: string): string {
  return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Welcome to AutoBuddy!</h2>
          <p>Hello ${userName},</p>
          <p>Thank you for joining AutoBuddy. We're excited to have you on board!</p>
          <p>With AutoBuddy, you can easily manage your vehicles, track maintenance, and more.</p>
          <p>If you have any questions or need assistance, don't hesitate to contact our support team.</p>
          <p>Best regards,<br>The AutoBuddy Team</p>
        </div>
      </body>
    </html>
  `;
}
