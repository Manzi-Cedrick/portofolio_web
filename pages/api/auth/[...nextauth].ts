import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import dbConnect from "../../../lib/dbconnect";
import GithubProvider from "next-auth/providers/github"
import clientPromise from "../../../lib/mongodb"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  pages:{
    signIn:'/auth'
  },
  debug: process.env.NODE_ENV === 'development',
  adapter : MongoDBAdapter(clientPromise)
}
export default NextAuth(authOptions)