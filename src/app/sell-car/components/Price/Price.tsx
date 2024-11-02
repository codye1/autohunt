import TextInput from '@/components/TextInput/TextInput';
import { SellCarFormState } from '@/lib/definitions';
import styles from './price.module.css';
const Price = ({ state }: { state: SellCarFormState }) => {
  return (
    <fieldset className={styles.flexContainer}>
      <h1>Price</h1>
      <TextInput
        title="Full price"
        name="price"
        placeholder=""
        type="number"
        textIcon="$"
        errors={state?.errors?.price}
      />
    </fieldset>
  );
};

export default Price;
