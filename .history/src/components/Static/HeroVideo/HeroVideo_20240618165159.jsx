import React from "react";
import styles from "./HeroVideo.module.css";
import Typewriter from "typewriter-effect";

const HeroVideo = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroDots}>
        <div className={styles.videoPlay}>
          <video loop autoPlay muted>
            <source src="/img/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={styles.videOverlay}></div>
        <div className={styles.connect}>
          <div className={styles.insta}>
            <img src="/img/instagram.svg" alt="" />
          </div>
          <div className={styles.insta}>
            <img
              src="/img/linkedin-alt.svg"
              alt=""
              onClick={"www.instagram.com/shekharryadv"}
            />
          </div>
          <div className={styles.insta}>
            <img src="/img/github-alt.svg" alt="" />
          </div>
          <div className={styles.insta}>
            <img src="/img/envelope.svg" alt="" />
          </div>
          <div className={styles.insta}>
            <img src="/img/phone-alt.svg" alt="" />
          </div>
        </div>
        <div className={styles.typewriter}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Developer !")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Designer !")
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
