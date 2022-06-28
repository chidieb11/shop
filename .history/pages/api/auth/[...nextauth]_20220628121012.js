export default NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks:{
    async jwt({ token, user }) {
        if
    }
  }
});
