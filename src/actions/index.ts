import { Action } from 'redux';

import { SearchResult } from '../models';

export interface ISearchSubmit extends Action {
  type: 'SEARCH_SUBMIT';
  text: string;
}

export interface ISearchResults extends Action {
  type: 'SEARCH_RESULTS';
  results?: SearchResult[];
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
  | IAddToFavourites
  | IRemoveFromFavourites;
