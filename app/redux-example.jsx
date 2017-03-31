var redux = require('redux');

console.log('Starting redux example');
// argument needs to be a pure function = reducer takes existing state and actions as arguments and it computes the new state
var reducer = (state = {name: 'Anonymous'}, action) =>  {
  //state = state || {name: 'Anonymous'};
  return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
