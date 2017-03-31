const redux = require('redux');

console.log('Starting redux todo example');
var defaultState =  {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }

}

var store = redux.createStore(reducer);
var currentState = store.getState();

console.log('Current State: ', currentState);

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Cocoloco'
}

store.dispatch(action);
console.log('Changed State: ', store.getState());
