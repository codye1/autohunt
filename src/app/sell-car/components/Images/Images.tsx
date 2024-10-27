'use client';

import Loader from '@/components/Loader/Loader';
import { uploadImage } from '@/lib/uploadImg';
import closeIcon from '@public/close.svg';
import uploadIcon from '@public/uploadIcon.svg';
import Image from 'next/image';
import { useState } from 'react';
import styles from './images.module.css';

const Images = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageLinks, setImageLinks] = useState<string[]>([]);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const url = await uploadImage(file, (value) => {
      setIsLoading(value);
    });
    console.log(url);
    setImageLinks((prev) => [...prev, url]);
  };

  return (
    <fieldset className={styles.flexContainer}>
      <h1>Images</h1>
      <label
        className={styles.fileUpload}
        htmlFor="imgUpload"
        onClick={(e) => {
          if (isLoading) {
            e.preventDefault();
          }
        }}
      >
        <span>
          {isLoading ? (
            <Loader />
          ) : (
            <Image src={uploadIcon} alt="upload icon" />
          )}
        </span>

        <input
          type="file"
          accept="image/*"
          id="imgUpload"
          onChange={handleFileChange}
        />
      </label>
      {imageLinks.map((link, index) => (
        <div
          key={index}
          className={styles.uploadedImg}
          onClick={() => {
            setImageLinks((prev) => prev.filter((_, i) => i !== index));
          }}
        >
          <Image
            fill
            style={{ objectFit: 'cover' }}
            src={link}
            alt="uploaded image"
          />
          <div className={styles.removeImg}>
            <Image src={closeIcon} alt="closeImg" />
          </div>
        </div>
      ))}
      {imageLinks.map((link, index) => (
        <input key={index} type="hidden" name={`images`} value={link} />
      ))}
    </fieldset>
  );
};

export default Images;
