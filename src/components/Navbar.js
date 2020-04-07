import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { HamburgerCollapse } from "react-animated-burgers";
// import SocialIcons from "../constants/social-icons"
import { navbarData } from "../constants/Constants";
import styles from "../css/navbar.module.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      infOpen: false,
      gamesOpen: false,
      partyOpen: false,
    };
  }

  toggleNav = () => {
    this.setState({
      showNav: !this.state.showNav,
    });
  };

  toggleNavItem = (stateValue) => {
    if (stateValue) {
      this.setState({
        [stateValue]: !this.state[stateValue],
      });
    }
  };

  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.navIcon}>
          <HamburgerCollapse
            className={styles.hamburgerIcon}
            isActive={this.state.showNav}
            toggleButton={this.toggleNav}
            barColor="rgb(255, 123, 0)"
          />
        </div>
        {this.state.showNav && (
          <div className={styles.navItems}>
            {navbarData.map((item, index) => {
              return (
                <div
                  className={styles.itemContainer}
                  onClick={() => this.toggleNavItem(item.stateValue)}
                >
                  {item.route ? (
                    <NavLink key={index} to={item.route}>
                      <div className={styles.itemLink}>
                        <span className={styles.itemText}>{item.title}</span>
                      </div>
                    </NavLink>
                  ) : (
                    <div className={styles.itemLink}>
                      <span className={styles.itemText}>{item.title}</span>
                      {item.subcats.length > 0 && <FiChevronDown />}
                    </div>
                  )}
                  {this.state[item.stateValue] &&
                    item.subcats.map((subcat, index) => {
                      return (
                        <div>
                          <NavLink key={index} to={subcat.subroute}>
                            <div className={styles.subLink}>
                              <span className={styles.itemText}>
                                {subcat.subtitle}
                              </span>
                            </div>
                          </NavLink>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  //   return (
  //     <div className={styles.navbar}>
  //       <div className={styles.navHeader}>
  //         <button type="button" className={styles.logoBtn} onClick={toggleNav}>
  //           <FaAlignRight className={styles.logoIcon} />
  //         </button>
  //       </div>
  //        <ul className={ isOpen
  //               ? `${styles.navLinks} ${styles.showNav}`
  //               : `${styles.navLinks}`}>

  //       <li><Link  to='/'>Home<Link></li>
  //  <div className={styles.dropdown}>
  //      <Link  className={styles.dropbtn}>Inflatables</Link>
  //  <ul className={styles.dropdownContent}>
  //       <li><Link  to='/BounceHouses/'>Bounce Houses</Link></li>
  //       <li><Link  to='/BounceCombo/'>Bounce House Slide Combos</Link></li>
  //       <li><Link  to='/Slides/'>Slides</Link></li>
  //       <li><Link  to='/ObstacleCourse/'>Obstacle Courses</Link></li>
  //       <li><Link to='/WaterFriendly/'>Water Friendly</Link></li>
  //       <li><Link  to='/Interactives/'>Inflatable Interactives</Link></li>
  //       <li><Link  to='/SelfPickUp/'>Self Pick-up Inflatables</Link></li>
  //     </ul>
  //     </div>
  //     <div className={styles.dropdown}>
  //     <Link  className={styles.dropbtn}>Games</Link>
  //  <ul className={styles.dropdownContent}>
  //       <li><Link  to='/DunkBooth/'>Dunk Booth</Link></li>
  //     </ul>
  //     </div>
  //     <div className={styles.dropdown}>
  //     <Link  className={styles.dropbtn}>Party Equiptment</Link>
  //  <ul className={styles.dropdownContent}>
  //       <li><Link  to='/Concessions/'>Concessions</Link></li>
  //       <li><Link  to='/TablesAndChairs/'>Tables and Chairs</Link></li>
  //       <li><Link  to='/Cinema/'>Portable Cinema</Link></li>
  //       <li><Link  to='/Tents/'>Tents</Link></li>
  //     </ul>
  //     </div>
  //     <li><Link  to='/Faq'>FAQ's</Link></li>
  //     <div className={styles.dropdown}>
  //     <Link  className={styles.dropbtn}>Contact</Link>
  //  <ul className={styles.dropdownContent}>
  //       <li><Link  to='/Contact/'>Ask us Questions</Link></li>
  //       <li><Link  to='/SubmitQuote/'>Submit A Quote</Link></li>
  //     </ul>
  //     </div>
  //     <li><Link  to='/Deposit'>Pay Deposit</Link></li>
  //     </ul>

  //       <button>{props.listState.list.length}</button>
  //     </div>
  //   );
}

export default connect((state) => ({
  listState: state,
}))(Navbar);
