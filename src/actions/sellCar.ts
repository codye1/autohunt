import { sellCarFormSchema, SellCarFormState } from '@/lib/definitions';
import { Car } from '@/lib/types';

export interface IDataCar extends Omit<Car, 'seller'> {
  seller: string;
}

const sellCar = async (state: SellCarFormState, formData: FormData) => {
  const validatedFields = sellCarFormSchema.safeParse({
    title: formData.get('title'),
    bodyType: formData.get('bodyType'),
    brand: formData.get('brand'),
    carModel: formData.get('model'),
    condition: formData.get('condition'),
    year: Number(formData.get('year')),
    passengerCapacity: Number(formData.get('passengerCapacity')),
    exteriorColor: formData.get('exteriorColor'),
    description: formData.get('description'),
    fuelType: formData.get('fuelType'),
    mileage: Number(formData.get('mileage')),
    transmission: formData.get('transmission'),
    drivetrain: formData.get('drivetrain'),
    power: Number(formData.get('power')),
    engineCapacity: Number(formData.get('engineCapacity')),
    length: Number(formData.get('length')),
    width: Number(formData.get('width')),
    height: Number(formData.get('height')),
    cargoVolume: Number(formData.get('cargoVolume')),
    features: [
      ...formData.getAll('features'),
      ...(formData.get('others')
        ? (formData.get('others') as string).split(',')
        : []),
    ],
    location: {
      lat: formData.get('lat'),
      lon: formData.get('lon'),

      address: formData.get('address'),
    },
    price: Number(formData.get('price')),
    images: formData.getAll('images'),
    seller: formData.get('seller'),
  });

  if (!validatedFields.success) {
    return {
      errors: {
        ...validatedFields.error.flatten().fieldErrors,
      },
    };
  }

  const car: IDataCar = {
    ...validatedFields.data,
    rating: 0,
    reviews: 0,
  };
  try {
    const response = await fetch('/api/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });
    const data = await response.json();
    window.location.href = `/car/${data.carId}`;
    return { carId: data.id };
  } catch (error) {
    console.log('Error selling car:', error);
    return {
      message: ['Error selling car'],
    };
  }
};

export default sellCar;
