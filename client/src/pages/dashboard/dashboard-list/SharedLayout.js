import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <>
      <Outlet />
      <div className="">Bottom nav</div>
    </>
  );
}
