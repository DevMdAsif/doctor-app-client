import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/footer/Footer";

function Main() {
  const loaction = useLocation();
  const nofooter =
    loaction.pathname.includes("/login") ||
    loaction.pathname.includes("/singUp");

  return (
    <div>
      <Navbar />
      <Outlet />
      {nofooter || <Footer />}
    </div>
  );
}

export default Main;
