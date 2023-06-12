import styles from "./home.module.scss";
import React from "react";
import yantramLogo from "./../../../public/yantram_logo.png";
import profile from "./../../../public/profile.png";
import HomeWidzet from "../../component/homeWidzet/homeWidzet";
import love from "./../../../public/love.png";
function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={yantramLogo} alt="" className={styles.yantramlogo} />
          <div className={styles.header_profile}>
            <div className={styles.header_profile_name}>
              Hi,
              <br />
              Kanika
            </div>
            <img src={profile} alt="" className="" />
          </div>
        </div>
        <div className={styles.container_heading}>
          Streamlined Medical Data Access for Improved Patient Care
        </div>
        <HomeWidzet />
        <img src={love} alt="" className={styles.tagline} />
      </div>
    </>
  );
}

export default Home;
