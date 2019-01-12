import favourites from './favourites';

it('adds to selection', () => {
  const state = favourites(undefined, {
    title: 'An entry',
    type: 'FAVOURITES_ADD',
  });
  expect(state.selection.get('An entry')).toBe(true);
});

it('removes from selection', () => {
  const selection = new Map<string, boolean>();
  selection.set('An entry', true);

  const state = favourites(
    { selection },
    { type: 'FAVOURITES_REMOVE', title: 'An entry' },
  );
  expect(state.selection.has('An entry')).toBe(false);
});
