export default NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks:{
    async jwt({ token, user }) {
        if(user?._id)session.user._id
    }
  }
});
