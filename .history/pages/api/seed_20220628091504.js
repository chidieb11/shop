import db from "../../utils/db";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
};
