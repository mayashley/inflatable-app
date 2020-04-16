import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "../css/List.module.css";
import ListItem from "../components/ListItem";
import Quote from "../components/Quote";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  getTotal = () => {
    const { appState } = this.props;
    let total = 0;
    appState.list.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  toggleModal = () => {
    const { modalVisible } = this.state;

    this.setState({
      modalVisible: !modalVisible,
    });
  };

  render() {
    const { appState, dispatch } = this.props;
    const { modalVisible } = this.state;

    return (
      <div className={styles.mainContainer}>
        {modalVisible && (
          <Quote handleOnClick={this.toggleModal} list={appState.list} />
        )}
        <div className={styles.leftColumn}>
          {appState.list.map((item, index) => {
            return <ListItem item={item} key={index} dispatch={dispatch} />;
          })}
        </div>
        <div className={styles.rightColumn}>
          <p className={styles.totalText}>Total: ${this.getTotal()}</p>
          {appState.list.length > 0 ? (
            <div>
              <p>
                If you're satisfied with the list, you can submit an inquiry to
                contact us about availabilities of items.
              </p>
              <button onClick={this.toggleModal} className={styles.button}>
                Get Quote
              </button>
            </div>
          ) : (
            <div>
              <p>Add items to your list to check availabilities</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  appState: state,
}))(List);
