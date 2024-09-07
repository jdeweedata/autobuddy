# AutoBuddy

AutoBuddy is an AI-powered automotive assistant built with Next.js and TypeScript.

## Features

- Vehicle registration using VIN or license number
- Integration with NPS-LIC API for vehicle data retrieval
- User authentication and credit system
- Admin dashboard with API cost estimator

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/your-username/autobuddy.git
   cd autobuddy
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Cost Management

AutoBuddy uses a credit system to manage API costs. Users need to purchase credits to register vehicles and retrieve vehicle data. Administrators can use the cost estimator in the admin dashboard to estimate API usage costs.

1 Credit = R0.03
Standard vehicle lookup = 1 Credit

## Admin Dashboard

Access the admin dashboard at `/admin` to use the API cost estimator and manage user credits.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS

## Project Structure

- `src/app`: Contains the main application pages and API routes
- `src/components`: Reusable React components
- `public`: Static assets

## Available Scripts

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm start`: Runs the built app in production mode
- `npm run lint`: Runs the linter to check for code quality issues

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

# AutoBuddy Authentication

This document outlines the authentication processes in the AutoBuddy application.

## Sign Up
1. Users can sign up using their email address or Google account.
2. For email sign-ups, users must verify their email address before they can log in.

## Sign In
1. Users can sign in using their email and password or Google account.
2. Email/password sign-in requires a verified email address.

## Password Reset
1. Users can request a password reset from the sign-in page.
2. A reset link is sent to the user's email address.
3. The reset link is valid for 1 hour.
4. Users can set a new password using the reset link.

## Email Verification
1. New users signing up with email receive a verification email.
2. The verification link is valid for 24 hours.
3. Users must verify their email before they can sign in.

## Security Measures
- Passwords are hashed using bcrypt before storage.
- Reset tokens and verification tokens are securely generated and stored.
- All sensitive operations (password reset, email verification) have expiration times.

## Third-Party Authentication
- Google authentication is supported using OAuth 2.0.

For more detailed information on the implementation, please refer to the source code and comments in the relevant files.
