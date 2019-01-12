import { ISearchClear, ISearchSubmit } from '.';

export function searchSubmit(text: string): ISearchSubmit {
  return {
    text,
    type: 'SEARCH_SUBMIT',
  };
}

export function clearSearch(): ISearchClear {
  return {
    type: 'SEARCH_CLEAR',
  };
}
