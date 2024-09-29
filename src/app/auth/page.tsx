import React from 'react';
import styles from "./page.module.css"
import LoginForm from '../ui/LoginForm/LoginForm';

const page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.authForms}>
        <LoginForm/>
      </div>
      <div className={styles.infoCard}>

      </div>
    </div>
  );
};

export default page;