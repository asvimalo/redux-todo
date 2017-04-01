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
      case 'REMOVE_HOBBY':
        return {
          ...state,
          hobbies: state.hobbies.filter((hobby) => {
            return hobby.id !== action.id
          })
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
        };
      case 'REMOVE_MOVIE':
        return {
          ...state,
          movies: state.movies.filter((movie) => {
            return movie.id !== action.id
          })
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
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'walking'
});
store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
})
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
store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});


//console.log('Name should be Andrés', store.getState());
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Mario'
});
