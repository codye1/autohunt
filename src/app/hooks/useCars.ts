import { Car } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { URLSearchParams } from 'url';

const fetchCars = async (params: URLSearchParams) => {
  try {
    const stringParams = params.toString();
    const response = await fetch(
      '/api/cars' + `${stringParams.length > 0 ? `?${stringParams}` : ''}`,
    );
    return response.json();
  } catch (error) {
    console.error('Error fetching cars:', error);
  }
};

const useCars = (params: URLSearchParams) => {
  return useQuery<Car[]>({
    queryKey: ['cars'],
    queryFn: () => fetchCars(params),
  });
};

export default useCars;
