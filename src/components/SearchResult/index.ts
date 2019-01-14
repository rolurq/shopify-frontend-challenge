import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
  addToFavourites,
  removeFromFavourites,
} from '../../actions/favourites';
import { AppState } from '../../reducers';
import SearchResult, { DispatchProps, StateProps } from './SearchResult';

function mapStateToProps(state: AppState): StateProps {
  return {
    favourites: state.favourites.selection,
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    markFavourite(result) {
      dispatch(addToFavourites(result));
    },
    unmarkFavourite(key) {
      dispatch(removeFromFavourites(key));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResult);
