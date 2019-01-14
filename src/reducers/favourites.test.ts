import { SearchResult } from '../models';
import favourites from './favourites';

const testResult = { title: 'An entry', body: 'body' };

it('adds to selection', () => {
  const state = favourites(undefined, {
    result: testResult,
    type: 'FAVOURITES_ADD',
  });
  expect(state.selection.get(testResult.title)).toBe(testResult);
});

it('removes from selection', () => {
  const selection = new Map<string, SearchResult>();
  selection.set(testResult.title, testResult);

  const state = favourites(
    { selection },
    { type: 'FAVOURITES_REMOVE', key: testResult.title },
  );
  expect(state.selection.has(testResult.title)).toBe(false);
});
