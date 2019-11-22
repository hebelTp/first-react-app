import { connect } from 'react-redux';
import Column from './Column';
import {
  getCardsForColumn,
  createAction_addColumn,
} from '../../redux/cardRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id, state.searchString),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title =>
    dispatch(
      createAction_addColumn({
        columnId: props.id,
        title,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
