import { useState } from "react";
import Wrapper from "../assets/wrappers/form-row-password";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export default function FormRowPassword({ value, changeHandler }) {
  const [showPassword, setShowPassword] = useState(false);

  const changeVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Wrapper>
      <label htmlFor="password">password</label>
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
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
