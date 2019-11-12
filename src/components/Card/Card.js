import React from "react";
import styles from "./Card.scss";
import { listData } from "../../data/dataStore";

class Card extends React.Component {
  render() {
    console.log("Card", this.props.title);
    return (
      <div className={styles.component}>
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default Card;
