import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import prisma from '@/lib/prisma';
import { fetchVehicleDetails, fetchLicenseDetails } from '@/lib/npsLicApi';

const STANDARD_LOOKUP_COST = 1; // 1 credit for standard lookup

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { identifier } = await req.json();

  try {
    // Check if user has enough credits
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user || user.credits < STANDARD_LOOKUP_COST) {
      return NextResponse.json(
        { error: 'Insufficient credits' },
        { status: 402 }
      );
    }

    let vehicleData;
    if (identifier.length === 17) {
      // VIN is typically 17 characters
      vehicleData = await fetchVehicleDetails(identifier);
    } else {
      vehicleData = await fetchLicenseDetails(identifier);
    }

    // Deduct credits from user
    await prisma.user.update({
      where: { id: session.user.id },
      data: { credits: user.credits - STANDARD_LOOKUP_COST },
    });

    // Save vehicle data to database
    const vehicle = await prisma.vehicle.create({
      data: {
        userId: session.user.id,
        vin: vehicleData.vin,
        licenseNumber: vehicleData.licenseNumber,
        registerNumber: vehicleData.registerNumber,
        engineNumber: vehicleData.engineNumber,
        make: vehicleData.make,
        model: vehicleData.model,
        year: vehicleData.year,
        description: vehicleData.description,
        gvm: vehicleData.gvm,
        tare: vehicleData.tare,
        dateOfTest: new Date(vehicleData.dateOfTest),
        numPersons: vehicleData.numPersons,
        expiryDate: new Date(vehicleData.expiryDate),
      },
    });

    return NextResponse.json(vehicle, { status: 201 });
  } catch (error) {
    console.error('Error registering vehicle:', error);
    return NextResponse.json(
      { error: 'Failed to register vehicle' },
      { status: 500 }
    );
  }
}
