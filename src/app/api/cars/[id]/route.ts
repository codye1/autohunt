// app/api/cars/[id]/route.js

import Car from '@/models/carModel';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  // Fetch car data from your data source, e.g., database or external API
  const car = await Car.findById(id);

  return NextResponse.json(car, { status: 200 });
}
