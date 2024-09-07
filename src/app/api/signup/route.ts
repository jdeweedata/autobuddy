import { NextResponse } from 'next/server';
import { sendVerificationEmail } from '@/lib/email';
import prisma from '@/lib/prisma';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password, // Remember to hash the password before storing
      },
    });

    const verificationToken = uuidv4();
    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token: verificationToken,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
      },
    });

    await sendVerificationEmail(email, verificationToken);

    return NextResponse.json({ message: 'User created. Please check your email to verify your account.' });
  } catch (error) {
    console.error('Error during signup:', error);
    return NextResponse.json({ error: 'An error occurred during signup.' }, { status: 500 });
  }
}
