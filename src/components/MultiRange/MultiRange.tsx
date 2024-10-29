'use client';
import { useState } from 'react';
import MultiRangeInput from '../MultiRangeInput/MultiRangeInput';

import styles from './multiRange.module.css';

interface IMultiRange {
  title: string;
  min: number;
  max: number;
}

const MultiRange = ({ title, min, max }: IMultiRange) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  return (
    <label className={styles.multiRange}>
      <h1>{title}</h1>
      <span>
        <div> ${minVal}</div>-<div> ${maxVal}</div>
      </span>
      <MultiRangeInput
        minVal={minVal}
        maxVal={maxVal}
        min={min}
        max={max}
        setMaxVal={(maxVal) => setMaxVal(maxVal)}
        setMinVal={(minVal) => setMinVal(minVal)}
      />
    </label>
  );
};

export default MultiRange;
