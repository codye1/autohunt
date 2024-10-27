import TextInput from '@/components/TextInput/TextInput';
import styles from './price.module.css';
const Price = () => {
  return (
    <fieldset className={styles.flexContainer}>
      <h1>Price</h1>
      <TextInput
        title="Full price"
        name="price"
        placeholder=""
        type="number"
        textIcon="$"
      />
    </fieldset>
  );
};

export default Price;
