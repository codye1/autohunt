import styles from './checkBox.module.css';

interface ICheckBox {
  title: string;
  name: string;
  className?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ title, name, className, onChange, checked }: ICheckBox) => {
  return (
    <label className={`${styles.checkBox} ${className}`} htmlFor={title}>
      <span>
        <input
          type="checkBox"
          name={name}
          id={title}
          checked={checked}
          defaultValue={title}
          onChange={onChange}
        />
        <div className={styles.innerOuter}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className={styles.inner}
          >
            <path
              d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className={styles.outer}
          >
            <path
              d="M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z"
              fill="white"
            />
          </svg>
        </div>
      </span>
      <h1>{title}</h1>
    </label>
  );
};

export default CheckBox;
