'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function VehicleRegistration() {
  const [identifier, setIdentifier] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!session?.user?.email) {
      setError('You must be logged in to register a vehicle.');
      setIsLoading(false);
      return;
    }

    try {
      // Check if the user's email is verified
      const emailVerificationResponse = await fetch('/api/auth/check-email-verification');
      const emailVerificationData = await emailVerificationResponse.json();

      if (!emailVerificationData.isVerified) {
        setError('Please verify your email before registering a vehicle.');
        setIsLoading(false);
        return;
      }

      // Proceed with vehicle registration
      const response = await fetch('/api/register-vehicle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to register vehicle');
      }

      const vehicleData = await response.json();
      console.log('Vehicle registered:', vehicleData);
      router.push('/dashboard'); // Redirect to dashboard or vehicle list page
    } catch (error) {
      setError(error.message || 'An error occurred while registering the vehicle.');
    } finally {
      setIsLoading(false);
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Please sign in to register a vehicle.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Register a Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="identifier" className="block mb-2">
            VIN or License Number:
          </label>
          <input
            type="text"
            id="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? 'Registering...' : 'Register Vehicle'}
        </button>
      </form>
    </div>
  );
}
