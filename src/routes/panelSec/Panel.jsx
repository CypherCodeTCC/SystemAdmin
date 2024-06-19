import { useEffect, useState } from "react";
import LogoutPng from "../../../public/logout.png";
import TrashPng from "../../../public/trash.png";
import UserPng from "../../../public/userProfile.png";
import EditPng from "../../../public/edit.png";
import {
  AList,
  AOptions,
  Border,
  ButtonProfile,
  ButtonTable,
  Container,
  ContainerButtonProfile,
  ContainerConfig,
  ContainerInsert,
  ContainerOptions,
  ContainerPng,
  ContainerProfile,
  Containerinfos,
  Fields,
  Infos,
  InputProfile,
  Item,
  LiOptions,
  ListOptions,
  Profile,
  Td,
  Th,
  Tr,
  UlList,
} from "./panelStyle";
import Forms from "./Forms";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import useWindowWidth from "../../hooks/useWindowWidth";

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

  const width = useWindowWidth();
  const [books, setBooks] = useState([]);
  const [optionColor, setOptionColor] = useState(1);
  const [insertColor, setInsertColor] = useState(1);
  const [isActive, setIsActive] = useState(1);
  const [selectedForm, setSelectedForm] = useState(1);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/book/admin/books"
        );
        setBooks(response.data);
      } catch (err) {
        console.log("Erro ao trazer os livros.", err);
      }
    };
    fetchBooks();
  }, []);

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

  const renderForm = () => {
    switch (optionColor) {
      case 1:
        return (
          <>
            <Containerinfos>
              <thead>
                <tr>
                  <Th>Id</Th>
                  <Th>Preço</Th>
                  <Th>Editora</Th>
                  <Th>Autor</Th>
                  <Th>Gênero</Th>
                  <Th>Avaliação</Th>
                  <Th>Modificar</Th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <Tr className="books" key={book.Id}>
                    <Td>{book.Id}</Td>
                    <Td>R${book.Preco}</Td>
                    <Td>{book.Editora}</Td>
                    <Td>{book.Autor}</Td>
                    <Td>{book.Genero}</Td>
                    <Td>5.0</Td>
                    <Td>
                      <ButtonTable>Modificar</ButtonTable>
                    </Td>
                  </Tr>
                ))}
              </tbody>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                Pellentesque et mi nec neque fermentum vehicula.
              </h2>
              <Forms selectedForm={selectedForm} />
            </ContainerInsert>
          </>
        );
      case 2:
        return (
          <>
            <ContainerProfile>
              <UlList>
                <li
                  onClick={() => changeAnimation(1)}
                  className={isActive === 1 ? "active" : ""}
                >
                  <AList
                    onClick={() => changeColorInsert(1)}
                    className={insertColor === 1 ? "blue" : ""}
                  >
                    Perfil
                  </AList>
                </li>
              </UlList>
              <Fields>
                <ContainerPng>
                  <img src={UserPng} alt="" />
                  <img src={EditPng} alt="" className="edit" />
                </ContainerPng>
                <Profile>
                  <Infos>
                    <p>Primeiro Nome:</p>
                    <InputProfile type="text" placeholder="Juan" />
                  </Infos>
                  <Infos>
                    <p>Sobrenome</p>
                    <InputProfile type="text" name="" placeholder="Pablo" />
                  </Infos>
                  <Infos>
                    <p>Email</p>
                    <InputProfile
                      type="text"
                      name=""
                      placeholder="juan@feitosa.com"
                    />
                  </Infos>
                  <Infos>
                    <p>Senha</p>
                    <InputProfile type="password" />
                  </Infos>
                </Profile>
              </Fields>
              <ContainerButtonProfile>
                {width < 768 ? (
                  <ButtonProfile>Salvar</ButtonProfile>
                ) : (
                  <ButtonProfile>Salvar Alterações</ButtonProfile>
                )}
              </ContainerButtonProfile>
            </ContainerProfile>
          </>
        );
    }
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
        {renderForm()}
      </Container>
    </>
  );
}
