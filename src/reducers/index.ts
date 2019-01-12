import { combineReducers } from 'redux';

import favourites, { FavouritesState } from './favourites';
import search, { SearchState } from './search';

export interface AppState {
  favourites: FavouritesState;
  search: SearchState;
}

export default combineReducers({
  favourites,
  search,
});
