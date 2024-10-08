'use client';
import { signOut } from 'next-auth/react';
import React from 'react';

const page = () => {
  return (
    <div>
      ADD CAR
      <button
        onClick={async () => {
          await signOut({ callbackUrl: '/' });
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default page;
