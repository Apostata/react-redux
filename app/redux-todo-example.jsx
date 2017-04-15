import * as redux from 'redux';

var stateDefault = {
	searchText:'',
	showCompleted:false,
	todos:[]
};

var reducer = (state= stateDefault, action)=>{
	switch(action.type){
		case 'CHANGE_SERACH_TEXT':
			return{
				...state,
				searchText: action.searchText
			};

		default:
			return state;
	}
};

var store = redux.createStore(reducer);

console.log(store.getState());

store.dispatch({
	type:"CHANGE_SERACH_TEXT",
	searchText: "Buscar por"
});

console.log(store.getState());

