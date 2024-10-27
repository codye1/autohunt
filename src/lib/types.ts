enum condition {
  new = 'new',
  used = 'used',
}

enum drivetrain {
  frontWheel = 'Front-wheel drive',
  rearWheel = 'Rear-wheel drive',
  allWheel = 'All-wheel drive',
  fourWheel = 'Four-wheel drive',
}

enum fuelType {
  diesel = 'Diesel',
  electric = 'Electric',
  gasoline = 'Gasoline',
  hybrid = 'Hybrid',
  gas = 'Natural gas',
}

export interface Car {
  details: {
    brand: string;
    model: string;
    condition: condition;
    year: number;
    bodyType: string;
    seats: number;
    exteriorColor: string;
  };
  engine: {
    fuelType: fuelType;
    mileage: number;
    transmission: string;
    drivetrain: drivetrain;
    power: number;
  };
  batteryInfo?: {
    capasity: number;
    chargeSpeed: number;
    chargePort: string;
    chargeTime: number;
  };
  dimension: {
    length: number;
    width: number;
    height: number;
    cargoVolume: number;
  };
  price: number;
  location: {
    addres: string;
    lat: string;
    lon: string;
  };
  rating: number;
  reviews: number;
  img: string;
  imgs: string[];
  description: string;
  features: string[];
  seller: IUser;
}

export interface IUser {
  email: string;
  phone: string;
  img: string;
  name: string;
}

export { condition, drivetrain, fuelType };
// eslint-disable-next-line prettier/prettier
