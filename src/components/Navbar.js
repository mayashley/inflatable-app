// import React, { useState } from "react";
// import { FaAlignRight } from "react-icons/fa"
// import { connect } from "react-redux";
// // import SocialIcons from "../constants/social-icons"
// import styles from "../css/navbar.module.css";
// import Link from "react";

// const Navbar = props => {
//   const [isOpen, setNav] = useState();
//   const toggleNav = () => {
//     setNav(isOpen => !isOpen);
//   };
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
//     </ul> */}

//       <button>{props.listState.list.length}</button>
//     </div>
//   );
// };

// export default connect(state => ({
//   listState: state
// }))(Navbar);
