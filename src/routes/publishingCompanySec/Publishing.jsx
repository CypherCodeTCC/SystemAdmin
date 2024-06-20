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

export default function Publishing() {
  const navigate = useNavigate();
  const [optionColor, setOptionColor] = useState(1);
  const [publishingCompanies, setPublishingCompanies] = useState([]);

  useEffect(() => {
    const fetchPublishing = async () => {
      try {
        const response = await axios.get(
          "https://node-routes-mysql.vercel.app/publishingcompany"
        );
        setPublishingCompanies(response.data);
      } catch (err) {
        console.log("Erro ao encontrar as editoras.", err);
      }
    };
    fetchPublishing();
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
            <Th>Nome da Editora</Th>
            <Th>Modificar</Th>
            <Th>Apagar</Th>
          </thead>
          <tbody>
            {publishingCompanies.map((publishingCompany) => (
              <Tr className="publishingcompany" key={publishingCompany.Id}>
                <Td>{publishingCompany.id}</Td>
                <Td>{publishingCompany.name}</Td>
                <Td>
                  <ButtonTable>Modificar</ButtonTable>
                </Td>
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
