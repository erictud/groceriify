import { useState } from "react";
import Wrapper from "../assets/wrappers/form-row-password";
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineInfoCircle } from "react-icons/ai";

export default function FormRowPassword({ value, changeHandler, indications, labelText, name }) {
  const [showPassword, setShowPassword] = useState(false);

  const changeVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Wrapper>
      <label htmlFor="password">{!labelText ? "password" : labelText}</label>
      {indications && (
        <div className="info">
          <AiOutlineInfoCircle />
          <p>{indications}</p>
        </div>
      )}
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          name={name || "password"}
          value={value}
          onChange={changeHandler}
        />
        <div onClick={changeVisibility}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </div>
      </div>
    </Wrapper>
  );
}
