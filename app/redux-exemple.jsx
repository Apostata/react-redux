var redux  = require('redux');


var oldreducer = (state = stateDefault, action)=>{

	switch(action.type){
		case 'CHANGE_NAME':
			return{
				...state,
				name: action.name
			};

		case 'ADD_HOBBY':
			return{
				...state,
				hobbies: [
					...state.hobbies,
					{
						id: nextHobbyId++,
						hobby:action.hobby,
					}
				]
			}

		case 'REMOVE_HOBBY':
			return {
				...state,

				hobbies: state.hobbies.filter(hobby => hobby.id !== action.id) //filter remove só o que for false
					
			}

		case 'ADD_MOVIE':
			return{
				...state,
				movies: [
					...state.movies,
					{
						id: nextMovieId++,
						title:action.title,
						genre:action.genre
					}
				]
			}
		case 'REMOVE_MOVIE':
			return {
				...state,

				movies: state.movies.filter(movie => movie.id !== action.id)					
			}

		default:
			return state;
	}
};


//Name reducer and actions generators
// ---------------------------------------
var nameReducer = (state = 'Anonymous', action)=>{
	switch(action.type){
		case 'CHANGE_NAME':
			return action.name

		default:
			return state;
	}
};

var changeName = (name)=>{
	return{
		type: 'CHANGE_NAME',
		name
	}
}


//Hobies reducer and actions generators
// ---------------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action)=>{
	switch(action.type){
		case 'ADD_HOBBY':
			return [
				...state,
				{
					id: nextHobbyId++,
					hobby: action.hobby
				}
			];

		case 'REMOVE_HOBBY':
			return state.filter(hobby => hobby.id !== action.id);

		default:
			return state;
	}
}

var addHobby = (hobby)=>{
	return{
		type: 'ADD_HOBBY',
		hobby
	}
}

var rmvHobby = (id)=>{
	return{
		type: 'REMOVE_HOBBY',
		id
	}
}


//Movies reducer and actions generators
// ---------------------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action)=>{
	switch(action.type){
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
			return state.filter(movie => movie.id !== action.id);

		default:
			return state;
	}
}

var reducer = redux.combineReducers({
	name: nameReducer,
	hobies: hobbiesReducer,
	movies: moviesReducer
});

var addMovie = (title, genre)=>{
	return{
		type: 'ADD_MOVIE',
		title,
		genre
	}
};

var rmvMovie = (id)=>{
	return{
		type: 'REMOVE_MOVIE',
		id
	}
};


var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

//console.log('currentState', store.getState());
var unsubscribe = store.subscribe(()=>{
	var state = store.getState();
	document.getElementById('app').innerHTML = state.name;
	console.log('New state', store.getState());
});



store.dispatch(changeName('Rene'));

store.dispatch(addHobby('RPG'));

store.dispatch(addMovie('Brave Heart', 'Drama'));
/*store.dispatch({
	type: "ADD_MOVIE",
	title: 'Brave Heart',
	genre: 'Drama'
});*/

store.dispatch(rmvHobby(1));

//unsubscribe();

store.dispatch(changeName('Érica'));

store.dispatch(addHobby('Ler livros'));

store.dispatch(addMovie('Jack christmas','Comedy'));

store.dispatch(rmvMovie(2));


