import NextAuth from 'next-auth';
import { authConfig } from '../../../../configs/auth';

const handlers = NextAuth(authConfig);

export { handlers as GET, handlers as POST };
// eslint-disable-next-line prettier/prettier
