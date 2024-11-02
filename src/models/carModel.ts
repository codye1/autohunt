import { Car as ICar } from '@/lib/types';
import mongoose, { Document, Model } from 'mongoose';

export interface ICarDocument extends ICar, Document {
  createdAt: Date;
  updatedAt: Date;
}

const carSchema = new mongoose.Schema<ICarDocument>(
  {
    title: { type: String, required: true },
    brand: { type: String, required: true },
    carModel: { type: String, required: true },
    condition: { type: String, required: true },
    year: { type: Number, required: true },
    bodyType: { type: String, required: true },
    passengerCapacity: { type: Number, required: true },
    exteriorColor: { type: String, required: true },
    fuelType: { type: String, required: true },
    mileage: { type: Number, required: true },
    transmission: { type: String, required: true },
    drivetrain: { type: String, required: true },
    power: { type: Number, required: true },
    engineCapacity: { type: Number },
    chargeSpeed: { type: Number },
    chargePort: { type: String },
    chargeTime: { type: Number },
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    cargoVolume: { type: Number, required: true },
    price: { type: Number, required: true },
    location: {
      address: { type: String, required: true },
      lat: { type: String, required: true },
      lon: { type: String, required: true },
    },
    rating: { type: Number, required: true },
    reviews: { type: Number, required: true },
    images: { type: [String], required: true },
    description: { type: String, required: true },
    features: { type: [String], required: true },
    seller: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Car: Model<ICarDocument> =
  mongoose.models?.car || mongoose.model('car', carSchema);

export default Car;
