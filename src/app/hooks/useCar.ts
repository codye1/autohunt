import { Car } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

const fetchCar = async (id: string) => {
  try {
    const response = await fetch(`/api/cars/${id}`);
    return response.json();
  } catch (error) {
    console.error('Error fetching Car:', error);
  }
};

const useCar = (id: string) => {
  return useQuery<Car>({
    queryKey: ['car'],
    queryFn: () => fetchCar(id),
  });
};

export default useCar;
