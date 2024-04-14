import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mx-auto  container lg:max-w-7xl p-6 md:px-8">
        hey
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
