var redux = require('redux');

console.log('Starting redux example');
// argument needs to be a pure function = reducer takes existing state and actions as arguments and it computes the new state
var reducer = (state = {name: 'Anonymous'}, action) =>  {
  //state = state || {name: 'Anonymous'};
  console.log('New action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }

};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrés'
});
console.log('Name should be Andrés', store.getState());
