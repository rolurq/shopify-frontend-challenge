import * as React from 'react';

import { SearchResult as ResultModel } from '../../models';
import SearchResult from '../SearchResult';

export interface StateProps {
  results?: ResultModel[];
}

export default class SearchResultList extends React.PureComponent<StateProps> {
  render() {
    const { results } = this.props;
    return results
      ? results.map((result, index) => (
          <SearchResult key={index} result={result} />
        ))
      : null;
  }
}
