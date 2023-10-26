import React from 'react';
import styles from './Navbar.module.css'
import {ReactComponent as NavLogo} from "../../Assets/NavLogo.svg"
const Navbar = () => {
  return (
    <div className={styles.wrapper}>
        <NavLogo className={styles.NavLogo}/>
        <div className={styles.navOptions}>
            <div className={styles.home}>Home</div>
            <div className={styles.attorneys}>Attorneys</div>
            <div className={styles.practiceArea}>Practice Area</div>
            <div className={styles.aboutUS}>About Us</div>
        </div>
        <div className={styles.contactNow}>
            Contact Now    
        </div>    
    </div>
  )
}

export default Navbar