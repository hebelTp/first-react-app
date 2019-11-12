import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero.js";
import Column from "../Column/Column.js";
import PropTypes from "prop-types";

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    source: PropTypes.string
  };
  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  };
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} sourceImg={this.props.source} />
        <div className={styles.description}>{this.props.children}</div>
        <div className={styles.columns}>
          <Column titleText={"Animals"}></Column>
          <Column titleText={"Plans"}></Column>
          <Column titleText={"Minerals"}></Column>
        </div>
      </section>
    );
  }
}

export default List;
