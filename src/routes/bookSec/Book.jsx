import { useNavigate } from "react-router-dom";
import {
  ContainerOptions,
  Containerinfos,
  LiOptions,
  ListOptions,
  Td,
  Th,
  Tr,
} from "../panelSec/panelStyle";
import { Options } from "../registerSec/registerStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { ButtonDelete, Container } from "./bookStyle";

export default function Book() {
  const navigate = useNavigate();
  const [optionColor, setOptionColor] = useState(1);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8081/book/admin/books");
        setBooks(res.data);
      } catch (err) {
        console.log("Erro ao encontrar os livros", err);
      }
    };
    fetchBooks();
  }, []);

  //ALTERA A COR DA LETRA DAS OPÇÕES
  const changeOptionColor = (id) => {
    setOptionColor(id === optionColor ? id : id);
    navigate("/panel", { state: { optionColor: id } });
  };

  return (
    <>
      <Container>
        <ContainerOptions>
          <ListOptions>
            <LiOptions>
              <Options
                onClick={() => changeOptionColor(1)}
                className={optionColor === 1 ? "blue" : ""}
              >
                Overview
              </Options>
            </LiOptions>
            <LiOptions>
              <Options
                onClick={() => changeOptionColor(2)}
                className={optionColor === 2 ? "blue" : ""}
              >
                Configurações
              </Options>
            </LiOptions>
          </ListOptions>
        </ContainerOptions>
        <Containerinfos>
          <thead>
            <Th>Id</Th>
            <Th>Título</Th>
            <Th>Editora</Th>
            <Th>Autor</Th>
            <Th>Gênero</Th>
            <Th>Avaliação</Th>
            <Th>Apagar</Th>
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
                  <ButtonDelete>Apagar</ButtonDelete>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Containerinfos>
      </Container>
    </>
  );
}
