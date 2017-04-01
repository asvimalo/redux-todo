const redux = require('redux');
const axios = require('axios');

console.log('Starting redux example');
// argument needs to be a pure function = reducer takes existing state and actions as arguments and it computes the new state
var actions = require('./actions/index');
var store = require('./store/configureStore').configure();


// subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is: ', state.name);
  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if(state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
  }
  console.log('New state: ', store.getState());

});

store.dispatch(actions.fetchLocation());

var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch(actions.changeName('Andrés'));
store.dispatch(actions.addHobby('flying'));
store.dispatch(actions.addHobby('swimming'));
store.dispatch(actions.addHobby('programming'));
store.dispatch(actions.removeHobby(1));
// unsubscribe();
store.dispatch(actions.addMovie('La Fuente','Drama'));
store.dispatch(actions.addMovie('Star Wars', 'Action'));
store.dispatch(actions.addMovie('Ciudade de Deus', 'Drama'));
store.dispatch(actions.removeMovie(1));
//console.log('Name should be Andrés', store.getState());
store.dispatch(actions.changeName('Mario'));
