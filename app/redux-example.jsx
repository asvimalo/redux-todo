var redux = require('redux');

console.log('Starting redux example');
var defaultState = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;
// argument needs to be a pure function = reducer takes existing state and actions as arguments and it computes the new state
var reducer = (state = defaultState, action) =>  {
  //state = state || {name: 'Anonymous'};
  //console.log('New action', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      case 'ADD_HOBBY':
        return {
          ...state,
          hobbies: [
            ...state.hobbies,
            {
              id: nextHobbyId++,
              hobby: action.hobby
            }
          ]
        };
      case 'ADD_MOVIE':
        return {
          ...state,
          movies: [
            ...state.movies,
            {
              id: nextMovieId++,
              title: action.title,
              genre: action.genre
            }
          ]
        }
     default:
      return state;
  }

};
var store = redux.createStore(reducer, redux.compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ?  window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => {return f;}
));

// subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is: ', state.name);
  document.getElementById('app').innerHTML = state.name;
  console.log('New state: ', store.getState());

});

var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrés'
});
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'running'
});
// unsubscribe();
store.dispatch({
  type: 'ADD_MOVIE',
  title: 'La Fuente',
  genre: 'Drama'
});
store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Los Pitufos',
  genre: 'Animation'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Inception',
  genre: 'Thriller'
});

//console.log('Name should be Andrés', store.getState());
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Mario'
});
