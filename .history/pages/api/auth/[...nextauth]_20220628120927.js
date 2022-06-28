export default NextAuth({
  session: {
    strategy: "jwt",
  },
  call
});
