import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { credits } = await req.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email ?? undefined },
      data: { credits: credits },
    });

    // Ensure the User model has a 'credits' field
    const userCredits = updatedUser.credits ?? 0;

    return NextResponse.json({ credits: userCredits }, { status: 200 });
  } catch (error) {
    console.error('Error purchasing credits:', error);
    return NextResponse.json(
      { error: 'Failed to purchase credits' },
      { status: 500 }
    );
  }
}
