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

var store = redux.createStore(reducer, redux.compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

//unsubscribe();

var unsubscribe = store.subscribe(()=>{
	var state = store.getState();
	document.getElementById('app').innerHTML = state.searchText;
});

store.dispatch({
	type:"CHANGE_SERACH_TEXT",
	searchText: "Buscar por..."
});

store.dispatch({
	type:"CHANGE_SERACH_TEXT",
	searchText: "O que você procura?"
});

