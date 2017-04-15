import * as redux from 'redux';

var stateDefault = {
	searchText:'',
	showCompleted:false,
	todos:[]
};

var reducer = (state= stateDefault, action)=>{
	return state;
};

var store = redux.createStore(reducer);

console.log(store.getState());