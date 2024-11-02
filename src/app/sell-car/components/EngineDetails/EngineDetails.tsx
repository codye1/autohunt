import DropMenu from '@/components/DropMenu/DropMenu';
import TextInput from '@/components/TextInput/TextInput';
import { carDetails } from '@/lib/constants';
import { SellCarFormState } from '@/lib/definitions';
import styles from './engineDetails.module.css';

const EngineDetails = ({ state }: { state: SellCarFormState }) => {
  return (
    <fieldset className={styles.flexContainer}>
      <h1>Engine Details</h1>
      <DropMenu
        items={carDetails.fuelTypes}
        title="Fuel Type"
        name="fuelType"
        className={`${styles.flexItem} minw200`}
        errors={state?.errors?.fuelType}
      />
      <TextInput
        title="Mileage"
        name="mileage"
        type="number"
        placeholder=""
        textIcon="km"
        className={`${styles.flexItem}`}
        errors={state?.errors?.mileage}
      />
      <DropMenu
        title="Transmission"
        name="transmission"
        items={carDetails.transmissions}
        className={`${styles.flexItem} minw200`}
        errors={state?.errors?.transmission}
      />
      <DropMenu
        title="Drive Train"
        name="drivetrain"
        items={carDetails.drivetrains}
        className={`${styles.flexItem} minw200`}
        errors={state?.errors?.drivetrain}
      />
      <TextInput
        title="Engine Capacity"
        name="engineCapacity"
        type="number"
        placeholder=""
        textIcon="cc"
        className={`${styles.flexItem}`}
        errors={state?.errors?.engineCapacity}
      />
      <TextInput
        title="Power"
        name="power"
        type="number"
        placeholder=""
        textIcon="hp"
        className={`${styles.flexItem}`}
        errors={state?.errors?.power}
      />
    </fieldset>
  );
};

export default EngineDetails;
