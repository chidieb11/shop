import {getSession} from "next-auth/react";
import db from "../../../../utils/db";
import Products from "../../../../models/Products";

const handler = async (req, res) => {
    const session = await getSession({req});
    if (!session || (session && !session.user.isAdmin)) {
        return res.status(401).send("Admin signin is required");
    }

    if (req.method === "GET") {
        return getHandler(req, res);
    } else if (req.method === "POST") {
        return postHandler(req, res);
    } else {
        return res.status(400).send({message: "Method not allowed"});
    }
};

const getHandler = async (req, res) => {
    await db.connect();
    const products = await Products.find({});
    await db.disconnect();
    res.send(products);
};

const postHandler = async (req, res) => {
    await db.connect();
    const newProduct = new Products({
        name: "sample name",
        slug: "sample-name-" + Math.random(),
        image: "/images/shirt1.jpg",
        price: 0,
        category: "sample category",
        brand: "sample brand",
        countInStock: 0,
        description: "sample description",
        rating: 0,
        numReviews: 0,
    });

    const product = await newProduct.save();
    await db.disconnect();
    res.send({message: "Product created successfully", product});
};

export default handler;
