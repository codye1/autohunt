import RadioButton from '@/components/RadioButton/RadioButton';
import styles from './condition.module.css';

const Condition = () => {
  return (
    <label className={styles.condition}>
      <h1>Condition</h1>

      <RadioButton title="All" value="all" name="condition" />
      <RadioButton title="New" value="new" name="condition" />
      <RadioButton title="Used" value="used" name="condition" />
    </label>
  );
};

export default Condition;
