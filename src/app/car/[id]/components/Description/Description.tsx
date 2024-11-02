'use client';

import { useState } from 'react';
import styles from './description.module.css';

interface IDescription {
  description: string;
}

const Description = ({ description }: IDescription) => {
  const [scroped, setScroped] = useState(true);
  console.log();

  return (
    <>
      <section
        className={scroped ? styles.descriptionScroped : styles.description}
      >
        {scroped && <div className={styles.descriptionBackdrop}></div>}
        <h1>Description</h1>
        {description}
      </section>
      {description.length > 685 && (
        <button
          onClick={() => {
            setScroped((value) => !value);
          }}
        >
          {scroped ? 'Детальніше' : 'Скрити'}
        </button>
      )}
    </>
  );
};

export default Description;
