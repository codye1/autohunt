import { MouseEvent } from 'react';
import styles from './inputNumber.module.css';

interface IInputNumber {
  increment: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => void;
  decrement: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => void;
  name: string;
  value: number;
  title: string;
  className?: string;
}

const InputNumber = ({
  increment,
  decrement,
  name,
  value,
  className,
  title,
}: IInputNumber) => {
  return (
    <label className={`${className} ${styles.inputNumberCont}`}>
      <h1>{title}</h1>
      <span className={styles.inputNumber}>
        <button
          onClick={(ev) => {
            ev.preventDefault();
            decrement(ev);
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="2"
              viewBox="0 0 14 2"
              fill="none"
            >
              <path d="M14 2H0V0H14V2Z" fill="white" />
            </svg>
          </span>
        </button>
        <input
          id={name}
          min={0}
          value={value}
          name={name}
          readOnly
          type="number"
        />
        <button
          onClick={(ev) => {
            ev.preventDefault();
            increment(ev);
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
            </svg>
          </span>
        </button>
      </span>
    </label>
  );
};

export default InputNumber;
