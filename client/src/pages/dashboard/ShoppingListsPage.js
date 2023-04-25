import { ListOverview } from "../../components";
import Wrapper from "../../assets/wrappers/lists-overview-page";
import NotFoundSvg from "../../assets/images/not-found.svg";
import { useAppContext } from "../../context/appContext";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ShoppingListsPage() {
  const { activeLists } = useAppContext();
  return (
    <Wrapper>
      <h2 className="title">All lists:</h2>
      {activeLists.length > 0 ? (
        activeLists.map((list) => (
          <ListOverview
            id={list.id}
            key={list.id}
            title={list.title}
            numOfItems={list.numOfItems}
            numOfMembers={list.numOfMembers}
          />
        ))
      ) : (
        <div className="no-list-container">
          <h2>No list created yet</h2>
          <img src={NotFoundSvg} alt="Not found illustration" />
          <Link to="/create-list">
            <h3>create list here</h3>
            <AiOutlinePlus />
          </Link>
        </div>
      )}
      {activeLists.length > 0 && activeLists.length < 3 ? (
        <div className="no-list-container">
          <Link to="/create-list">
            <h3>create another list here</h3>
            <AiOutlinePlus />
          </Link>
        </div>
      ) : (
        <></>
      )}
    </Wrapper>
  );
}
