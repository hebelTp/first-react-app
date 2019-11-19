import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Button/Icon.js';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
    icon: this.props.icon || [],
  };
  static propTypes = {
    titleText: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.string,
    title: PropTypes.string,
  };
  addCard(title) {
    this.setState(state => ({
      cards: [
        ...state.cards,
        {
          key: state.cards.length
            ? state.cards[state.cards.length - 1].key + 1
            : 0,
          title,
        },
      ],
    }));
  }
  render() {
    console.log('thisColumn', this.props.icon);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={this.props.icon}></Icon>
          </span>
          {this.props.title}
        </h3>
        {this.state.cards.map(({ key, ...cardsProps }) => (
          <Card key={key} {...cardsProps} />
        ))}
        <Creator
          text={settings.columnCreatorText}
          action={title => this.addCard(title)}
        />
      </section>
    );
  }
}

export default Column;
