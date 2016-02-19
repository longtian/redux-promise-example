/**
 * Created by yan on 16-2-19.
 */

import * as API from '../api';

import {createAction} from 'redux-actions';

export const loadRepos = createAction('LOADREPOS', API.repos);

export const reducer = (state = [], action)=> {
  switch (action.type) {
    case 'LOADREPOS':
      return action.payload;
  }
  return state;
}
