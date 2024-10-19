import styles from './textInput.module.css';

interface ITextInput {
  title: string;
  name: string;
  type: string;
  placeholder: string;
  errors?: string[];
}

const TextInput = ({ title, name, type, placeholder, errors }: ITextInput) => {
  return (
    <label className={styles.textInput}>
      {title}
      <input id={name} name={name} type={type} placeholder={placeholder} />
      {errors && (
        <ul>
          {errors.map((error) => (
            <li key={error}> {error}</li>
          ))}
        </ul>
      )}
    </label>
  );
};

export default TextInput;
