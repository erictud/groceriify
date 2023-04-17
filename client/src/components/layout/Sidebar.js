import { NavLink } from "react-router-dom";
import Wrapper from "./../../assets/wrappers/sidebar";
import { AiOutlineUser, AiOutlineHome, AiOutlinePlusSquare } from "react-icons/ai";

export default function Sidebar() {
  return (
    <Wrapper>
      <NavLink to="/">
        <div className="link">
          <AiOutlineHome />
          <p>home</p>
        </div>
      </NavLink>
      <NavLink to="/create-list" className={({ isActive }) => (isActive ? "active" : "")}>
        <div className="link">
          <AiOutlinePlusSquare />
          <p>create list</p>
        </div>
      </NavLink>
      <NavLink to="/account">
        <div className="link">
          <AiOutlineUser />
          <p>account</p>
        </div>
      </NavLink>
    </Wrapper>
  );
}
