import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { clearSearch, searchSubmit } from '../../actions/search';
import { AppState } from '../../reducers';
import SearchBar, { DispatchProps } from './SearchBar';

function mapStateToProps(state: AppState) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    submitSearch(text: string) {
      dispatch(searchSubmit(text));
    },
    clearSearch() {
      dispatch(clearSearch());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
