import * as redux  from 'redux';
import * as actions from './actions/index';
import * as configureStore from './store/configureStore';

console.log(actions);

var store  = configureStore.configure();
//console.log('currentState', store.getState());
var unsubscribe = store.subscribe(()=>{
	var state = store.getState();
	console.log('New state', store.getState());

	if(state.map.isFetching){
		document.getElementById('app').innerHTML = 'loading...';
	}
	else if(state.map.url){
		document.getElementById('app').innerHTML = '<a target="_black" href='+ state.map.url +'>Veja sua localizção</a>';
	}
});

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Rene'));

store.dispatch(actions.addHobby('RPG'));

store.dispatch(actions.addMovie('Brave Heart', 'Drama'));

store.dispatch(actions.rmvHobby(1));

//unsubscribe();

store.dispatch(actions.changeName('Érica'));

store.dispatch(actions.addHobby('Ler livros'));

store.dispatch(actions.addMovie('Jack christmas','Comedy'));

store.dispatch(actions.rmvMovie(2));


