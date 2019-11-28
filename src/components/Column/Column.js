import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Button/Icon.js';
import { settings } from '../../data/dataStore.js';

class Column extends React.Component {
  state = {
    icon: this.props.icon || [],
  };
  static propTypes = {
    titleText: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    title: PropTypes.string,
    addColumn: PropTypes.func,
  };
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };
  render() {
    console.log('thisColumn', this.props);
    const { title, icon, cards, addColumn } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon}></Icon>
          </span>
          {title}
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        <Creator text={settings.columnCreatorText} action={addColumn} />
      </section>
    );
  }
}

export default Column;
