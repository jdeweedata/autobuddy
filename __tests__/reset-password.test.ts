import { NextRequest } from 'next/server';
import { POST } from '@/app/api/auth/reset-password/route';
import prisma from '@/lib/prisma';

jest.mock('@/lib/prisma', () => ({
  user: {
    findFirst: jest.fn(),
    update: jest.fn(),
  },
}));

describe('Reset Password API', () => {
  it('should reset password successfully', async () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      resetToken: 'valid-token',
      resetTokenExpiry: new Date(Date.now() + 3600000),
    };

    (prisma.user.findFirst as jest.Mock).mockResolvedValue(mockUser);
    (prisma.user.update as jest.Mock).mockResolvedValue({ ...mockUser, password: 'new-hashed-password' });

    const req = new NextRequest('http://localhost:3000/api/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token: 'valid-token', password: 'new-password' }),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe('Password reset successfully');
  });

  it('should return error for invalid token', async () => {
    (prisma.user.findFirst as jest.Mock).mockResolvedValue(null);

    const req = new NextRequest('http://localhost:3000/api/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token: 'invalid-token', password: 'new-password' }),
    });

    const response = await POST(req);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Invalid or expired reset token');
  });
});
