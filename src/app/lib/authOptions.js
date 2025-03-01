import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import dbConnect, { collectionNames } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const {username, password} = credentials;
        const user = await dbConnect(collectionNames.USERS).findOne({username});

        const isPasswordOk = password == user.password;
  
        if (isPasswordOk) { 
          return user;
        } else { 
          return null;
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if(account){
        try {
          const { providerAccountId, provider } = account
          const { email : user_email, image, name } = user
          const payload = { role: 'user', providerAccountId, provider, user_email, image, name}

          const userCollection = dbConnect(collectionNames.USERS)
          const isExistUser = await userCollection.findOne({ providerAccountId })

          if(!isExistUser){
            await userCollection.insertOne(payload)
          }
        } catch (error) {
          console.log(error)
          return false;
        }
      };
      return true;
    },
    async session({ session, token, user }) {
      if(token) {
        session.user.username = token.username
        session.user.role = token.role
      }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if(user) {
        token.username = user.username
        token.role = user.role
      }
      return token
    }
  },
};