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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
export default function NavBar({ isUserLogged, setIsUserLogged }) {
  const navigate = useNavigate();
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

  const handleRoutes = (route) => {
    setUserMenuOpen(false);
    navigate(route);
  };

  const handleLogout = () => {
    setIsUserLogged(false);
    setUserMenuOpen(false);
    localStorage.removeItem("admin");
    navigate("/");

    toast.info("Você deslogou do sistema.", {
      closeOnClick: true,
    });
  };

  return (
    <>
      <Container className="container">
        <div className="container-logo">
          <img src={PngLogo} alt="Logotipo da empresa" />
        </div>
        <div className="container-icons">
          <img src={PngUser} alt="Botão para logar" />
          {isUserLogged && (
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
          )}
          <DropUser isOpen={userMenuOpen}>
            <List>
              <li onClick={() => handleRoutes("/author")}>Excluir Autores</li>
              <li onClick={() => handleRoutes("/register")}>
                Cadastrar Funcionário
              </li>
              <li onClick={() => handleRoutes("/books")}>Excluir Livros</li>
              <li onClick={() => handleRoutes("/publishingcompany")}>
                Excluir Editoras
              </li>
              <LiBotao>
                <ALiBotao onClick={handleLogout}>Logout</ALiBotao>
              </LiBotao>
            </List>
          </DropUser>
        </div>
      </Container>
    </>
  );
}
