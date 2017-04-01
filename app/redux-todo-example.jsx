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

var store = redux.createStore(reducer, redux.compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ?  window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => {return f;}
));
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
})
var currentState = store.getState();

console.log('Current State: ', currentState);

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Cocoloco'
}

store.dispatch(action);
//console.log('Changed State: ', store.getState());
//unsubscribe();
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Franbuesa hermosa'
});
