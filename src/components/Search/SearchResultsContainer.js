import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { createAction_change } from '../../redux/searchStringRedux';
import { filteredColumns } from '../../redux/cardRedux';

const mapStateToProps = state => {
  // console.log(state);

  return {
    title: state.app.title,
    subtitle: state.app.subtitle,
    columns: filteredColumns(state),
    searchString: state.searchString,
  };
};

const mapDispatchToProps = dispatch => ({
  changeSearchString: newSearchString =>
    dispatch(createAction_change(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
