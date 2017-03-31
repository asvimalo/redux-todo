const redux = require('redux');

console.log('Starting redux todo example');
var defaultState =  {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = defaultState, action) => {

  return state;
}

var store = redux.createStore(reducer);
var currentState = store.getState();
console.log('Current State: ', currentState);
