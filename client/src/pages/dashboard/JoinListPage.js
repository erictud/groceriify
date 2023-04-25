import { useState } from "react";
import Wrapper from "../../assets/wrappers/join-list-page";
import { FormRowInput, FormRowPassword } from "../../components";

export default function JoinListPage() {
  const defaultState = {
    id: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(defaultState);

  const handleChange = (e) => {
    setFormValues((prev) => {
      return { ...formValues, [e.target.name]: e.target.value };
    });
  };

  const clearFormValues = () => {
    setFormValues({
      id: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <h2>Join a grocery list </h2>
      <form className="join_list-form" onSubmit={handleSubmit}>
        <FormRowInput
          value={formValues.id}
          text="id"
          labelText="Session id"
          type="number"
          changeHandler={handleChange}
        />
        <FormRowPassword
          value={formValues.password}
          name="password"
          labelText="Session password"
          changeHandler={handleChange}
        />
        <div className="button-container">
          <button className="btn btn-flex btn-red" onClick={clearFormValues}>
            Clear
          </button>
          <button className="btn">Join list</button>
        </div>
      </form>
    </Wrapper>
  );
}
