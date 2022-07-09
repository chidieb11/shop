import {getSession} from "next-auth/react";
import db from "../../../utils/db";
import Order from "../../../models/Order";

const handler = async (req, res) => {
    const session = await getSession({req});
    if (!session) {
        return res.status(401).json({message: "Login required"});
    }

    await db.connect();

    const order = await Order.find().where("user").equals(req.query.id);

    await db.disconnect();
    res.json(order);
};

export default handler;
