import TextInput from '@/components/TextInput/TextInput';
import { SellCarFormState } from '@/lib/definitions';
import styles from './dimension.module.css';

const Dimension = ({ state }: { state: SellCarFormState }) => {
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
        errors={state?.errors?.length}
      />
      <TextInput
        title="Width"
        name="width"
        type="number"
        placeholder=""
        textIcon="mm"
        className={`${styles.flexItem}`}
        errors={state?.errors?.width}
      />
      <TextInput
        title="Height"
        name="height"
        type="number"
        placeholder=""
        textIcon="mm"
        className={`${styles.flexItem}`}
        errors={state?.errors?.height}
      />
      <TextInput
        title="Cargo Volume"
        name="cargoVolume"
        type="number"
        placeholder=""
        textIcon="L"
        className={`${styles.flexItem}`}
        errors={state?.errors?.cargoVolume}
      />
    </fieldset>
  );
};

export default Dimension;
