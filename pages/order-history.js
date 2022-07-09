import React, {useEffect, useReducer} from "react";
import Link from "next/link";
import getError from "../utils/error";
import axios from "axios";
import Layout from "../components/Layout";
import {useSession} from "next-auth/react";

function reducer(state, action) {
    switch (action.type) {
        case "FETCH_REQUEST":
            return {...state, loading: true, error: ""};
        case "FETCH_SUCCESS":
            return {...state, loading: false, orders: action.payload, error: ""};
        case "FETCH_FAIL":
            return {...state, loading: false, error: action.payload};
        default:
            state;
    }
}

const OrderHistoryScreen = () => {
    const {data: session} = useSession();
    const [{loading, error, orders}, dispatch] = useReducer(reducer, {
        loading: true,
        orders: [],
        error: ""
    });

    useEffect(() => {
        console.log(session.user);
        const fetchOrders = async () => {
            try {
                dispatch({type: "FETCH_REQUEST"});
                const {data} = await axios.get(`/api/orders/history?id=${session.user._id}`);
                dispatch({type: "FETCH_SUCCESS", payload: data});
                console.log({data});
            } catch (error) {
                dispatch({type: "FETCH_FAIL", payload: getError(error)});
            }
        };
        fetchOrders();
    }, [session.user._id]);

    return (
        <Layout title="Order History">
            <h1 className="mb-4 text-xl">Order History</h1>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div className="alert-error">{error}</div>
            ) : (
                <div className="overflow-x-auto md:mr-64">
                    <table className="min-w-full">
                        <thead className="border-b">
                        <tr>
                            <th className="px-5 text-left">ID</th>
                            <th className="p-5 text-left">DATE</th>
                            <th className="p-5 text-left">TOTAL</th>
                            <th className="p-5 text-left">PAID</th>
                            <th className="p-5 text-left">DELIVERED</th>
                            <th className="p-5 text-left">ACTION</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders?.map((order) => (
                            <tr key={order._id} className="border-b">
                                <td className=" p-5 ">{order._id.substring(20, 24)}</td>
                                <td className=" p-5 ">{order.createdAt.substring(0, 10)}</td>
                                <td className=" p-5 ">${order.totalPrice}</td>
                                <td className=" p-5 ">
                                    {order.isPaid
                                        ? `${order.paidAt.substring(0, 10)}`
                                        : "not paid"}
                                </td>
                                <td className=" p-5 ">
                                    {order.isDelivered
                                        ? `${order.deliveredAt.substring(0, 10)}`
                                        : "not delivered"}
                                </td>
                                <td className=" p-5 ">
                                    <Link href={`/order/${order._id}`} passHref>
                                        <a>Details</a>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </Layout>
    );
};

OrderHistoryScreen.auth = true;
export default OrderHistoryScreen;
