import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
// import Creator from '../Creator/Creator.js';
import Icon from '../Button/Icon.js';

class Column extends React.Component {
  state = {
    icon: this.props.icon || [],
  };
  static propTypes = {
    titleText: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
    title: PropTypes.string,
  };
  render() {
    console.log('thisColumn', this.props);
    const { title, icon, cards } = this.props;
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
        {/* {this.state.cards.map(({ key, ...cardsProps }) => (
          <Card key={key} {...cardsProps} />
        ))}
        <Creator
          text={settings.columnCreatorText}
          action={title => this.addCard(title)}
        /> */}
      </section>
    );
  }
}

export default Column;
