import styles from './textArea.module.css';

interface ITextArea {
  title: string;
  name: string;
  placeholder: string;
  className?: string;
  errors?: string[];
}

const TextArea = ({
  title,
  name,
  placeholder,
  className,
  errors,
}: ITextArea) => {
  return (
    <label htmlFor={name} className={`${styles.textArea} ${className}`}>
      <h1>{title}</h1>
      <textarea name={name} id={name} placeholder={placeholder}></textarea>
      <ul className="errors">
        {errors?.map((error, index) => <li key={index}>{error}</li>)}
      </ul>
    </label>
  );
};

export default TextArea;
