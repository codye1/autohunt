'use client';

import React from 'react';
import styles from './styles.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div className={styles.page}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ margin: '0px -112px' }}
      >
        <SwiperSlide>
          <div className={styles.slideCont}>
            <Image
              src={'https://i.imgur.com/WcCqD2Y.jpeg'}
              fill
              style={{ objectFit: 'cover' }}
              alt="Car photo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideCont}>
            <Image
              src={'https://i.imgur.com/WcCqD2Y.jpeg'}
              fill
              style={{ objectFit: 'cover' }}
              alt="Car photo"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideCont}>
            <Image
              src={'https://i.imgur.com/WcCqD2Y.jpeg'}
              fill
              style={{ objectFit: 'cover' }}
              alt="Car photo"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Page;
