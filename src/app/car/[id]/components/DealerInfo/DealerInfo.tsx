import { IUser } from '@/lib/types';
import emailIcon from '@public/email.svg';
import phoneIcon from '@public/phone.svg';
import Image from 'next/image';
import styles from './styles.module.css';

const DealerInfo = ({ seller }: { seller: IUser }) => {
  return (
    <section>
      <h1>Dealer Info</h1>
      <div className={styles.dealerInfo}>
        <section className={styles.name}>
          <Image
            src={seller.img}
            width={56}
            height={56}
            style={{ objectFit: 'cover', borderRadius: '50%' }}
            alt="Car photo"
          />
          <div>
            <h1>{seller.name || 'not found'}</h1>
            <h2>Dealer</h2>
          </div>
        </section>
        <section className={styles.phone}>
          <Image
            src={phoneIcon}
            width={24}
            height={24}
            style={{ objectFit: 'cover' }}
            alt="Car photo"
          />
          <h1>{seller.phone || 'not found'}</h1>
        </section>
        <section className={styles.email} title={seller.email}>
          <Image
            src={emailIcon}
            width={24}
            height={24}
            style={{ objectFit: 'cover' }}
            alt="Car photo"
          />
          <h1>{seller.email}</h1>
        </section>
      </div>
    </section>
  );
};

export default DealerInfo;
