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
  title: string;
}

export interface IRemoveFromFavourites extends Action {
  type: 'FAVOURITES_REMOVE';
  title: string;
}

export type AppActions =
  | ISearchSubmit
  | ISearchResults
  | ISearchClear
  | IAddToFavourites
  | IRemoveFromFavourites;

export type AppThunkAction = ThunkAction<void, AppState, void, AppActions>;
export type AppThunkDispatch = ThunkDispatch<AppState, void, AppActions>;
