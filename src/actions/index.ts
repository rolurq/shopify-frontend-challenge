import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { SearchResult } from '../models';
import { AppState } from '../reducers';

export interface ISearchSubmit extends Action {
  type: 'SEARCH_SUBMIT';
  text: string;
}

export interface ISearchResults extends Action {
  type: 'SEARCH_RESULTS';
  results?: SearchResult[];
}

export interface ISearchClear extends Action {
  type: 'SEARCH_CLEAR';
}

export interface IAddToFavourites extends Action {
  type: 'FAVOURITES_ADD';
  result: SearchResult;
}

export interface IRemoveFromFavourites extends Action {
  type: 'FAVOURITES_REMOVE';
  key: string;
}

export type AppActions =
  | ISearchSubmit
  | ISearchResults
  | ISearchClear
  | IAddToFavourites
  | IRemoveFromFavourites;

export type AppThunkAction<
  A extends AppActions = AppActions,
  R = void
> = ThunkAction<Promise<R>, AppState, void, A>;
export type AppThunkDispatch<A extends AppActions = AppActions> = ThunkDispatch<
  AppState,
  void,
  A
>;
