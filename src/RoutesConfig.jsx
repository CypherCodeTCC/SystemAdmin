import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";
import Panel from "./routes/panelSec/Panel";

const Layout = ({ children }) => (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );

export default function RoutesConfig() {
    return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/testeAmbiente"
          element={
            <Layout>
              <Panel />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
    );
}