import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import Login from "./routes/loginSec/Login";
import Panel from "./routes/panelSec/Panel";
import Error from "./routes/error/Error";
import "react-toastify/dist/ReactToastify.css"; 

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
