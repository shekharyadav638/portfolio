import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.abouthero}>
      <div className={styles.hero}>
        <div className={styles.heroleft}>
          <div className={styles.hello}>
            <h2>Hello !</h2>
          </div>
          <div className={styles.name}>
            <h1>I am </h1>
            <h1 className={styles.myname}>Shekhar</h1>
          </div>
          <div className={styles.intro}>
            <p>
              A freelance <span>Web Developer </span> & <span>UI/UX </span>{" "}
              Designer <br></br>from Chandigarh
            </p>
          </div>
          <div className={styles.resumesec}>
            <button className={styles.resume}>Resume</button>
          </div>
        </div>
        <div className={styles.heroright}>
          <div className={styles.heroimg}>
            {/* <img src="/img/fluidbg.png" alt="fluid" /> */}
            <img src="\img\IMG20230113120816.jpg" alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
