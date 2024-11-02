import SellCarForm from './components/SellCarForm/SellCarForm';
import styles from './page.module.css';

const Page = async () => {
  return (
    <div className={styles.sellCar}>
      <SellCarForm />
    </div>
  );
};

export default Page;
