import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";
import Axios from 'axios'
export const addToCart = (id, qty) => async(dispatch, getState) => {
    const {data} = await Axios.get(`/api/bags/${id}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            bag: data._id,
            qty,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState)=> {
     dispatch({ type: CART_REMOVE_ITEM, payload: id });
     localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};