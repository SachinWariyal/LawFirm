import React from "react";
import styles from "./Hero.module.css";
import {ReactComponent as HeroImage} from '../../Assets/HeroImage.svg'
const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.heroText}>
          <h1>You don’t have to </h1>
          <h1>Fight them Alone.</h1>
        </div>
        <div className={styles.paraText}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
        </div>
        <div>
        <input type="email" className={styles.emailInput} placeholder="Enter your email address" style={{ color: 'white' }}/>
        <button className={styles.button}>Let's Talk</button>
      </div>
      </div>
      <div className={styles.heroImage}>
        <HeroImage/>
      </div>
      
    </div>
  );
};

export default Hero;
