import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="container min-h-screen p-6 mx-auto lg:max-w-7xl md:px-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
