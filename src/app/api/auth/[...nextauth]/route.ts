import { authConfig } from '@/app/configs/auth';
import NextAuth from 'next-auth';

const handlers = NextAuth(authConfig);

export { handlers as GET, handlers as POST };
// eslint-disable-next-line prettier/prettier
