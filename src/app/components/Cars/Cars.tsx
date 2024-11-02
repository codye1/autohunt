'use client';

import useCars from '@/app/hooks/useCars';
import CarsList from '@/components/CarsList/CarsList';
import Loader from '@/components/Loader/Loader';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import CarsHeader from '../CarsHeader/CarsHeader';

const Cars = ({
  params,
  setParams,
}: {
  params: URLSearchParams;
  setParams: Dispatch<SetStateAction<URLSearchParams>>;
}) => {
  const [twoColumns, setTwoColumns] = useState(false);

  const handleColumnChange = () => {
    setTwoColumns((value) => !value);
  };

  const { data: cars, isLoading, error, refetch } = useCars(params);

  useEffect(() => {
    refetch();
  }, [params, refetch]);

  return (
    <>
      <CarsHeader
        handleColumnChange={handleColumnChange}
        twoColumns={twoColumns}
        resultsLength={cars?.length || 0}
        setParams={setParams}
      />
      {isLoading ? (
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <Loader />
        </div>
      ) : error ? (
        <div>Error</div>
      ) : (
        cars && <CarsList cars={cars} twoColumns={twoColumns} />
      )}
    </>
  );
};

export default Cars;
