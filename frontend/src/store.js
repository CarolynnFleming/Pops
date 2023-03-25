import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { offeringListReducer } from './reducers/offeringReducers';
import { bagDetailsReducer, bagListReducer } from './reducers/bagReducers';
import { gngListReducer } from './reducers/gngReducers';
import { bucketListReducer } from './reducers/bucketReducers';
import { sportstinListReducer } from './reducers/sportstinReducers';
import { onegListReducer } from './reducers/onegReducers';
import { mixesDetailsReducer, mixesListReducer } from './reducers/mixesReducers';
import { twogListReducer } from './reducers/twogReducers';
import { threegListReducer } from './reducers/threegReducers';


const initialState = {};
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
    mixesDetails: mixesDetailsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( 
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
    );
export default store;