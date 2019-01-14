import { AppActions } from '../actions';
import { SearchResult } from '../models';

export interface FavouritesState {
  // use Map to take advantage of its hasing mechanism
  selection: Map<string, SearchResult>;
}

export default function favourites(
  state: FavouritesState = { selection: new Map<string, SearchResult>() },
  action: AppActions,
): FavouritesState {
  switch (action.type) {
    case 'FAVOURITES_ADD':
      const { title: key } = action.result;
      return {
        ...state,
        selection: state.selection.set(key, action.result),
      };
    case 'FAVOURITES_REMOVE':
      state.selection.delete(action.key);
      return {
        ...state,
        selection: new Map(state.selection),
      };
    default:
      return state;
  }
}
