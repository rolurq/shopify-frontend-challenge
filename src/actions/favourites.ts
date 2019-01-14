import { IAddToFavourites, IRemoveFromFavourites } from '.';
import { SearchResult } from '../models';

export function addToFavourites(result: SearchResult): IAddToFavourites {
  return {
    result,
    type: 'FAVOURITES_ADD',
  };
}

export function removeFromFavourites(key: string): IRemoveFromFavourites {
  return {
    key,
    type: 'FAVOURITES_REMOVE',
  };
}
