import Wrapper from "../assets/wrappers/form-row";

export default function FormRowInput({ text, labelText, type, changeHandler, value }) {
  return (
    <Wrapper>
      <label htmlFor={text}>{text || labelText}</label>
      <input type={type} name={text} onChange={changeHandler} value={value} />
    </Wrapper>
  );
}
