var redux  = require('redux');

console.log('iniciando exemplos com Redux');

var reducer = (state = {name:'Anonymous'}, action)=>{

	switch(action.type){
		case 'CHANGE_NAME':
			return{
				...state,
				name: action.name
			};

		default:
			return state;
	}
};

var store = redux.createStore(reducer);

console.log('currentState', store.getState());


store.dispatch({
	type: "CHANGE_NAME",
	name: "Rene"
});

console.log('nomde deve ser Rene', store.getState());