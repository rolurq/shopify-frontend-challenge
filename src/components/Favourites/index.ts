import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from '../../reducers';
import Favourites, { StateProps } from './Favourites';

function mapStateToProps(state: AppState): StateProps {
  const { selection } = state.favourites;
  return {
    empty: selection.size === 0,
    favourites: selection.values(),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favourites);
