import * as React from 'react';
import './Favourites.css';

import { SearchResult } from '../../models';
// using the disconnected component to pass the list of favourites
// as a result list
import SearchResultList from '../SearchResultList/SearchResultList';

export interface StateProps {
  favourites: IterableIterator<SearchResult>;
  empty: boolean;
}

export default class Favourites extends React.PureComponent<StateProps> {
  render() {
    const { empty, favourites } = this.props;
    return empty ? null : (
      <section className="Favourites">
        <footer className="Favourites-container">
          <h2 className="Favourites-title">Favourites</h2>
          <SearchResultList results={Array.from(favourites)} />
        </footer>
      </section>
    );
  }
}
