/**
 * Created by yan on 16-2-19.
 */
var id = 0;

const ajax = (PromiseCreator)=> {
  let type = `ajax-${++id}`;
  let wrappedActionCreator = (...args)=> {
    return dispatch=> {
      PromiseCreator.apply(null, args)
        .then((res)=> {
          dispatch({
            type,
            payload: res
          })
        })
    }
  }
  wrappedActionCreator.toString = ()=>type;
  return wrappedActionCreator
}


export default ajax;