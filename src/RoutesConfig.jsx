import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import Login from "./routes/loginSec/Login";
import Panel from "./routes/panelSec/Panel";
import Register from "./routes/registerSec/Register";
import Error from "./routes/error/Error";
import "react-toastify/dist/ReactToastify.css";
import Book from "./routes/bookSec/Book";
import Publishing from "./routes/publishingCompanySec/Publishing";
import Author from "./routes/authorSec/Author";
import UpdatePublishing from "./routes/updatePublishingSec/UpdatePublishing";

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Book />} />
        <Route path="/publishingcompany" element={<Publishing />} />
        <Route path="/author" element={<Author />} />
        <Route path="/publishingcompany/:id" element={<UpdatePublishing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
