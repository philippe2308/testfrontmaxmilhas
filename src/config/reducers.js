import { combineReducers } from 'redux';
import { SearchFlightsReducer } from './../views/SearchFlights/reducer';

export const Reducers = combineReducers({
    SearchFlightsReducer:SearchFlightsReducer
});
