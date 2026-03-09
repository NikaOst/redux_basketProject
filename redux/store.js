import { createStore } from 'redux';
import basketReducer from './reducers/reducer';

const store = createStore(basketReducer);
export default store;
