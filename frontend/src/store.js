import data from './data/data'
import { createStore } from 'redux';
const initialState = {};
const reducer = (state, action) => {
    return { products: data.offerings };
};
const store = createStore( reducer, initialState)
export default store;