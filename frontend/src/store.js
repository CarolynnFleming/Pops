import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { offeringListReducer } from './reducers/offeringReducers';
import { bagDetailsReducer, bagListReducer } from './reducers/bagReducers';
import { gngDetailsReducer, gngListReducer } from './reducers/gngReducers';
import { bucketDetailsReducer, bucketListReducer } from './reducers/bucketReducers';
import { sportstinDetailsReducer, sportstinListReducer } from './reducers/sportstinReducers';
import { onegDetailsReducer, onegListReducer } from './reducers/onegReducers';
import { mixesDetailsReducer, mixesListReducer } from './reducers/mixesReducers';
import { twogDetailsReducer, twogListReducer } from './reducers/twogReducers';
import { threegDetailsReducer, threegListReducer } from './reducers/threegReducers';
import { cartReducer } from './reducers/cartReducers';


const initialState = {
    cart:{
        cartItems: localStorage.getItem('cartItems') 
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    },
};
const reducer = combineReducers({
    offeringList: offeringListReducer,
    bagList: bagListReducer,
    gngList: gngListReducer,
    mixesList: mixesListReducer,
   bucketList:bucketListReducer,
    sportstinList: sportstinListReducer,
    onegList: onegListReducer,
    twogList: twogListReducer,
    threegList: threegListReducer,
    bagDetails: bagDetailsReducer,
    mixesDetails: mixesDetailsReducer,
    gngDetails: gngDetailsReducer,
    bucketDetails: bucketDetailsReducer,
    onegDetails: onegDetailsReducer,
    sportstinDetails: sportstinDetailsReducer,
    twogDetails: twogDetailsReducer,
    threegDetails: threegDetailsReducer,
    cart: cartReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( 
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
    );
export default store;