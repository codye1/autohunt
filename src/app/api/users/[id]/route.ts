// app/api/cars/[id]/route.js

import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  console.log('id:', id);

  // Fetch car data from your data source, e.g., database or external API
  const user = await User.findById(id);

  return NextResponse.json(user, { status: 200 });
}
