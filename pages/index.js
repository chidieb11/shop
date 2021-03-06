import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import axios from "axios";
import {toast} from "react-toastify";
import {useContext} from "react";
import {Store} from "../utils/Store";
import Products from "../models/Products";
import db from "../utils/db";
import CarouselScreen from "../components/Carousel";

export default function Home({products}) {
    const {state, dispatch} = useContext(Store);
    const {cart} = state;

    const addToCartHandler = async (product) => {
        const existItem = cart.cartItems.find((x) => x.slug === product.slug);
        const quantity = existItem ? existItem.quantity + 1 : 1;
        const {data} = await axios.get(`/api/products/${product._id}`);

        if (data.countInStock < quantity) {
            return toast.error("Sorry. Product is out of stock");
        }
        dispatch({type: "CART_ADD_ITEM", payload: {...product, quantity}});

        toast.success("Product added to the cart");
    };
    return (
        <div className="">
            <Layout title="Home Page">
                <CarouselScreen/>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:mr-64">
                    {products.map((product) => (
                        <ProductItem
                            product={product}
                            key={product.slug}
                            addToCartHandler={addToCartHandler}
                        />
                    ))}
                </div>
            </Layout>
        </div>
    );
}

export async function getServerSideProps() {
    await db.connect();
    const products = await Products.find().lean();
    return {
        props: {
            products: products.map(db.convertDocToObj),
        },
    };
}
