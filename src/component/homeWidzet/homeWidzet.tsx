import styles from "./homeWidzet.module.scss";
import React, { MouseEventHandler } from "react";
import stethoscope from "./../../../public/Stethoscope.png";
import crossVector from "./../../../public/cross_vector.png";
import inpatient from "./../../../public/bed_icon.png";
import { useNavigate } from "react-router-dom";
type widzetProp = {
  heading: string;
  paragraph: string;
  icon: string;
  color: string;
};
function Widzet({ heading, paragraph, icon, color }: widzetProp) {
  const navigate = useNavigate();
  const clickNavigate = (heading: string) => {
    navigate(`${heading.toLowerCase()}`);
  };
  return (
    <div className={`${styles.widzet_box + " " + styles[color]}`}>
      <img src={icon} alt="" className="" />
      <div className={styles.heading}>{heading}</div>
      <div className={styles.paragraph}>{paragraph}</div>
      <div className={styles.dashboard} onClick={() => clickNavigate(heading)}>
        View Dashboard
      </div>
    </div>
  );
}
function HomeWidzet() {
  return (
    <div className={styles.widzet}>
      <Widzet
        heading={"OPD"}
        paragraph={
          "Access patient records, track treatment progress and patient data"
        }
        icon={stethoscope}
        color={"orange"}
      />
      <Widzet
        heading={"Inpatient"}
        paragraph={
          "Easily manage bed allocation, patient care plans, and discharge processes"
        }
        icon={inpatient}
        color={"blue"}
      />
      <Widzet
        heading={"Emergency"}
        paragraph={
          "Rapidly prioritize care with instant access to patient data"
        }
        icon={crossVector}
        color={"grey"}
      />
    </div>
  );
}

export default HomeWidzet;
