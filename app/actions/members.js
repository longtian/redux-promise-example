/**
 * Created by yan on 16-2-19.
 */

import ajaxAction from '../lib/ajaxAction';


let loadMembers = name=>fetch(`https://api.github.com/orgs/${name}/members`).then(res=>res.json());

export const load = ajaxAction(loadMembers);

export const reducer = (state = [], action)=> {
  switch (action.type) {
    case load.toString():
      return action.payload;
  }
  return state;
}
