# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2023-05-25 14:30 GMT+2

### Added
- Password reset functionality
  - New API route for password reset requests (`src/app/api/auth/reset-password/route.ts`)
  - Email template for password reset (`src/utils/emailTemplates.ts`)
  - Password reset page for users to set a new password (`src/app/auth/reset-password/page.tsx`)
- Unit tests for password reset functionality (`__tests__/reset-password.test.ts`)
- Forgot password page (`src/app/auth/forgot-password/page.tsx`)
- API route for handling forgot password requests (`src/app/api/auth/forgot-password/route.ts`)

### Changed
- Updated authentication flow to include password reset
- Enhanced error handling in authentication-related API routes
- Improved user feedback during the password reset process
- Updated README.md with new authentication process details

### Updated
- Prisma schema to include password and reset token fields
- Migration file to add new fields to User model (`prisma/migrations/20240907224431_add_password_and_reset_fields/migration.sql`)

## [0.1.0] - 2023-05-20 10:00 GMT+2

### Added
- Initial project setup
- Basic authentication system
  - Sign up functionality
  - Sign in functionality
  - Email verification process
- Google OAuth integration
- Basic user profile management
- Landing page component (`src/components/LandingPage.tsx`)
- API routes for authentication
- Prisma setup for database management
- NextAuth.js configuration
- Email sending functionality
- Tailwind CSS setup for styling

### File Structure

autobuddy-web/
├── tests/
│ └── reset-password.test.ts
├── prisma/
│ ├── migrations/
│ │ └── 20240907224431_add_password_and_reset_fields/
│ │ └── migration.sql
│ └── schema.prisma
├── public/
├── src/
│ ├── app/
│ │ ├── api/
│ │ │ └── auth/
│ │ │ ├── [...nextauth]/
│ │ │ │ └── route.ts
│ │ │ ├── forgot-password/
│ │ │ │ └── route.ts
│ │ │ └── reset-password/
│ │ │ └── route.ts
│ │ ├── auth/
│ │ │ ├── forgot-password/
│ │ │ │ └── page.tsx
│ │ │ └── reset-password/
│ │ │ └── page.tsx
│ │ └── page.tsx
│ ├── components/
│ │ └── LandingPage.tsx
│ ├── lib/
│ │ ├── email.ts
│ │ └── prisma.ts
│ └── utils/
│ └── emailTemplates.ts
├── .gitignore
├── next.config.cjs
├── package.json
├── README.md
└── tsconfig.json

For more detailed information on specific files and their contents, please refer to the source code and comments in the relevant files.