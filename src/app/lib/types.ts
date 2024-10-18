enum type {
  new = 'new',
  used = 'used',
}

enum driveType {
  frontWheel = 'Front-wheel drive',
  rearWheel = 'Rear-wheel drive',
  allWheel = 'All-wheel drive',
  fourWheel = 'Four-wheel drive',
}

enum engine {
  diesel = 'Diesel',
  electric = 'Electric',
  gasoline = 'Gasoline',
  hybrid = 'Hybrid',
  gas = 'Natural gas',
}

interface Car {
  type: type;
  title: string;
  price: number;
  location: string;
  year: number;
  driveType: driveType;
  engine: engine;
  seats: number;
  rating: number;
  reviews: number;
  img: string;
}

export default Car;

export { type, driveType, engine };
