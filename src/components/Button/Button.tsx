import styles from './button.module.css';

interface IButton {
  title: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ title, type, onClick, disabled }: IButton) => {
  return (
    <button
      style={{
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : 'all',
      }}
      type={type}
      onClick={onClick}
      className={styles.button}
    >
      {title}
    </button>
  );
};

export default Button;
