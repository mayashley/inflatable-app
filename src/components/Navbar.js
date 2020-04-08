import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { HamburgerCollapse } from "react-animated-burgers";
// import SocialIcons from "../constants/social-icons"
import { navbarData } from "../constants/Constants";
import styles from "../css/navbar.module.css";
import ListButton from "./ListButton";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      infOpen: false,
      gamesOpen: false,
      partyOpen: false,
      contactOpen: false,
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    let extraStateObj = {
      infOpen: false,
      gamesOpen: false,
      partyOpen: false,
      contactOpen: false,
      showNav: false,
    };
    if (window.innerWidth >= 768) {
      extraStateObj = {
        infOpen: true,
        gamesOpen: true,
        partyOpen: true,
        contactOpen: true,
        showNav: true,
      };
    }
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      ...extraStateObj,
    });
  }

  toggleNav = () => {
    const { width } = this.state;

    width < 768 &&
      this.setState({
        showNav: !this.state.showNav,
        infOpen: false,
        gamesOpen: false,
        partyOpen: false,
        contactOpen: false,
      });
  };

  toggleNavItem = (stateValue) => {
    const { width } = this.state;

    if (stateValue) {
      width < 768 &&
        this.setState({
          [stateValue]: !this.state[stateValue],
        });
    }
  };

  render() {
    const { list } = this.props.listState;
    const { showNav } = this.state;
    return (
      <div className={styles.mainContainer}>
        <div className={styles.navIcon}>
          <ListButton itemCount={list.length} />
          <div className={styles.hamburgerContainer}>
            <HamburgerCollapse
              className={styles.hamburgerIcon}
              isActive={showNav}
              toggleButton={this.toggleNav}
              barColor="rgb(255, 123, 0)"
            />
          </div>
        </div>
        {showNav && (
          <div className={styles.navItems}>
            {navbarData.map((item, index) => {
              return (
                <div key={index} className={styles.itemContainer}>
                  {item.route ? (
                    <NavLink to={item.route} onClick={this.toggleNav}>
                      <div className={styles.itemLink}>
                        <span className={styles.itemText}>{item.title}</span>
                      </div>
                    </NavLink>
                  ) : (
                    <div
                      className={styles.itemLink}
                      onClick={() => this.toggleNavItem(item.stateValue)}
                    >
                      <span className={styles.itemText}>{item.title}</span>
                      {item.subcats.length > 0 && <FiChevronDown />}
                    </div>
                  )}
                  {this.state[item.stateValue] && (
                    <div className={styles.subContainer}>
                      {item.subcats.map((subcat, index) => {
                        return (
                          <NavLink
                            key={index}
                            to={subcat.subroute}
                            className={styles.subLink}
                            onClick={this.toggleNav}
                          >
                            <span className={styles.itemText}>
                              {subcat.subtitle}
                            </span>
                          </NavLink>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            <div className={styles.wideList}>
              <ListButton itemCount={list.length} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect((state) => ({
  listState: state,
}))(Navbar);
