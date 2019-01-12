import { IActions } from '../actions';
import { SearchResult } from '../models';

export interface SearchState {
  results?: SearchResult[];
}

export default function search(
  state: SearchState = { results: undefined },
  action: AppActions,
): SearchState {
  switch (action.type) {
    case 'SEARCH_SUBMIT':
      return {
        ...state,
      };
    case 'SEARCH_RESULTS':
      return {
        ...state,
        results: action.results,
      };
    default:
      return state;
  }
}
