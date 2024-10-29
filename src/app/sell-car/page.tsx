import Button from '@/components/Button/Button';
import CarDetails from './components/CarDetails/CarDetails';
import Dimension from './components/Dimension/Dimension';
import EngineDetails from './components/EngineDetails/EngineDetails';
import Features from './components/Features/Features';
import Images from './components/Images/Images';
import Location from './components/Location/Location';
import Price from './components/Price/Price';
import styles from './page.module.css';

const page = () => {
  return (
    <div className={styles.sellCar}>
      <form action="">
        <CarDetails />
        <EngineDetails />
        <Dimension />
        <Features />
        <Location />
        <Price />
        <Images />
        <Button title="Sell my car" type="submit" disabled />
      </form>
    </div>
  );
};

export default page;
