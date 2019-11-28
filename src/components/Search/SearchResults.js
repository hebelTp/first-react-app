import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore.js';
import styles from './SearchResults.scss';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    result: PropTypes.string,
    changeSearchString: PropTypes.func,
    match: PropTypes.object,
  };
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { result } = this.props.match.params;
    const { cards } = this.props;
    console.log('SearchResult', this);
    this.props.changeSearchString(result);
    const filterData = cards.filter(cardData => {
      // console.log(result, cardData.title);
      return new RegExp(result, 'i').test(cardData.title);
    });
    console.log('filterData', filterData);
    return (
      <div className={styles.searchContainer}>
        {filterData.map(cardData => (
          <Card className="searchedCard" key={cardData.id} {...cardData} />
        ))}
      </div>
    );
  }
}

export default SearchResults;
