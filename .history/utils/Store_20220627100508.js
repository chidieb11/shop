import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: { cartItems: [] },
};

function reducer(state,action){
    switch(action.type){
        case 'CART_ADD_ITEMS'
    }
}