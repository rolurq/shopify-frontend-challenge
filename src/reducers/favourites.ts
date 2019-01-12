import { AppActions } from '../actions';

export interface FavouritesState {
  // use Map to take advantage of its hasing mechanism
  selection: Map<string, boolean>;
}

export default function favourites(
  state: FavouritesState = { selection: new Map<string, boolean>() },
  action: AppActions,
): FavouritesState {
  switch (action.type) {
    case 'FAVOURITES_ADD':
      return {
        ...state,
        selection: state.selection.set(action.title, true),
      };
    case 'FAVOURITES_REMOVE':
      state.selection.delete(action.title);
      return {
        ...state,
        selection: new Map(state.selection),
      };
    default:
      return state;
  }
}
