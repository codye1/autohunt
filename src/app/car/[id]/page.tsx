'use client';

import DealerInfo from '@/app/components/CarPage/DealerInfo/DealerInfo';
import Description from '@/app/components/CarPage/Description/Description';
import Feature from '@/app/components/CarPage/Feature/Feature';
import Location from '@/app/components/CarPage/Location/Location';
import Slider from '@/app/components/CarPage/Slider/Slider';
import DetailsSection from '@/app/components/DetailsSection/DetailsSection';
import { Car, drivetrain, fuelType, type } from '@/app/lib/types';
import { useState } from 'react';
import 'swiper/css';
import styles from './styles.module.css';
const car: Car = {
  details: {
    brand: 'Tesla',
    model: 'Model 3',
    type: type.new,
    year: 2020,
    bodyType: 'Sedan',
    seats: 5,
    exteriorColor: 'White',
  },
  engine: {
    fuelType: fuelType.electric,
    mileage: 15000,
    transmission: 'Automatic',
    drivetrain: drivetrain.allWheel,
    power: 283, // in kW (approximate for Tesla Model 3 Standard Range Plus)
  },
  batteryInfo: {
    capasity: 54, // in kWh (approximate)
    chargeSpeed: 250, // in kW
    chargePort: 'Type 2 / CCS',
    chargeTime: 6.5, // in hours with a 11 kW charger
  },
  dimension: {
    length: 4694, // in mm
    width: 1849, // in mm
    height: 1443, // in mm
    cargoVolume: 425, // in liters
  },
  price: 50000,
  location: {
    addres: 'Лемаковиця',
    lat: '48.1699764',
    lon: '22.9965939',
  },
  rating: 4,
  reviews: 12,
  img: 'https://i.imgur.com/dO3Oowu.png',
  imgs: [
    'https://i.imgur.com/dO3Oowu.png',
    'https://i.imgur.com/dO3Oowu.png',
    'https://i.imgur.com/dO3Oowu.png',
  ],
  description:
    '"The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."',
  features: [
    'Autopilot',
    'Summon',
    'Autopark',
    'Auto Lane Change',
    '15 inch Touchscreen Display',
    '360° Camera',
    '12 Ultrasonic Sensors',
  ],
  seller: {
    img: 'https://i.imgur.com/KN5KC9i.jpeg',
    phone: '300-222-333',
    email: 'misam@gmail.com',
    name: 'Vasya Pupkin',
  },
};

const Page = (/*{ params }: { params: { id: string } }*/) => {
  const [scroped, setScroped] = useState(true);
  return (
    <div className={styles.page}>
      <Slider imgs={car.imgs} />
      <div className={styles.car}>
        <div className={styles.carInfo}>
          <Description
            onClick={() => {
              setScroped((value) => !value);
            }}
            scroped={scroped}
            description={car.description}
          />
          <Feature features={car.features} />
          <DealerInfo seller={car.seller} />
          <Location
            address={car.location.addres}
            lat={car.location.lat}
            lon={car.location.lon}
          />
        </div>
        <div className={styles.carDetails}>
          <button>${car.price}</button>
          <div className={styles.carDetailsCar}>
            <DetailsSection
              title="Card Details"
              items={[
                { title: 'Brand', value: 'Tesla' },
                { title: 'Model', value: 'Model 3' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
