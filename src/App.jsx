import Login from "./routes/loginSec/Login";
import NavBar from "./components/nav/NavBar";
import './main.css'
import Footer from "./components/footer/Footer";


export default function App() {
  return (
    <>
      <NavBar/>
      <Login/>
      <Footer/>
    </>
  )
}
