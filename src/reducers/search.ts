import { AppActions } from '../actions';
import { SearchResult } from '../models';

export interface SearchState {
  searching: boolean;
  results?: SearchResult[];
}

export default function search(
  state: SearchState = { searching: false, results: undefined },
  action: AppActions,
): SearchState {
  switch (action.type) {
    case 'SEARCH_SUBMIT':
      return {
        ...state,
        searching: true,
      };
    case 'SEARCH_RESULTS':
      return {
        ...state,
        results: action.results,
        searching: false,
      };
    case 'SEARCH_CLEAR':
      return {
        ...state,
        results: undefined,
        searching: false,
      };
    default:
      return state;
  }
}
