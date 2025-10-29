import { Outlet } from "react-router";
import Navbar from './../components/layout/navbar/Navbar';
import Footer from './../components/layout/footer/Footer';



const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      {/* <Navbar/> */}
      <main className="main-content">
        {/* <ScrollToTop /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;