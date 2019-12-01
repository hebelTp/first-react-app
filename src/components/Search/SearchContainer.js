import { connect } from 'react-redux';
import Search from './Search';
import {
  countVisibleCards,
  countAllCards,
} from '../../redux/searchStringRedux';

const mapStateToProps = state => {
  // console.log('state', state);
  const { searchString } = state;
  return {
    searchString: state.searchString,
    countVisible: countVisibleCards(state, searchString),
    countAll: countAllCards(state),
  };
};

export default connect(mapStateToProps)(Search);
