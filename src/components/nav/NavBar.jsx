import { useState, useEffect } from "react";
import PngLogo from "../../../public/logotipo.png";
import PngUser from "../../../public/user.png";
import {
  ALiBotao,
  Container,
  DropUser,
  LiBotao,
  List,
  MenuMobile,
} from "./navBarStyle";

export default function NavBar() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1150 && userMenuOpen) setUserMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
  }, [userMenuOpen]);

  return (
    <>
      <Container className="container">
        <div className="container-logo">
          <img src={PngLogo} alt="Logotipo da empresa" />
        </div>
        <div className="container-icons">
          <img src={PngUser} alt="Botão para logar" />
          <MenuMobile>
            {!userMenuOpen ? (
              <span
                id="burger"
                className="material-symbols-outlined"
                onClick={toggleUserMenu}
              >
                menu
              </span>
            ) : (
              <span
                id="close"
                className="material-symbols-outlined"
                onClick={toggleUserMenu}
              >
                close
              </span>
            )}
          </MenuMobile>
          <DropUser isOpen={userMenuOpen}>
            <List>
              <li>Excluir Autores</li>
              <li>Excluir Gêneros</li>
              <li>Excluir Livros</li>
              <li>Excluir Autores</li>
              <LiBotao>
                <ALiBotao>Logout</ALiBotao>
              </LiBotao>
            </List>
          </DropUser>
        </div>
      </Container>
    </>
  );
}
