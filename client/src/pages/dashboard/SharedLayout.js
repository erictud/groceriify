import { Outlet } from "react-router-dom";
import { NavBar, Sidebar } from "../../components";

export default function SharedLayout() {
  return (
    <div>
      <main className="page">
        <NavBar />
        <div className="content">
          <Outlet />
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
