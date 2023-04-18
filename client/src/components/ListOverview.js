import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/list-overview";
import { AiOutlineUser } from "react-icons/ai";
import { CiShoppingBasket } from "react-icons/ci";

export default function ListOverview({ numOfMembers, title, id, numOfItems }) {
  return (
    <Wrapper>
      <Link to={`/${id}`}>
        <h4>{title}</h4>
        <div className="info-row">
          <div className="info-container">
            <AiOutlineUser />
            <p>{numOfMembers} participants</p>
          </div>
          <div className="info-container">
            <CiShoppingBasket />
            <p>{numOfItems} items</p>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
}
