import React from "react";
import styles from "./login.module.scss";
import yantramLogo from "./../../../public/yantram_logo.png";
import cross from "./../../../public/cross_logo.png";
import LoginForm from "../../component/loginForm/loginForm";
import vector from "./../../../public/doctor_svg.png";
const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_form}>
          <div className={styles.container_form_logo}>
            <img src={yantramLogo} alt="" className="" />
            <img src={cross} alt="" className="" />
          </div>
          <LoginForm />
        </div>
        <div className={styles.container_vector}>
          <div className={styles.container_vector_heading}>
            Intelligent Platform for Efficient Patient Management
          </div>
          <div className={styles.container_vector_image}>
            <img src={vector} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
