import Wrapper from "../../assets/wrappers/account-page";
import { useAppContext } from "../../context/appContext";
import { Link } from "react-router-dom";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";

export default function AccountPage() {
  const { username, email, logOut } = useAppContext();
  return (
    <Wrapper>
      <div className="user-container">
        <div className="user-img">{username[0]}</div>
        <div className="user-info">
          <h3>{username}</h3>
          <h4>{email}</h4>
        </div>
      </div>
      <div className="options-list">
        <h2>Account settings</h2>
        <ul className="list">
          <li className="list-item">
            <Link to="/">
              <HiOutlineClipboardList />
              <p>View all grocery lists</p>
            </Link>
          </li>
          <li className="list-item" onClick={logOut}>
            <BiLogOut />
            <p>Sign out</p>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
