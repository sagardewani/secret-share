import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div id="content" className="root-container">
      <Outlet />
    </div>
  );
}