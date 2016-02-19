/**
 * Created by yan on 16-2-19.
 */
console.clear();

import * as API from './api';

fetch('https://cloud.oneapm.com/overview.json')

import React from 'react';
import {render} from 'react-dom';

let element = document.createElement('div');
document.body.appendChild(element);

import store from './store';

import {load} from './actions/members';
import {loadRepos} from './actions/repos';

import {Provider,connect} from 'react-redux';

let App = connect(state=>state)((props)=><div>
  <pre>{JSON.stringify(props, null, 2)}</pre>
  <button onClick={()=>{
  props.dispatch(load('oneapm'))
  }}>members
  </button>
  <button onClick={()=>{
  props.dispatch(loadRepos('oneapm'))
  }}>repos
  </button>
</div>);

render(<Provider store={store}>
  <App z={1}/>
</Provider>, element);