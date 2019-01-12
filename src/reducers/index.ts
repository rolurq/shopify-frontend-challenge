import { combineReducers } from 'redux';

import favourites from './favourites';
import search from './search';

export default combineReducers({
  favourites,
  search,
});
