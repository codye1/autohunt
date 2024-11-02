import RadioButton from '../RadioButton/RadioButton';
import styles from './twoRadio.module.css';

interface ITwoRadio {
  name: string;
  title: string;
  firstRadio: {
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  secondRadio: {
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  errros?: string[];
}

const TwoRadio = ({
  name,
  title,
  firstRadio,
  secondRadio,
  errros,
}: ITwoRadio) => {
  return (
    <section className={styles.twoRadio}>
      <h1>{title}</h1>
      <RadioButton
        title={firstRadio.title}
        value={firstRadio.value}
        name={name}
      />
      <RadioButton
        title={secondRadio.title}
        value={secondRadio.value}
        name={name}
      />
      <ul className="errors">
        {errros?.map((error, index) => <li key={index}>{error}</li>)}
      </ul>
    </section>
  );
};

export default TwoRadio;
