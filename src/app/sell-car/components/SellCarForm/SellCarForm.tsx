'use client';

import sellCar from '@/actions/sellCar';
import Button from '@/components/Button/Button';
import { useSession } from 'next-auth/react';
import { useFormState } from 'react-dom';
import CarDetails from '../CarDetails/CarDetails';
import Dimension from '../Dimension/Dimension';
import EngineDetails from '../EngineDetails/EngineDetails';
import Features from '../Features/Features';
import Images from '../Images/Images';
import Location from '../Location/Location';
import Price from '../Price/Price';

const SellCarForm = () => {
  const [state, action] = useFormState(sellCar, undefined);
  const { data: session } = useSession();

  return (
    <form action={action}>
      <CarDetails state={state} />
      <EngineDetails state={state} />
      <Dimension state={state} />
      <Features />
      <Location state={state} />
      <Price state={state} />
      <Images state={state} />
      <Button title="Sell my car" type="submit" />
      <input type="hidden" value={session?.user.id || ''} name="seller" />
    </form>
  );
};

export default SellCarForm;
