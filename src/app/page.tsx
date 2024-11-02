'use client';

import { useState } from 'react';
import Cars from './components/Cars/Cars';
import Filter from './components/Filter/Filter';
import styles from './page.module.css';

export default function Home() {
  const [params, setParams] = useState(new URLSearchParams());

  return (
    <div className={styles.page}>
      <div className={styles.filters}>
        <Filter params={params.toString()} setParams={setParams} />
      </div>
      <div className={styles.cars}>
        <Cars params={params} setParams={setParams} />
      </div>
    </div>
  );
}
