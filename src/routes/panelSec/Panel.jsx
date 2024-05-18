import { useState } from "react";
import LogoutPng from "../../../public/logout.png";
import TrashPng from "../../../public/trash.png";
import {
  AList,
  AOptions,
  Border,
  Button,
  Card,
  Container,
  ContainerConfig,
  ContainerInsert,
  ContainerOptions,
  Containerinfos,
  Input,
  Item,
  LiOptions,
  ListOptions,
  UlList,
} from "./panelStyle";

export default function Panel() {
  const [optionColor, setOptionColor] = useState(null);
  const [insertColor, setInsertColor] = useState(null);
  const [isActive, setIsActive] = useState(null);

  const changeOptionColor = (id) => {
    setOptionColor(id === optionColor ? null : id);
  };

  const changeAnimation = (id) => {
    setIsActive(id === isActive ? null : id);
  };

  const changeColorInsert = (id) => {
    setInsertColor(id === insertColor ? id : id);
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
          <Item>
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

          <Card>
            <h3>Nome do autor</h3>
            <Input type="text" placeholder="Apenas letras" />
          </Card>
          <Card>
            <h3>Descrição</h3>
            <Input type="text" placeholder="Apenas letras" />
          </Card>
          <Card>
            <h3>Título do livro</h3>
            <Input type="text" placeholder="Apenas letras" />
          </Card>
          <Card>
            <h3>Editora</h3>
            <Input type="text" placeholder="Apenas letras" />
          </Card>
          <Button>Adicionar</Button>
        </ContainerInsert>
      </Container>
    </>
  );
}
