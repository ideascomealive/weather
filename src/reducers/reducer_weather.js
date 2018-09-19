import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER: 
		return [ action.payload.data, ...state ]; //es6 rest to keep list of cities
	}
	return state;
}