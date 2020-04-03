import React from 'react'
import styles from "../css/hero.module.css"
import Banner from '../constants/Banner'



const Img = require('../images/bounceCastle2.jpg');


 const Hero = () => {
   
    return (
        <header className={styles.heroContainer} >
           
            <Banner title="Southern ohio inflatables">
        
             <img className={styles.defaultHero} src={Img} alt="kids bouncing"/>
             </Banner>
        </header>
    )
}
export default Hero