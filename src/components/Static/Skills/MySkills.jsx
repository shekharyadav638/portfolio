import React from 'react';
import styles from './MySkills.module.css';

const MySkills = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.rect}>
            <div className={styles.text}>
                <h2>My <span>Skills </span> & Technical <span>Competencies</span></h2>
            </div>
            <div className={styles.top}>
                <h3>Top Skills :-</h3>
                <div className={styles.topskills}>
                    <div className={styles.skill}>
                        <img src="/img/skills/webd.png" alt="" />
                        <h4>Web Development</h4>
                    </div>
                    <div className={styles.skill}>
                        <img src="/img/skills/uiux.png" alt="" />
                        <h4>Designing</h4>
                    </div>
                    <div className={styles.skill}>
                        <img src="/img/skills/mongo.png" alt="" />
                        <h4>MongoDB</h4>
                    </div>
                    <div className={styles.skill}>
                        <img src="/img/skills/react.png" alt="" />
                        <h4>React</h4>
                    </div>
                </div>
            </div>
            <div className={styles.top}>
                <h3>Languages :-</h3>
                <div className={styles.topskills}>
                    <div className={styles.skill}>
                        <img src="/img/skills/js.png" alt="" />
                        <h4>JavaScript</h4>
                    </div>
                    <div className={styles.skill}>
                        <img src="/img/skills/html.png" alt="" />
                        <h4>HTML / CSS</h4>
                    </div>
                    <div className={styles.skill}>
                        <img src="/img/skills/c++.png" alt="" />
                        <h4>C / C++</h4>
                    </div>
                    <div className={styles.skill}>
                        <img src="/img/skills/java.png" alt="" />
                        <h4>JAVA</h4>
                    </div>
                </div>
            </div>
            <div className={styles.top}>
                <h3>Other Tools and Technologies :-</h3>
                <div className={styles.topskills}>
                    <div className={styles.skill}>
                        <img src="/img/skills/figma.png" alt="" />
                        <h4>Figma</h4>
                    </div>
                    <div className={styles.skill}>
                        <img src="/img/skills/nodejs.png" alt="" />
                        <h4>NodeJS</h4>
                    </div>
                    <div className={styles.skill}>
                        <img src="/img/skills/sql.png" alt="" />
                        <h4>MySQL</h4>
                    </div>
                    <div className={styles.skill}>
                        <img src="/img/skills/tcss.png" alt="" />
                        <h4>Tailwind CSS</h4>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MySkills