import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;