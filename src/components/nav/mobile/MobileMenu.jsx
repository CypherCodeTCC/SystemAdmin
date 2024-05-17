import { useEffect, useState } from "react";
import LogoutPng from "../../../../public/logout.png";
import TrashPng from "../../../../public/trash.png";
import { Container } from "./mobileMenuStyle";

// Função para ajustar o z-index dos elementos com a classe mainHeading
function setMainHeadingZIndexBasedOnState(menuVisible) {
  const mainHeadings = document.querySelectorAll(".mainHeading");
  mainHeadings.forEach((mainHeading) => {
    mainHeading.style.zIndex = menuVisible ? 1000 : 1;
  });
}

export default function MobileMenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    setMainHeadingZIndexBasedOnState(menuVisible);

    const handleResize = () => {
        if(window.innerWidth > 1150 && menuVisible)
            setMenuVisible(false);
    };

    window.addEventListener("resize", handleResize);

   
  }, [menuVisible]);

  return (
    <Container>
      {!menuVisible ? (
        <span
          id="burger"
          className="material-symbols-outlined"
          onClick={handleClick}
        >
          menu
        </span>
      ) : (
        <span
          id="close"
          className="material-symbols-outlined"
          onClick={handleClick}
        >
          close
        </span>
      )}

      <div className={`interior-menumobile ${menuVisible ? "visible" : ""}`}>
        <div className="item">
          <div className="border">
            <img src={LogoutPng} alt="Sair da Conta" />
          </div>
          <div className="text">
            <h3>Log out</h3>
            <p>Saia da sua conta</p>
          </div>
        </div>
        <div className="item">
          <div className="border">
            <img src={TrashPng} alt="Excluir" />
          </div>
          <div>
            <h3>Excluir gêneros</h3>
            <p>Exclua gêneros de livros</p>
          </div>
        </div>
        <div className="item">
          <div className="border">
            <img src={TrashPng} alt="Excluir" />
          </div>
          <div>
            <h3>Excluir autores</h3>
            <p>Exclua autores de livros</p>
          </div>
        </div>
        <div className="item">
          <div className="border">
            <img src={TrashPng} alt="Excluir" />
          </div>
          <div>
            <h3>Excluir editoras</h3>
            <p>Exclua editoras de livros</p>
          </div>
        </div>
        <div className="item">
          <div className="border">
            <img src={TrashPng} alt="Excluir" />
          </div>
          <div>
            <h3>Excluir livros</h3>
            <p>Exclua todo um livro</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
