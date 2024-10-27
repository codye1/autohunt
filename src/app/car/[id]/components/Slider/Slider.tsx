'use client';

import Image from 'next/image';
import { useState } from 'react';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import styles from './slider.module.css';

interface Slider {
  imgs: string[];
}

const Slider = ({ imgs }: Slider) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | SwiperClass>(null);

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[FreeMode, Navigation, Thumbs]}
        style={{ margin: '0px -112px' }}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slideCont}>
              <Image
                src={img}
                fill
                style={{ objectFit: 'cover' }}
                alt="Car photo"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={36}
        slidesPerView={imgs.length}
        freeMode={true}
        watchSlidesProgress={true}
        onSlideChange={() => console.log('slide change')}
        style={{ width: '100%', marginTop: '36px' }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <div className={styles.miniSlideCont}>
              <Image
                src={img}
                fill
                style={{ objectFit: 'cover' }}
                alt="Car photo"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
