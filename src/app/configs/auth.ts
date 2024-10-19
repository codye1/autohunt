import bcrypt from 'bcrypt';
import { NextAuthOptions, User as NextUser } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { connectToMongoDB } from '../lib/mongodb';
import User from '../models/userModel';

export const authConfig: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        await connectToMongoDB();
        const user = await User.findOne({ email: credentials.email });
        console.log('find');
        console.log(user);

        if (user) {
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password,
          );

          if (isPasswordCorrect) {
            const { password, ...userWithoutPassword } = user;
            console.log(password);

            return userWithoutPassword as NextUser;
          } else {
            throw new Error('Invalid email or password.');
          }
        }

        const hashedPassword = await bcrypt.hash(credentials.password, 10);
        console.log('create');

        const newUser = await User.create({
          email: credentials.email,
          password: hashedPassword,
        });
        console.log(newUser);

        const { password, ...newUserWithoutPassword } = newUser;
        console.log(password);
        return newUserWithoutPassword as NextUser;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
    error: '/signin',
  },
};