import Wrapper from "../assets/wrappers/form-row";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function FormRowInput({ text, labelText, type, changeHandler, value, indications }) {
  return (
    <Wrapper>
      <label htmlFor={text}>{labelText || text}</label>
      {indications && (
        <div className="info">
          <AiOutlineInfoCircle />
          <p>{indications}</p>
        </div>
      )}
      <input type={type} name={text} onChange={changeHandler} value={value} />
    </Wrapper>
  );
}
