import { useEffect, useState } from "react";
import LogoutPng from "../../../public/logout.png";
import TrashPng from "../../../public/trash.png";
import {
  AList,
  AOptions,
  Border,
  Container,
  ContainerConfig,
  ContainerInsert,
  ContainerOptions,
  Containerinfos,
  Item,
  LiOptions,
  ListOptions,
  UlList,
} from "./panelStyle";
import Forms from "./Forms";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Panel() {
  const navigate = useNavigate();

  /*
    CONTROLE DE ACESSO, PARA QUE NÃO SEJA POSSÍVEL ACESSAR A ROTA SEM ESTAR LOGADO
  */
  useEffect(() => {
    const checkUser = () => {
      const admin = localStorage.getItem("admin");
      if (!admin) {
        setTimeout(() => {
          navigate("/");
        }, 0);
      }
    };
    checkUser();
  }, [navigate]);

  const [optionColor, setOptionColor] = useState(1);
  const [insertColor, setInsertColor] = useState(1);
  const [isActive, setIsActive] = useState(1);
  const [selectedForm, setSelectedForm] = useState(1);

  //ALTERA A COR DA LETRA DAS OPÇÕES
  const changeOptionColor = (id) => {
    setOptionColor(id === optionColor ? id : id);
  };

  //ALTERA A ANIMAÇÃO DAS OPÇÕES DA LISTA DO FORMULARIO
  const changeAnimation = (id) => {
    setIsActive(id === isActive ? id : id);
  };

  //ALTERA A COR DA LETRA DAS OPÇÕES DA LISTA DO FORMULARIO
  const changeColorInsert = (id) => {
    setInsertColor(id === insertColor ? id : id);
    setSelectedForm(id);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/");

    toast.info("Você deslogou do sistema.", {
      closeOnClick: true,
    });
  };

  return (
    <>
      <Container>
        <ContainerOptions>
          <ListOptions>
            <LiOptions>
              <AOptions
                onClick={() => changeOptionColor(1)}
                className={optionColor === 1 ? "blue" : ""}
              >
                Overview
              </AOptions>
            </LiOptions>
            <LiOptions>
              <AOptions
                onClick={() => changeOptionColor(2)}
                className={optionColor === 2 ? "blue" : ""}
              >
                Configurações
              </AOptions>
            </LiOptions>
          </ListOptions>
        </ContainerOptions>
        <Containerinfos>
          <p>Id</p>
          <p>Preço</p>
          <p>Editora</p>
          <p>Autor</p>
          <p>Gênero</p>
          <p>Avaliação</p>
          <p>Modificar</p>
        </Containerinfos>
        <ContainerConfig>
          <Item onClick={handleLogout}>
            <Border>
              <img src={LogoutPng} alt="Sair da Conta" />
            </Border>
            <div className="text">
              <h3>Log out</h3>
              <p>Saia da sua conta</p>
            </div>
          </Item>
          <Item>
            <Border>
              <img src={TrashPng} alt="Excluir" />
            </Border>
            <div>
              <h3>Excluir gêneros</h3>
              <p>Exclua gêneros de livros</p>
            </div>
          </Item>
          <Item>
            <Border>
              <img src={TrashPng} alt="Excluir" />
            </Border>
            <div>
              <h3>Excluir autores</h3>
              <p>Exclua autores de livros</p>
            </div>
          </Item>
          <Item>
            <Border>
              <img src={TrashPng} alt="Excluir" />
            </Border>
            <div>
              <h3>Excluir editoras</h3>
              <p>Exclua editoras de livros</p>
            </div>
          </Item>
          <Item>
            <Border>
              <img src={TrashPng} alt="Excluir" />
            </Border>
            <div>
              <h3>Excluir livros</h3>
              <p>Exclua todo um livro</p>
            </div>
          </Item>
        </ContainerConfig>
        <ContainerInsert>
          <h1>Adicionar</h1>
          <UlList>
            <li
              onClick={() => changeAnimation(1)}
              className={isActive === 1 ? "active" : ""}
            >
              <AList
                onClick={() => changeColorInsert(1)}
                className={insertColor === 1 ? "blue" : ""}
              >
                Livros
              </AList>
            </li>
            <li
              onClick={() => changeAnimation(2)}
              className={isActive === 2 ? "active" : ""}
            >
              <AList
                onClick={() => changeColorInsert(2)}
                className={insertColor === 2 ? "blue" : ""}
              >
                Gêneros
              </AList>
            </li>
            <li
              onClick={() => changeAnimation(3)}
              className={isActive === 3 ? "active" : ""}
            >
              <AList
                onClick={() => changeColorInsert(3)}
                className={insertColor === 3 ? "blue" : ""}
              >
                Editoras
              </AList>
            </li>
          </UlList>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque
            et mi nec neque fermentum vehicula.
          </h2>
          <Forms selectedForm={selectedForm} />
        </ContainerInsert>
      </Container>
    </>
  );
}
