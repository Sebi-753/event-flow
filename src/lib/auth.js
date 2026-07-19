import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { supabase } from "./supabase";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      const googleId = profile.sub;

      const { data: existingUser } = await supabase
        .from("profiles")
        .select("*")
        .eq("google_id", googleId)
        .single();

      if (!existingUser) {
        const { error } = await supabase.from("profiles").insert([
          {
            google_id: googleId,
            email: user.email,
            fullName: user.name,
            avatar: user.image,
          },
        ]);

        if (error) {
          console.error(error);
          return false;
        }
      }

      return true;
    },
    async jwt({ token, profile }) {
      if (profile) {
        token.googleId = profile.sub;
      }

      if (token.googleId) {
        const { data: dbUser } = await supabase
          .from("profiles")
          .select("status, role")
          .eq("google_id", token.googleId)
          .single();

        if (dbUser) {
          token.status = dbUser.status;
          token.role = dbUser.role;
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        googleId: token.googleId,
        status: token.status,
        role: token.role,
      };

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
