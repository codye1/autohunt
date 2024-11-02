'use client';

import Description from '@/app/car/[id]/components/Description/Description';
import DetailsSection from '@/app/car/[id]/components/DetailsSection/DetailsSection';
import Feature from '@/app/car/[id]/components/Feature/Feature';
import Location from '@/app/car/[id]/components/Location/Location';
import Slider from '@/app/car/[id]/components/Slider/Slider';
import useCar from '@/app/hooks/useCar';
import useUser from '@/app/hooks/useUser';
import Loader from '@/components/Loader/Loader';
import 'swiper/css';
import DealerInfo from './components/DealerInfo/DealerInfo';
import styles from './styles.module.css';

const Page = ({ params }: { params: { id: string } }) => {
  const {
    data: car,
    isLoading: carLoading,
    error: carError,
  } = useCar(params.id);

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useUser(car?.seller || '');

  return carLoading ? (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Loader />
    </div>
  ) : carError ? (
    <div>Error</div>
  ) : (
    car && (
      <div className={styles.page}>
        <Slider imgs={car.images} />
        <div className={styles.car}>
          <div className={styles.carInfo}>
            <Description description={car.description} />
            <Feature features={car.features} />
            {userLoading ? (
              <Loader />
            ) : userError ? (
              <div>Error dealerinfo</div>
            ) : (
              user && <DealerInfo seller={user} />
            )}
            <Location
              address={car.location.address}
              lat={car.location.lat}
              lon={car.location.lon}
            />
          </div>
          <div className={styles.carDetails}>
            <button>${car.price}</button>
            <div className={styles.carDetailsCad}>
              <DetailsSection
                title="Card Details"
                items={[
                  { title: 'Brand', value: car.brand },
                  { title: 'Model', value: car.carModel },
                  { title: 'Year', value: `${car.year}` },
                  { title: 'Body Type', value: car.bodyType },
                  { title: 'Seats', value: `${car.passengerCapacity}` },
                  { title: 'Exterior Color', value: car.exteriorColor },
                ]}
              />
              <DetailsSection
                title="Engine"
                items={[
                  { title: 'Fuel Type', value: car.fuelType },
                  { title: 'Mileage', value: `${car.mileage}` },
                  { title: 'Transmission', value: car.transmission },
                  { title: 'Drivetrain', value: car.drivetrain },
                  { title: 'Power', value: `${car.power}` },
                ]}
              />

              <DetailsSection
                title="Dimensions"
                items={[
                  { title: 'Length', value: `${car.length} mm` },
                  { title: 'Width', value: `${car.width} mm` },
                  { title: 'Height', value: `${car.height} mm` },
                  {
                    title: 'Cargo Volume',
                    value: `${car.cargoVolume} L`,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Page;
