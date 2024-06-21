import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ContainerOptions,
  LiOptions,
  ListOptions,
} from "../panelSec/panelStyle";
import { Options } from "../registerSec/registerStyle";
import { ButtonCancelar, ButtonUpdate, ContainerButton, ContainerUpdate, InputPublishing } from "./updatePublishingStyle";
import { Container } from "../bookSec/bookStyle";
import { toast } from "react-toastify";

export default function UpdatePublishing() {
  const [optionColor, setOptionColor] = useState(1);
  const [publishingCompany, setPublishingCompany] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
  })

  useEffect(() => {
    const fetchPublishing = async () => {
      try {
        const res = await axios.get(
          `https://node-routes-mysql.vercel.app/publishingcompany/${id}`
        );
        setPublishingCompany(res.data);
        setData(res.data);
      } catch (err) {
        console.log("Erro ao encontrar a editora.");
      }
    };
    fetchPublishing();
  }, [id]);

  //ALTERA A COR DA LETRA DAS OPÇÕES
  const changeOptionColor = (id) => {
    setOptionColor(id === optionColor ? id : id);
    navigate("/panel", { state: { optionColor: id } });
  };

  const handleChanged = (e) => {
    setData((prev) => ({...prev, [e.target.name] : e.target.value}))
  }

  const handleUpdate = async () => {
    try{
      await axios.put(`https://node-routes-mysql.vercel.app/publishingcompany/${id}`, data);
      toast.success("Editora atualizada com sucesso!", {
        closeOnClick: true,
      });
      navigate('/publishingcompany');
    }
    catch(err){
      toast.error("Erro ao atualizar a editora. Tente novamente mais tarde.", {
        closeOnClick: true,
      });
      console.log("Erro ao atualizar a editora.", err);
    }
  }

  console.log(data);

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
        <ContainerUpdate>
            <h1>Atualize a editora</h1>
            <InputPublishing type="text" name="name" value={data.name} onChange={handleChanged}/>
            <ContainerButton>
                <ButtonCancelar onClick={() => navigate('/panel')}>Cancelar</ButtonCancelar>
                <ButtonUpdate onClick={handleUpdate}>Salvar</ButtonUpdate>
            </ContainerButton>
        </ContainerUpdate>
      </Container>
    </>
  );
}
