import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/alert";
import { FiAlertCircle } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";

export default function Alert() {
  const { alertType, alertMsg } = useAppContext();
  return (
    <Wrapper type={alertType}>
      {alertType === "success" ? <TiTickOutline /> : <FiAlertCircle />}
      <p>{alertMsg}</p>
    </Wrapper>
  );
}
