import { z } from 'zod';

export const signInFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Contain at least one special character.',
    })
    .trim(),
});

export const sellCarFormSchema = z.object({
  title: z.string().min(1, { message: 'Please add title' }),
  bodyType: z.string().min(1, { message: 'Please add body type' }),
  brand: z.string().min(1, { message: 'Please add brand' }),
  carModel: z.string().min(1, { message: 'Please add model' }),
  condition: z.string().min(1, { message: 'Please add condition' }),
  year: z.number().int().gt(1900, { message: 'Please add year' }),
  passengerCapacity: z
    .number()
    .int()
    .gt(1, { message: 'Please add passenger capacity' }),
  exteriorColor: z.string().min(1, { message: 'Please add exterior color' }),
  description: z.string().min(1, { message: 'Please add description' }),
  fuelType: z.string().min(1, { message: 'Please add fuel type' }),
  mileage: z.number().int().nonnegative({ message: 'Please add mileage' }),
  transmission: z.string().min(1, { message: 'Please add transmission' }),
  drivetrain: z.string().min(1, { message: 'Please add drivetrain' }),
  power: z.number().int().nonnegative({ message: 'Please add power' }),
  engineCapacity: z
    .number()
    .int()
    .nonnegative({ message: 'Please add engine capacity' }),
  length: z.number().int().nonnegative({ message: 'Please add length' }),
  width: z.number().int().nonnegative({ message: 'Please add width' }),
  height: z.number().int().nonnegative({ message: 'Please add height' }),
  cargoVolume: z
    .number()
    .int()
    .nonnegative({ message: 'Please add cargo volume' }),
  features: z
    .array(z.string().min(1))
    .nonempty({ message: 'Please add at least one feature' }),
  location: z.object({
    address: z.string().min(1, { message: 'Please add address' }),
    lat: z.string().min(1, { message: 'Please add latitude' }),
    lon: z.string().min(1, { message: 'Please add longitude' }),
  }),
  price: z.number().nonnegative({ message: 'Please add price' }),
  images: z
    .array(z.string())
    .nonempty({ message: 'Please add at least one image' }),
  seller: z.string().min(1, { message: 'Please add seller' }),
});

export type SignInFormState =
  | {
      errors?: {
        name?: string[];
        phone?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type SellCarFormState =
  | {
      errors?: {
        title?: string[];
        bodyType?: string[];
        brand?: string[];
        carModel?: string[];
        condition?: string[];
        exteriorColor?: string[];
        description?: string[];
        fuelType?: string[];
        transmission?: string[];
        drivetrain?: string[];
        features?: string[];
        location?: string[];
        images?: string[];
        year?: string[];
        passengerCapacity?: string[];
        mileage?: string[];
        engineCapacity?: string[];
        power?: string[];
        length?: string[];
        width?: string[];
        height?: string[];
        cargoVolume?: string[];
        address?: string[];
        price?: string[];
      };
      message?: string[];
    }
  | undefined;
