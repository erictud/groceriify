import { useState } from "react";
import Wrapper from "../assets/wrappers/auth-page";
import FormRowInput from "./FormRowInput";
import FormRowPassword from "./FormRowPassword";
import LoadingSpinner from "./layout/LoadingSpinner";
import { useAppContext } from "../context/appContext";
import Alert from "./Alert";

export default function AuthForm() {
  const { logIn, signUp, displayAlert, isLoading, showAlert } = useAppContext();

  const defaultState = {
    username: "",
    email: "",
    password: "",
    isMember: false, // determines if member => log in or sign up
  };

  const [formValues, setFormValues] = useState(defaultState);

  //   functions
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, username, isMember } = formValues;

    if (isMember) {
      //? check values validity
      if (!email.trim() || !email.includes("@")) {
        displayAlert("error", "Enter valid email!");
        return;
      }
      if (!password || password.length < 8) {
        displayAlert("error", "Enter valid password!");
        return;
      }
      await logIn(email, password);
    } else {
      //? check values validity
      if (!email.trim() || !email.includes("@")) {
        displayAlert("error", "Invalid email");
        return;
      }
      if (!password || password.length < 8) {
        displayAlert("error", "Invalid password (must have at least 8 characters)");
        return;
      }
      if (!username || username.length < 4) {
        displayAlert("error", "Invalid username (must have at least 4 characters)");
        return;
      }
      await signUp(email, password, username);
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <h2>{formValues.isMember ? "Log in" : "Register account"}</h2>
        <form className="form" onSubmit={handleSubmit}>
          {showAlert && <Alert />}
          <div className="input-container">
            {/* Username field */}
            {!formValues.isMember && (
              <FormRowInput
                labelText="username"
                text="username"
                type="text"
                indications={false}
                value={formValues.username}
                changeHandler={handleChange}
              />
            )}
            {/* Email field */}
            <FormRowInput
              labelText="email"
              text="email"
              type="text"
              indications={false}
              value={formValues.email}
              changeHandler={handleChange}
            />
            {/* Password Field */}
            <FormRowPassword
              value={formValues.password}
              indications={false}
              changeHandler={handleChange}
            />
          </div>
          <button disabled={isLoading} className="btn">
            {formValues.isMember ? (
              isLoading ? (
                <LoadingSpinner />
              ) : (
                "log in"
              )
            ) : isLoading ? (
              <LoadingSpinner />
            ) : (
              "sign up"
            )}
          </button>
        </form>
        <p
          className="change-state"
          onClick={() =>
            setFormValues((val) => {
              return { ...val, isMember: !val.isMember };
            })
          }
        >
          {formValues.isMember
            ? "Don't have an account? Click here to sign up"
            : "Already have an account? Click here to log in"}
        </p>
      </div>
    </Wrapper>
  );
}
