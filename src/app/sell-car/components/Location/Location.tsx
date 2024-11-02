'use client';

import TextInput from '@/components/TextInput/TextInput';
import getAdress from '@/helpers/getAddress';
import { SellCarFormState } from '@/lib/definitions';
import { useState } from 'react';
import styles from './location.module.css';
interface Tip {
  title: string;
  value: { lat: string; lon: string };
}

let timeout: NodeJS.Timeout;

const Location = ({ state }: { state: SellCarFormState }) => {
  const [searchAddress, setSearchAddress] = useState('');
  const [tips, setTips] = useState<Tip[]>([]);
  const [tipsOpen, setTipsOpen] = useState(false);
  const [tip, setTip] = useState<Tip>({
    title:
      'Виноградов, Vynohradiv Urban Hromada, Береговский район, 90300, Украина',
    value: { lat: '48.140417', lon: '23.0360182' },
  });
  return (
    <fieldset className={styles.flexContainer}>
      <h1>Location</h1>
      <TextInput
        title="Address"
        name="address"
        placeholder=""
        type="text"
        trackValue={{
          onChange: (e) => {
            setTipsOpen(true);
            clearTimeout(timeout);
            setSearchAddress(e.target.value);
            timeout = setTimeout(async () => {
              setTips(await getAdress(e.target.value));
            }, 500);
          },
          value: searchAddress,
        }}
        tips={{
          tips,
          onClick: (tip) => {
            setSearchAddress(tip.title);
            setTip(tip);
            setTipsOpen(false);
          },
          tipsOpen,
        }}
        errors={state?.errors?.address}
      />
      <iframe
        width="100%"
        height="483px"
        src={`https://api.maptiler.com/maps/streets-v2/?key=XyT8E9T7XeDwpsq9fbbX#13.1/${tip.value.lat}/${tip.value.lon}`}
      ></iframe>
      <input type="hidden" name="lat" value={tip.value.lat} />
      <input type="hidden" name="lon" value={tip.value.lon} />
    </fieldset>
  );
};

export default Location;
