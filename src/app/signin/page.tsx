import SignInForm from '@components/SignInForm/SignInForm';
import autoHuntLogo from '@public/car logo.png';
import facebook from '@public/facebook.png';
import instagram from '@public/instagram.png';
import youtube from '@public/youtube.png';
import Image from 'next/image';
import styles from './page.module.css';

const Page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.authForms}>
        <SignInForm />
      </div>
      <div className={styles.container}>
        <div className={styles.infoCard}>
          <div className={styles.rect}>
            <Image src={autoHuntLogo} alt="Auto Hunt logo" />
            <h1>SignIn</h1>
            <h2>Welcome to AutoHunt</h2>
            <div className={styles.icons}>
              <Image src={facebook} alt="Facebook icon" />
              <Image src={instagram} alt="Instagram icon" />
              <Image src={youtube} alt="Youtube icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
