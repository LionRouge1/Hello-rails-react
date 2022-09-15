import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './greetings/greeting';

const store = createStore(Reducer, applyMiddleware(thunk));
export default store;