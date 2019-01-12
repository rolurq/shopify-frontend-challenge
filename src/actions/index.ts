import { SearchResult } from '../models';

interface IAction {
  type: string;
}

export interface ISearchSubmit extends IAction {
  type: 'SEARCH_SUBMIT';
  text: string;
}

export interface ISearchResults extends IAction {
  type: 'SEARCH_RESULTS';
  results?: SearchResult[];
}

export interface IAddToFavourites extends IAction {
  type: 'FAVOURITES_ADD';
  title: string;
}

export interface IRemoveFromFavourites extends IAction {
  type: 'FAVOURITES_REMOVE';
  title: string;
}

export type IActions =
  | ISearchSubmit
  | ISearchResults
  | IAddToFavourites
  | IRemoveFromFavourites;
