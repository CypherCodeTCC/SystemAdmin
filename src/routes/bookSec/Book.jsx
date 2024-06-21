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
import { toast } from "react-toastify";

export default function Book() {
  const navigate = useNavigate();
  const [optionColor, setOptionColor] = useState(1);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("https://node-routes-mysql.vercel.app/book");
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

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Deseja excluir o livro?");

    if (confirmDelete) {
      try {
        await axios.delete(`https://node-routes-mysql.vercel.app/book/${id}`);
        toast.info("Livro excluido com sucesso.", {
          closeOnClick: true,
        });
        window.location.reload();
      } catch (err) {
        toast.error("Erro ao excluir o livro. Tente novamente mais tarde.", {
          closeOnClick: true,
        });
        console.log("Erro ao excluir o livro.", err);
      }
    } 
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
            <Th>Gênero</Th>
            <Th>Preço</Th>
            <Th>Avaliação</Th>
            <Th>Apagar</Th>
          </thead>
          <tbody>
            {books.map((book) => (
              <Tr className="books" key={book.id}>
                <Td>{book.id}</Td>
                <Td>{book.name}</Td>
                <Td>{book.publishing_company.name}</Td>
                <Td>{book.genre.name}</Td>
                <Td>R${book.price.toFixed(2)}</Td>
                <Td>5.0</Td>
                <Td>
                  <ButtonDelete onClick={() => handleDelete(book.Id)}>
                    Apagar
                  </ButtonDelete>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Containerinfos>
      </Container>
    </>
  );
}
