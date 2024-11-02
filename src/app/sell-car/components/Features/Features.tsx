'use client';

import CheckBox from '@/components/CheckBox/CheckBox';
import TextArea from '@/components/TextArea/TextArea';
import TextInput from '@/components/TextInput/TextInput';
import { useState } from 'react';
import styles from './features.module.css';

const checkBoxs: { title: string }[] = [
  { title: 'Power Steering' },
  { title: 'AC' },
  { title: 'Alarm' },
  { title: 'Bluetooth' },
  { title: 'Heated Seats' },
  { title: 'Wifi' },
  { title: 'Cruise Control' },
  { title: 'Front Parking Sensors' },
  { title: 'Rear Parking Sensors' },
  { title: 'Roof Rack' },
  { title: 'Power Windows' },
  { title: 'Sunroof' },
  { title: 'USB Port' },
  { title: 'Sound System' },
  { title: 'Memory Seats' },
];

const Features = () => {
  const [searchCheckBox, setSearchCheckBox] = useState('');
  const [others, setOthers] = useState(false);
  return (
    <fieldset className={styles.flexContainer}>
      <h1>Features</h1>
      <TextInput
        title=""
        name="chekBoxSearch"
        type="text"
        placeholder="Search here"
        className={styles.searchCheckBox}
        trackValue={{
          value: searchCheckBox,
          onChange: (e) => setSearchCheckBox(e.target.value),
        }}
      />
      <div className={styles.checkBoxCont}>
        {checkBoxs
          .filter((checkBox) => checkBox.title.includes(searchCheckBox))
          .map((checkBox, index) => (
            <CheckBox
              key={index}
              title={checkBox.title}
              name={'features'}
              className={styles.flexItem}
            />
          ))}
        <CheckBox
          title={'Others'}
          name={'othersValue'}
          onChange={() => setOthers((value) => !value)}
          className={styles.flexItem}
        />
        {others && (
          <TextArea
            title=""
            name="others"
            placeholder="Enter other features here (through coma)"
          />
        )}
      </div>
    </fieldset>
  );
};

export default Features;
