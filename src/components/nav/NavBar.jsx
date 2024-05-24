import PngLogo from "../../../public/logotipo.png";
import PngUser from "../../../public/user.png";
import MobileMenu from "./mobile/MobileMenu";
import { Container } from "./navBarStyle";

export default function NavBar() {
  return (
    <>
      <Container>
        <div className="container-logo">
          <img src={PngLogo} alt="Logotipo da empresa" />
        </div>
        <div className="container-icons">
          <img src={PngUser} alt="Botão para logar" />
          <MobileMenu />
        </div>
      </Container>
    </>
  );
}