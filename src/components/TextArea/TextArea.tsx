import styles from './textArea.module.css';

interface ITextArea {
  title: string;
  name: string;
  placeholder: string;
  className?: string;
}

const TextArea = ({ title, name, placeholder, className }: ITextArea) => {
  return (
    <label htmlFor={name} className={`${styles.textArea} ${className}`}>
      <h1>{title}</h1>
      <textarea name={name} id={name} placeholder={placeholder}></textarea>
    </label>
  );
};

export default TextArea;
