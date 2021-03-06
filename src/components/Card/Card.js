import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const { title } = this.props;
    // console.log('Card', this.props.title);
    return (
      <div className={styles.component}>
        <p>{title}</p>
      </div>
    );
  }
}

export default Card;
