import { useState } from "react";
import Wrapper from "../../assets/wrappers/create-list-page";
import { FormRowInput, FormRowPassword } from "../../components";
import { useAppContext } from "../../context/appContext";
import LoadingSpinner from "../../components/layout/LoadingSpinner";
import { AiOutlineInfoCircle, AiOutlinePlus } from "react-icons/ai";
import { HiOutlineXCircle } from "react-icons/hi";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import Alert from "../../components/Alert";

export default function CreateListPage() {
  const defaultValues = {
    step: 1,
    title: "",
    password: "",
    confirmPassword: "",
    shopsList: [],
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const [shop, setShop] = useState("");
  const { isLoading, displayAlert, showAlert, createList } = useAppContext();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const increaseFormStep = (e) => {
    setFormValues((prev) => {
      return { ...formValues, step: prev.step + 1 };
    });
  };

  const decreaseFormStep = (e) => {
    setFormValues((prev) => {
      return { ...formValues, step: prev.step - 1 };
    });
  };

  const handleAddShop = () => {
    if (!shop) return;
    setFormValues({ ...formValues, shopsList: [...formValues.shopsList, shop] });
    setShop("");
  };

  const deleteShop = (i) => {
    const { shopsList } = formValues;
    shopsList.splice(i, 1);
    setFormValues({ ...formValues, shopsList: shopsList });
  };

  const clearFormValues = () => {
    setFormValues((prev) => {
      return {
        step: prev.step,
        title: "",
        password: "",
        confirmPassword: "",
        shopsList: [],
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formValues.title.trim().length < 2 || formValues.title.trim().length > 20) {
      displayAlert("error", "Enter a valid title!");
      return;
    }
    if (formValues.password.trim().length < 4 || formValues.password.trim().length > 10) {
      displayAlert("error", "Enter a valid password!");
      return;
    }
    if (formValues.password !== formValues.confirmPassword) {
      displayAlert("error", "Passwords do not match!");
      return;
    }
    createList({
      title: formValues.title,
      password: formValues.password,
      shopsList: formValues.shopsList,
    });
  };

  return (
    <Wrapper>
      <h2>Create a grocery list</h2>
      {showAlert && <Alert />}
      <form className="create_list-form" onSubmit={handleFormSubmit}>
        <p className="step">{formValues.step}/2</p>
        {formValues.step === 1 ? (
          <>
            <FormRowInput
              text="title"
              type="input"
              value={formValues.title}
              changeHandler={handleChange}
              indications="This is the title of the grocery session (min 4 characters; max 20 characters)"
            />
            <FormRowPassword
              value={formValues.password}
              changeHandler={handleChange}
              indications="With this password users will be able to connect to this grocery list (min 4 characters; max 10 characters)"
            />
            <FormRowPassword
              value={formValues.confirmPassword}
              changeHandler={handleChange}
              name="confirmPassword"
              labelText="Confirm password"
              indications="Confirm the password you wrote above "
            />
            <div className="form_button-row">
              <button type="button" className="btn btn-flex btn-red" onClick={clearFormValues}>
                Clear
              </button>
              <button type="button" className="btn btn-flex" onClick={increaseFormStep}>
                Next <MdOutlineKeyboardDoubleArrowRight />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="shops_container">
              <div className="shops_input">
                <label htmlFor="shop">Shop</label>
                <div className="info">
                  <AiOutlineInfoCircle />
                  <p>
                    By the shops you are adding to the list bellow you will be able to sort the
                    items of the grocery list
                  </p>
                </div>
                <div className="shops_input-row">
                  <input
                    type="text"
                    name="shop"
                    onChange={(e) => setShop(e.target.value)}
                    value={shop}
                  />
                  <button className="btn btn-flex" type="button" onClick={handleAddShop}>
                    <AiOutlinePlus /> add
                  </button>
                </div>
              </div>
              <div className="shops_list">
                {formValues.shopsList.length === 0 ? <span>Add a shop </span> : <></>}
                {formValues.shopsList.map((el, i) => (
                  <div className="shops_list-item" key={i}>
                    {el}
                    <div onClick={(e) => deleteShop(i)}>
                      <HiOutlineXCircle />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="form_button-row">
              <button type="button" className="btn btn-flex" onClick={decreaseFormStep}>
                <MdOutlineKeyboardDoubleArrowLeft /> Previous
              </button>
              <button type="button" className="btn btn-flex btn-red" onClick={clearFormValues}>
                Clear
              </button>
              <button disabled={isLoading} className="btn">
                {isLoading ? <LoadingSpinner /> : "Create "}
              </button>
            </div>
          </>
        )}
      </form>
    </Wrapper>
  );
}
