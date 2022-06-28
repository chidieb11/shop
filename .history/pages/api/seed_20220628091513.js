import db from "../../utils/db";
import User from 

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
};
