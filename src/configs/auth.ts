import bcrypt from 'bcrypt';
import { NextAuthOptions, User as NextUser } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { connectToMongoDB } from '../lib/mongodb';
import User from '../models/userModel';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string; // Добавляем свойство id
      email?: string | null;
      name?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string; // Убедитесь, что тип User включает id
    email: string;
  }
}

export const authConfig: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        console.log(credentials);

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
            const authUser: NextUser = {
              email: user.email,
              id: String(user._id),
            };

            console.log(authUser);

            return authUser;
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
        const authUser: NextUser = {
          email: newUser.email,
          id: String(newUser._id),
        };

        return authUser as NextUser;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
    error: '/signin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id ? String(user.id) : undefined;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = String(token.id);
      }
      return session;
    },
  },
};
