'use client';

import autoHuntLogo from '@public/car logo.png';
import user from '@public/user.svg';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';
const Header = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <header className={styles.header}>
      <Image height={32} width={118} src={autoHuntLogo} alt="autohunt logo" />
      <Link href="/sell-car" title="Sell">
        Sell
      </Link>
      <Link href="/" title="Cars">
        Cars
      </Link>
      <span>
        <Image width={24} height={24} src={user} alt="user icon" />
        {session?.user?.email || (
          <Link href="/signin" title="sign in">
            Sign In
          </Link>
        )}
      </span>
    </header>
  );
};

export default Header;
