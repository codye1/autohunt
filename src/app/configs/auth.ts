import { NextAuthOptions , User as NextUser } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "../models/userModel";


export const authConfig: NextAuthOptions = {
  providers: [
    Credentials({
      credentials:{
        email:{label:'email',type:'email',required:true},
        password:{label:'password',type:'password',required:true}
      },
      async authorize(credentials) {
        if (!credentials?.email || ! credentials?.password) return null

        const userData = await User.findOne({email:credentials.email})

        if (userData?.email && userData?.password) {
          const {password,...userWithOutPassword} = userData

          return userWithOutPassword as NextUser
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/signin'
  },
  callbacks: {
    async redirect({ url, baseUrl }) {

      if (url.startsWith(baseUrl)) return url
      // Fallback to base URL if callback URL is incorrect
      return baseUrl
    }
  }
}