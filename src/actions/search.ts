import { ISearchSubmit } from '.';

export function searchSubmit(text: string): ISearchSubmit {
  return {
    text,
    type: 'SEARCH_SUBMIT',
  };
}