'use client';

import { useCallback, useEffect, useRef } from 'react';
import styles from './multiRangeInput.module.css';

interface IMultiRangeInput {
  minVal: number;
  maxVal: number;
  min: number;
  max: number;
  setMinVal: (value: number) => void;
  setMaxVal: (value: number) => void;
}

const MultiRangeInput = ({
  minVal,
  maxVal,
  min,
  max,
  setMaxVal,
  setMinVal,
}: IMultiRangeInput) => {
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className={styles.MultiRangeInput}>
      <input
        type="range"
        min={min}
        max={max}
        step={100}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`${styles.thumb} ${styles.thubLeft}`}
        style={{ zIndex: '5' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={100}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={`${styles.thumb} ${styles.thubRight}`}
        style={{ zIndex: '5' }}
      />

      <div className={styles.slider}>
        <div className={styles.sliderTrack} />
        <div ref={range} className={styles.sliderRange} />
      </div>
    </div>
  );
};

export default MultiRangeInput;
