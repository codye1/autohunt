import { connectToMongoDB } from './lib/mongodb';
import styles from './page.module.css';

const page = () => {
  connectToMongoDB();
  return (
    <div className={styles.page}>
      <div>test</div>
    </div>
  );
};

export default page;
