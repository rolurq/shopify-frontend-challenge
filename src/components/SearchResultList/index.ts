import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../reducers';
import SearchResultList, { StateProps } from './SearchResultList';

function mapStateToProps(state: AppState): StateProps {
  return {
    results: state.search.results,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResultList);
