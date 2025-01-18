import Nav from "../components/Nav";
import { Outlet } from "react-router";


const Root = () => {

  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Root;
