import { NavLink, useResolvedPath } from "react-router-dom";
import Wrapper from "./../../assets/wrappers/sidebar";
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlinePlusSquare,
  AiFillHome,
  AiFillPlusSquare,
} from "react-icons/ai";
import { HiUser } from "react-icons/hi";

export default function Sidebar() {
  const { pathname } = useResolvedPath();
  console.log(pathname);
  return (
    <Wrapper>
      <NavLink to="/">
        <div className="link">
          {pathname === "/" ? <AiFillHome /> : <AiOutlineHome />}
          <p>home</p>
        </div>
      </NavLink>
      <NavLink to="/create-list" className={({ isActive }) => (isActive ? "active" : "")}>
        <div className="link">
          {pathname === "/create-list" ? <AiFillPlusSquare /> : <AiOutlinePlusSquare />}
          <p>create list</p>
        </div>
      </NavLink>
      <NavLink to="/account">
        <div className="link">
          {pathname === "/account" ? <HiUser /> : <AiOutlineUser />}
          <p>account</p>
        </div>
      </NavLink>
    </Wrapper>
  );
}
