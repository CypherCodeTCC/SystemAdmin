import { useEffect, useState } from "react";
import LogoutPng from "../../../public/logout.png";
import TrashPng from "../../../public/trash.png";
import UserPng from "../../../public/userProfile.png";
import EditPng from "../../../public/edit.png";
import PlusPng from "../../../public/plus.png";
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
  ContainerScroll,
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
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import useWindowWidth from "../../hooks/useWindowWidth";

export default function Panel() {
  const navigate = useNavigate();
  const location = useLocation();

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
  const [optionColor, setOptionColor] = useState(
    location.state?.optionColor || 1
  );
  const [insertColor, setInsertColor] = useState(1);
  const [isActive, setIsActive] = useState(1);
  const [selectedForm, setSelectedForm] = useState(1);

  const [admin, setAdmin] = useState({
    Nome: "",
    Email: "",
    Telefone: "",
  });

  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://node-routes-mysql.vercel.app/book/admin/books"
        );
        setBooks(response.data.slice(0, 8));
      } catch (err) {
        console.log("Erro ao trazer os livros.", err);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `https://node-routes-mysql.vercel.app/admin/${localStorage.getItem(
            "admin"
          )}`
        );
        setAdmin(res.data);
      } catch (err) {
        console.log("Erro ao trazer os dados do usuário.", err);
      }
    };
    fetchUser();
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

  const handleChange = (e) => {
    setAdmin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const updatedData = { ...admin };

    if (password) {
      if (password.length < 3) {
        toast.error("A senha deve ter no minimo 3 caractéres.", {
          closeOnClick: true,
        });
        return;
      }

      updatedData.password = password;
    }

    try {
      await axios.put(
        `https://node-routes-mysql.vercel.app/admin/${localStorage.getItem(
          "admin"
        )}`,
        updatedData
      );
      toast.success("Dados atualizados com sucesso!", {
        closeOnClick: true,
      });
    } catch (err) {
      toast.error("Erro ao atualizar os dados. Tente novamente mais tarde.", {
        closeOnClick: true,
      });
      console.log("Erro ao atualizar os dados.", err);
    }
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
            <ContainerScroll>
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
            </ContainerScroll>
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
              <Item onClick={() => navigate("/register")}>
                <Border>
                  <img src={PlusPng} alt="Adicionar funcionário" />
                </Border>
                <div>
                  <h3>Cadastre colaboradores</h3>
                  <p>Inclua novos funcionários</p>
                </div>
              </Item>
              <Item onClick={() => navigate("/author")}>
                <Border>
                  <img src={TrashPng} alt="Excluir" />
                </Border>
                <div>
                  <h3>Excluir autores</h3>
                  <p>Exclua autores de livros</p>
                </div>
              </Item>
              <Item onClick={() => navigate("/publishingcompany")}>
                <Border>
                  <img src={TrashPng} alt="Excluir" />
                </Border>
                <div>
                  <h3>Excluir editoras</h3>
                  <p>Exclua editoras de livros</p>
                </div>
              </Item>
              <Item onClick={() => navigate("/books")}>
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
                    <p>Nome Completo:</p>
                    <InputProfile
                      type="text"
                      placeholder="Juan"
                      name="Nome"
                      value={admin.Nome}
                      onChange={handleChange}
                    />
                  </Infos>
                  <Infos>
                    <p>Email</p>
                    <InputProfile
                      type="text"
                      name="Email"
                      value={admin.Email}
                      placeholder="juan@feitosa.com"
                      onChange={handleChange}
                    />
                  </Infos>
                  <Infos>
                    <p>Telefone</p>
                    <InputProfile
                      mask="(00) 90000-0000"
                      type="text"
                      name="Telefone"
                      value={admin.Telefone}
                      placeholder="999999999"
                      onChange={handleChange}
                    />
                  </Infos>
                  <Infos>
                    <p>Senha</p>
                    <InputProfile
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Infos>
                </Profile>
              </Fields>
              <ContainerButtonProfile>
                {width < 768 ? (
                  <ButtonProfile onClick={handleSubmit}>Salvar</ButtonProfile>
                ) : (
                  <ButtonProfile onClick={handleSubmit}>
                    Salvar Alterações
                  </ButtonProfile>
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
