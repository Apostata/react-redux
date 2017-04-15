var redux  = require('redux');

var stateDefault ={
	name:'Anonymous',
	hobbies: [],
	movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

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

var nameReducer = (state = 'Anonymous', action)=>{
	switch(action.type){
		case 'CHANGE_NAME':
			return action.name

		default:
			return state;
	}
};

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
})

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

//console.log('currentState', store.getState());
var unsubscribe = store.subscribe(()=>{
	var state = store.getState();
	document.getElementById('app').innerHTML = state.name;
	console.log('New state', store.getState());
});



store.dispatch({
	type: "CHANGE_NAME",
	name: "Rene"
});

store.dispatch({
	type: "ADD_HOBBY",
	hobby: "RPG"
});

store.dispatch({
	type: "ADD_MOVIE",
	title: 'Brave Heart',
	genre: 'Drama'
});

store.dispatch({
	type:"REMOVE_HOBBY",
	id:1
});

//unsubscribe();

store.dispatch({
	type: "CHANGE_NAME",
	name: "Erica"
});

store.dispatch({
	type: "ADD_HOBBY",
	hobby: "Ler livros"
});

store.dispatch({
	type: "ADD_MOVIE",
	title: 'Jack christmas',
	genre: 'Comedy'
});

store.dispatch({
	type:"REMOVE_MOVIE",
	id:2
});

