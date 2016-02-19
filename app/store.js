/**
 * Created by yan on 16-2-19.
 */
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import {reducer as members} from './actions/members';
import {reducer as repos} from './actions/repos';

let reducers = combineReducers({
  members,
  repos
});

export default createStore(reducers, applyMiddleware(promiseMiddleware, thunk));