import db from "../../utils/db";
import User from "../../models/User";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insert
};
