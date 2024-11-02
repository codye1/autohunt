import { IDataCar } from '@/actions/sellCar';
import { connectToMongoDB } from '@/lib/mongodb';
import Car from '@/models/carModel';
import { SortOrder } from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';

interface CarFilter {
  condition?: string[];
  year?: string[];
  brand?: string[];
  carModel?: string[];
  bodyType?: string[];
  transmission?: string[];
  fuelType?: string[];
  drivetrain?: string[];
  passengerCapacity?: string[];
  exteriorColor?: string[];
  price?: {
    $gte: number;
    $lte: number;
  };
  title?: string;
}

export async function GET(request: NextRequest) {
  await connectToMongoDB();
  const { searchParams } = new URL(request.url);
  const condition = searchParams.getAll('condition');

  const year = searchParams.getAll('year');
  const brand = searchParams.getAll('brand');
  const carModel = searchParams.getAll('carModel');
  const bodyType = searchParams.getAll('bodyType');
  const transmission = searchParams.getAll('transmission');
  const fuelType = searchParams.getAll('fuelType');
  const drivetrain = searchParams.getAll('drivetrain');
  const passengerCapacity = searchParams.getAll('passengerCapacity');
  const exteriorColor = searchParams.getAll('exteriorColor');
  const priceRange = searchParams.getAll('priceRange');
  const title = searchParams.get('title');
  const sortBy = searchParams.getAll('sortBy');

  const filter: CarFilter = {};
  if (condition.length > 0 && condition[0] != 'all')
    filter.condition = condition;
  if (brand.length > 0) filter.brand = brand;
  if (year.length > 0) filter.year = year;
  if (carModel.length > 0) filter.carModel = carModel;
  if (bodyType.length > 0) filter.bodyType = bodyType;
  if (transmission.length > 0) filter.transmission = transmission;
  if (fuelType.length > 0) filter.fuelType = fuelType;
  if (drivetrain.length > 0) filter.drivetrain = drivetrain;
  if (passengerCapacity.length > 0)
    filter.passengerCapacity = passengerCapacity;
  if (exteriorColor.length > 0) filter.exteriorColor = exteriorColor;
  if (title) {
    filter.title = title;
  }

  console.log(filter);

  if (priceRange.length === 2) {
    const [minPrice, maxPrice] = priceRange.map(Number);
    filter.price = {
      $gte: minPrice,
      $lte: maxPrice,
    };
  }

  const sortCriteria: { [key: string]: SortOrder } = {};
  if (sortBy) {
    const sortFields = sortBy.map((field) => {
      const order = field.includes('descending') ? -1 : 1;
      const fieldName = field
        .replace('descending', '')
        .replace('ascending', '')
        .trim();
      return { [fieldName]: order };
    });
    Object.assign(sortCriteria, ...sortFields);
  }
  console.log(sortCriteria);

  const cars = await Car.find(filter).sort(sortCriteria);

  return NextResponse.json(cars, { status: 200 });
}

export async function POST(request: NextRequest) {
  await connectToMongoDB();
  const car: IDataCar = await request.json();
  const newCar = await Car.create(car);
  return NextResponse.json({ carId: String(newCar._id) }, { status: 201 });
}
