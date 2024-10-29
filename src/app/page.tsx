import Cars from './components/Cars/Cars';
import Filter from './components/Filter/Filter';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <Filter />
      </div>
      <div className={styles.cars}>
        <Cars />
      </div>
    </div>
  );
}
