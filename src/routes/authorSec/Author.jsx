import { useNavigate } from "react-router-dom";
import { ButtonDelete, Container } from "../bookSec/bookStyle";
import {
  ButtonTable,
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
import { toast } from "react-toastify";

export default function Author() {
  const navigate = useNavigate();
  const [optionColor, setOptionColor] = useState(1);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(
          "https://node-routes-mysql.vercel.app/author"
        );
        setAuthors(response.data);
      } catch (err) {
        console.log("Erro ao encontrar as editoras.", err);
      }
    };
    fetchAuthor();
  }, []);

  //ALTERA A COR DA LETRA DAS OPÇÕES
  const changeOptionColor = (id) => {
    setOptionColor(id === optionColor ? id : id);
    navigate("/panel", { state: { optionColor: id } });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`Deseja excluir o autor?`);

    if (confirmDelete) {
      try {
        axios.delete(`https://node-routes-mysql.vercel.app/author/${id}`);
        toast.info("Autor deletado com sucesso.", {
          closeOnClick: true,
        });
        window.location.reload();
      } catch (err) {
        console.log("Erro ao deletar o autor.", err);
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
            <Th>Nome</Th>
            <Th>Modificar</Th>
            <Th>Apagar</Th>
          </thead>
          <tbody>
            {authors.map((author) => (
              <Tr className="publishingcompany" key={author.id}>
                <Td>{author.id}</Td>
                <Td>{author.name}</Td>
                <Td>
                  <ButtonTable>Modificar</ButtonTable>
                </Td>
                <Td>
                  <ButtonDelete onClick={() => handleDelete(author.id)}>
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
