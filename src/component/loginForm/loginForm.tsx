import React from "react";
import { ChangeEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./loginForm.module.scss";

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: {
      value: "",
      valid: true,
      message: "",
    },
    password: {
      value: "",
      valid: true,
      message: "",
    },
  });
  const handleFormSubmit: ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/");
  };

  //   const changeState: ChangeEventHandler<HTMLInputElement> = (e): void => {
  //     setFormData((prevFormData) => {
  //       console.log(e.target.name);
  //       type Formfield = "email" | "password";
  //       const name: Formfield = e.target.name;
  //       prevFormData[name] = {
  //         value: e.target.value,
  //         valid: e.target.reportValidity(),
  //         message:''
  //       };
  //       return { ...prevFormData };
  //     });
  //   };
  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.form_heading}>Login to your account</div>
      <div className={styles.form_group}>
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          className=""
          id="email"
          placeholder="Enter your password"
          autoFocus
          required
          formNoValidate
          name="email"
          onChange={(e) => {
            // console.log(e.target.validity)
            setFormData((prevValue) => {
              return {
                ...prevValue,
                email: {
                  value: e.target.value,
                  valid: e.target.reportValidity(),
                  message: "",
                },
              };
            });
          }}
          style={{
            border: `${
              formData.email.valid ? "1px solid #bfbfbf" : "1px solid #FF0000"
            }`,
          }}
          //   style={{border:}}
        />
        <div
          className={styles.form_group_message}
          style={{
            visibility: `${formData.email.valid ? "hidden" : "visible"}`,
          }}
        >
          Please enter a valid email
        </div>
      </div>
      <div className={styles.form_group}>
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          className=""
          id="password"
          placeholder="Enter your password"
          minLength={5}
          name="password"
          onChange={(e) => {
            // console.log(e.target.validity);
            setFormData((prevValue) => {
              return {
                ...prevValue,
                password: {
                  value: e.target.value,
                  valid: e.target.reportValidity(),
                  message: "",
                },
              };
            });
          }}
          style={{
            border: `${
              formData.password.valid
                ? "1px solid #bfbfbf"
                : "1px solid #FF0000"
            }`,
          }}
          required
        />
        <div
          className={styles.form_group_message}
          style={{
            visibility: `${formData.password.valid ? "hidden" : "visible"}`,
          }}
        >
          Please enter your password
        </div>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
