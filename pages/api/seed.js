import db from "../../utils/db";
import User from "../../models/Users";
import data from "../../utils/data";
import Products from "../../models/Products";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Products.deleteMany();
  await Products.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "Seeded successfully!" });
};

export default handler;
