import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/portofolio-burhan/">Home</Link>
        {" | "}
        <Link to="/portofolio-burhan/intpic">IntPic</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
