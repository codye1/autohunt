import Image from 'next/image';
import headerLogo from '../../public/auto hunt car.png';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={headerLogo} alt="header logo" />
    </header>
  );
};

export default Header;
