import { IUser } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

const fetchUser = async (id: string) => {
  try {
    const response = await fetch(`/api/users/${id}`);
    return response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

const useUser = (id: string) => {
  return useQuery<IUser>({
    queryKey: ['user'],
    queryFn: () => fetchUser(id),
  });
};

export default useUser;
