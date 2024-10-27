import checkBox from '@public/check_box.svg';
import Image from 'next/image';
import styles from './feature.module.css';

interface IFeature {
  features: string[];
}

const Feature = ({ features }: IFeature) => {
  return (
    <section>
      <h1>Feature</h1>
      <menu className={styles.featureItems}>
        {features.map((feature, index) => (
          <div className={styles.featureItem} key={index}>
            <Image
              src={checkBox}
              width={22}
              height={22}
              style={{ objectFit: 'cover' }}
              alt="Car photo"
            />
            {feature}
          </div>
        ))}
      </menu>
    </section>
  );
};

export default Feature;
