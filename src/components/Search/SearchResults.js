import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore.js';
import styles from './SearchResults.scss';
import Column from '../Column/Column';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {
  static propTypes = {
    columns: PropTypes.array,
    result: PropTypes.string,
    changeSearchString: PropTypes.func,
    match: PropTypes.object,
  };
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  componentDidMount() {
    const { result } = this.props.match.params;
    this.props.changeSearchString(result);
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.result != this.props.match.params.result) {
      this.props.changeSearchString(this.props.match.params.result);
    }
  }

  render() {
    const { columns } = this.props;
    return (
      <div className={styles.searchContainer}>
        {columns.map(column => (
          <Link
            className={styles.columnLink}
            key={column.id}
            to={`/list/${column.listId}`}
          >
            <Column key={column.id} {...column}></Column>
          </Link>
        ))}
      </div>
    );
  }
}

export default SearchResults;
