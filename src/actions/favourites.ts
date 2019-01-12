import { IAddToFavourites, IRemoveFromFavourites } from '.';

export function addToFavourites(title: string): IAddToFavourites {
  return {
    title,
    type: 'FAVOURITES_ADD',
  };
}

export function removeFromFavourites(title: string): IRemoveFromFavourites {
  return {
    title,
    type: 'FAVOURITES_REMOVE',
  };
}
