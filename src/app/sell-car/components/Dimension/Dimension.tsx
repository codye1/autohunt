import TextInput from '@/components/TextInput/TextInput';
import styles from './dimension.module.css';

const Dimension = () => {
  return (
    <fieldset className={styles.flexContainer}>
      <h1>Dimension</h1>
      <TextInput
        title="Length"
        name="length"
        type="number"
        placeholder=""
        textIcon="mm"
        className={`${styles.flexItem}`}
      />
      <TextInput
        title="Width"
        name="width"
        type="number"
        placeholder=""
        textIcon="mm"
        className={`${styles.flexItem}`}
      />
      <TextInput
        title="Height"
        name="height"
        type="number"
        placeholder=""
        textIcon="mm"
        className={`${styles.flexItem}`}
      />
      <TextInput
        title="Cargo Volume"
        name="cargoVolume"
        type="number"
        placeholder=""
        textIcon="L"
        className={`${styles.flexItem}`}
      />
    </fieldset>
  );
};

export default Dimension;
