import store from './store';

it('creates the initial state', () => {
  const state = store.getState();
  expect(state).toMatchObject({
    favourites: {
      selection: new Map<string, boolean>(),
    },
    search: {
      results: undefined,
    },
  });
});
