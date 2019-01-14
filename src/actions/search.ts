import axios from 'axios';
import { URLSearchParams } from 'url';
import { AppThunkAction, ISearchClear } from '.';

import { SearchResult } from '../models';

interface SearchResponse {
  results: SearchResult[];
}

export function searchSubmit(text: string): AppThunkAction {
  return async dispatch => {
    dispatch({ type: 'SEARCH_SUBMIT', text });

    const response = await axios.get<SearchResponse>('/api/search', {
      params: new URLSearchParams({
        keywords: text.split(/\s/),
      }),
    });

    dispatch({ type: 'SEARCH_RESULTS', results: response.data.results });
  };
}

export function clearSearch(): ISearchClear {
  return {
    type: 'SEARCH_CLEAR',
  };
}
