var redux = require('redux');

console.log('Starting redux example');
// argument needs to be a pure function = reducer takes existing state and actions as arguments and it computes the new state

// Name reducer and action generators
// ----------------------------------
var nameReducer = (state = 'Anonimous', action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}
// Hobbies reducer and action generators
// ----------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HOBBY':
      return [
          ...state,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => {
        return hobby.id !== action.id
      })
    default:
      return state;
  }
};

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}
var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
}
// Movies reducer and action generators
// ----------------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [
          ...state,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => {
        return movie.id !== action.id
      })
    default:
      return state;
  }
};
var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
}
var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
}

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

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


store.dispatch(changeName('Andrés'));
store.dispatch(addHobby('flying'));
store.dispatch(addHobby('swimming'));
store.dispatch(addHobby('programming'));
store.dispatch(removeHobby(1));
// unsubscribe();
store.dispatch(addMovie('La Fuente','Drama'));
store.dispatch(addMovie('Star Wars', 'Action'));
store.dispatch(addMovie('Ciudade de Deus', 'Drama'));
store.dispatch(removeMovie(1));


//console.log('Name should be Andrés', store.getState());
store.dispatch(changeName('Mario'));
