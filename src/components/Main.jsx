import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <main className="wrapper w-full sm:overflow-y-auto sm:w-3/4 relative lg:static">
      <div className="min-w-full lg:px-6">
        <Outlet />
      </div>

      <Navbar className={"sm:hidden"} />
    </main>
  );
};

export default Main;
