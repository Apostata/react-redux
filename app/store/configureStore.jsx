import * as redux from 'redux';
import {default as thunk} from 'redux-thunk';
import {nameReducer, hobbiesReducer, moviesReducer, mapReducer} from './../reducers/index';

export var configure = ()=>{
	var reducer = redux.combineReducers({
		name: nameReducer,
		hobies: hobbiesReducer,
		movies: moviesReducer,
		map: mapReducer
	});


	var store = redux.createStore(reducer, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
}