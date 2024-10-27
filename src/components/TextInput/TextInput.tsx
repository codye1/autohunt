import Image from 'next/image';
import styles from './textInput.module.css';

interface Tip<T> {
  title: string;
  value: T;
}

interface ITextInput<T> {
  title: string;
  name: string;
  type: string;
  placeholder: string;
  trackValue?: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
  errors?: string[];
  className?: string;
  textIcon?: string;
  imgIcon?: string;
  tips?: { tips: Tip<T>[]; onClick: (tip: Tip<T>) => void; tipsOpen: boolean };
}

const TextInput = <T,>({
  title,
  name,
  type,
  placeholder,
  errors,
  className,
  textIcon,
  imgIcon,
  trackValue,
  tips,
}: ITextInput<T>) => {
  return (
    <label className={`${styles.textInput} ${className}`}>
      {title}
      <span>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={trackValue?.onChange}
          value={trackValue?.value}
        />
        {textIcon && <i>{textIcon}</i>}
        {imgIcon && (
          <div className={styles.imgIcon}>
            <Image src={imgIcon} alt="icon" />
          </div>
        )}
      </span>
      {tips?.tipsOpen && tips.tips.length > 0 && (
        <menu className={styles.tips}>
          <ul>
            {tips.tips.map((tip, index) => (
              <li
                key={index}
                onClick={() => {
                  tips.onClick(tip);
                }}
              >
                {tip.title}
              </li>
            ))}
          </ul>
        </menu>
      )}
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
