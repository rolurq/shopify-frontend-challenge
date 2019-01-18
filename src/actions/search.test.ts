import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { AppThunkDispatch } from '.';
import { SearchState } from '../reducers/search';
import { searchSubmit } from './search';

const mockAxios = new MockAdapter(axios);
const mockStore = configureMockStore<SearchState, AppThunkDispatch>([thunk]);

it('creates SEARCH_RESULTS after submitting search request', async () => {
  const results = [
    { title: 'Test Result 1', body: 'Test Body 1' },
    { title: 'Test Result 2', body: 'Test Body 2' },
    { title: 'Test Result 3', body: 'Test Body 3' },
    { title: 'Test Result 4', body: 'Test Body 4' },
  ];
  const text = 'dummy';

  mockAxios.onGet('/api/search').reply(200, { results });
  const store = mockStore({ results: undefined, searching: false });

  await store.dispatch(searchSubmit(text));
  expect(store.getActions()).toEqual([
    { type: 'SEARCH_SUBMIT', text },
    { type: 'SEARCH_RESULTS', results },
  ]);
});
