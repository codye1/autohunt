import DropMenu from '@/components/DropMenu/DropMenu';
import TextInput from '@/components/TextInput/TextInput';
import { carDetails } from '@/lib/constants';
import styles from './engineDetails.module.css';

const EngineDetails = () => {
  return (
    <fieldset className={styles.flexContainer}>
      <h1>Engine Details</h1>
      <DropMenu
        items={carDetails.fuelTypes}
        title="Fuel Type"
        name="fuelType"
        className={`${styles.flexItem} minw200`}
      />
      <TextInput
        title="Mileage"
        name="mileage"
        type="number"
        placeholder=""
        textIcon="km"
        className={`${styles.flexItem}`}
      />
      <DropMenu
        title="Transmission"
        name="transmission"
        items={carDetails.transmissions}
        className={`${styles.flexItem} minw200`}
      />
      <DropMenu
        title="Drive Train"
        name="driveTrain"
        items={carDetails.drivetrains}
        className={`${styles.flexItem} minw200`}
      />
      <TextInput
        title="Engine Capacity"
        name="engineCapacity"
        type="number"
        placeholder=""
        textIcon="cc"
        className={`${styles.flexItem}`}
      />
      <TextInput
        title="Power"
        name="power"
        type="number"
        placeholder=""
        textIcon="hp"
        className={`${styles.flexItem}`}
      />
    </fieldset>
  );
};

export default EngineDetails;
