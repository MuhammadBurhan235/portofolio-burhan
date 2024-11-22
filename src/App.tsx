import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    let title = "";
    let favicon = "";

    switch (pathName) {
      case "/portofolio-burhan/":
        title = "Portofolio | IntPic Page";
        favicon = "";
        break;
      case "/portofolio-burhan/tridiporto":
        title = "Portofolio | TriDi Page";
        favicon = "";
        break;
      case "/portofolio-burhan/lpalfath1":
        title = "Kenal Al-Fath | Landing Page";
        favicon = "";
        break;
      case "/portofolio-burhan/tridialfath1":
        title = "Kenal Al-Fath | TriDi Page";
        favicon = "";
        break;
      case "/portofolio-burhan/intpicalfath1":
        title = "Kenal Al-Fath | IntPic Page";
        favicon = "";
        break;
      case "/portofolio-burhan/list":
        title += "List Page";
        favicon = "";
        break;
      case "/portofolio-burhan/checkposi":
        title += "Check Position Page";
        favicon = "";
        break;
      case "/portofolio-burhan/adminmasjid":
        title += "Check Position Page";
        favicon = "";
        break;
      case "/portofolio-burhan/lphelpdesk":
        title += "Helpdesk BCC | Landing Page";
        favicon = "";
        break;
      case "/portofolio-burhan/dbcustomer":
        title += "Helpdesk BCC | Dashboard Customer";
        favicon = "";
        break;
      default:
        title += "Default Title";
        favicon = "";
    }

    // Mengatur judul dokumen
    document.title = title;

    // Mengubah favicon
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (link) {
      link.href = favicon; // Mengatur favicon sesuai rute
    }
  }, [location]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
