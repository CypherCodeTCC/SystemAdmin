import { useState } from "react";
import {
  AList,
  Container,
  ContainerButtonProfile,
  ContainerOptions,
  ContainerProfile,
  Fields,
  Infos,
  LiOptions,
  ListOptions,
  Profile,
  UlList,
} from "../panelSec/panelStyle";
import { ButtonRegister, Input, Options } from "./registerStyle";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(1);
  const [insertColor, setInsertColor] = useState(1);
  const [optionColor, setOptionColor] = useState(1);

  const [admin, setAdmin] = useState({
    Nome: "",
    CPF: "",
    Email: "",
    Telefone: "",
    Senha: "",
    CEP: "",
    Logradouro: "",
    NumeroEnd: "",
    Complemento: "",
    NomeCid: "",
    Uf: "",
  });

  //ALTERA A ANIMAÇÃO DAS OPÇÕES DA LISTA DO FORMULARIO
  const changeAnimation = (id) => {
    setIsActive(id === isActive ? id : id);
  };

  //ALTERA A COR DA LETRA DAS OPÇÕES DA LISTA DO FORMULARIO
  const changeColorInsert = (id) => {
    setInsertColor(id === insertColor ? id : id);
  };

  //ALTERA A COR DA LETRA DAS OPÇÕES
  const changeOptionColor = (id) => {
    setOptionColor(id === optionColor ? id : id);
    navigate("/panel", { state: { optionColor: id } });
  };

  const handleContinue = () => {
    changeAnimation(2);
    changeColorInsert(2);
  };

  const handleChange = (e) => {
    setAdmin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post("https://node-routes-mysql.vercel.app/admin", admin);
      toast.success("Funcionário cadastrado com sucesso!", {
        closeOnClick: true,
      });
      navigate("/panel");
    } catch (err) {
      toast.error(
        "Erro ao cadastrar o funcionário. Tente novamente mais tarde",
        {
          closeOnClick: true,
        }
      );
      console.log("Erro ao cadastrar o funcionário.", err);
    }
  };

  const clearCep = () => {
    setAdmin((prev) => ({
      ...prev,
      Logradouro: "",
      NomeCid: "",
      Uf: "",
    }));
  };

  const myCallback = (content) => {
    if(!("erro" in content)) {
      setAdmin((prev) => ({
        ...prev,
        Logradouro: content.logradouro,
        NomeCid: content.localidade,
        Uf: content.uf,
      }));
    }
    else{
      clearCep();
      alert("CEP não encontrado.");
    }
  }

  const searchCep = async (value) => {
    const cep =  value.replace(/\D/g, "");

    if(cep !== "") {
      const confirmCep = /^[0-9]{8}$/; 

      if(confirmCep.test(cep)){
        try{
          const res = await fetch(`https://viacep.com.br/ws/${cep}/json`);
          const data = await res.json();
          myCallback(data);
        }
        catch(err){
          clearCep();
          console.log(err);
          alert("Erro ao buscar CEP. Tente Novamente");
        }
      }
      else{
        clearCep();
        alert("Formato de CEP inválido.");
      }
    }
    else{
      clearCep();
    }
  }

  const handleBlur = (e) => {
    const cepValue = e.target.value;
    setAdmin((prev) => ({...prev, CEP: cepValue}));
    searchCep(cepValue);
  }

  const renderForm = () => {
    switch (isActive) {
      case 1:
        return (
          <>
            <Fields>
              <Profile>
                <Infos>
                  <p>Nome Completo</p>
                  <Input
                    type="text"
                    name="Nome"
                    value={admin.Nome}
                    placeholder="Digite o nome completo"
                    onChange={handleChange}
                  />
                </Infos>
                <Infos>
                  <p>CPF</p>
                  <Input
                    mask="000.000.000-00"
                    type="text"
                    name="CPF"
                    value={admin.CPF}
                    placeholder="Digite o CPF"
                    onChange={handleChange}
                  />
                </Infos>
                <Infos>
                  <p>Email</p>
                  <Input
                    type="text"
                    name="Email"
                    value={admin.Email}
                    placeholder="Digite o email"
                    onChange={handleChange}
                  />
                </Infos>
                <Infos>
                  <p>Telefone</p>
                  <Input
                    mask="(00) 90000-0000"
                    type="text"
                    name="Telefone"
                    value={admin.Telefone}
                    placeholder="Digite o telefone"
                    onChange={handleChange}
                  />
                </Infos>
                <Infos>
                  <p>Senha</p>
                  <Input
                    type="password"
                    name="Senha"
                    value={admin.Senha}
                    placeholder="Digite a senha"
                    onChange={handleChange}
                  />
                </Infos>
                <ContainerButtonProfile>
                  {!admin.Nome ? (
                    <ButtonRegister isActive={false}>Continuar</ButtonRegister>
                  ) : (
                    <ButtonRegister onClick={handleContinue} isActive={true}>
                      Continuar
                    </ButtonRegister>
                  )}
                </ContainerButtonProfile>
              </Profile>
            </Fields>
          </>
        );
      case 2:
        return (
          <>
            <Fields>
              <Profile>
                <Infos>
                  <p>CEP</p>
                  <Input
                    mask="00000-000"
                    type="text"
                    name="CEP"
                    value={admin.CEP}
                    placeholder="Digite o CEP"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Infos>
                <Infos>
                  <p>Logradouro</p>
                  <Input
                    type="text"
                    name="Logradouro"
                    value={admin.Logradouro}
                    readOnly
                  />
                </Infos>
                <Infos>
                  <p>Número</p>
                  <Input
                    type="text"
                    name="NumeroEnd"
                    value={admin.NumeroEnd}
                    placeholder="Digite o número"
                    onChange={handleChange}
                    maxLength="5"
                  />
                </Infos>
                <Infos>
                  <p>Complemento</p>
                  <Input
                    type="text"
                    name="Complemento"
                    value={admin.Complemento}
                    placeholder="Digite o complemento"
                    onChange={handleChange}
                    maxLength="10"
                  />
                </Infos>
                <Infos>
                  <p>Cidade</p>
                  <Input
                    type="text"
                    name="NomeCid"
                    value={admin.NomeCid}
                    readOnly
                  />
                </Infos>
                <Infos>
                  <p>Estado</p>
                  <Input
                    type="text"
                    name="Uf"
                    value={admin.Uf}
                    readOnly
                  />
                </Infos>
                <ContainerButtonProfile>
                  <ButtonRegister onClick={handleSubmit} isActive={true}>
                    Cadastrar
                  </ButtonRegister>
                </ContainerButtonProfile>
              </Profile>
            </Fields>
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
                Dados
              </AList>
            </li>
            <li className={isActive === 2 ? "active" : ""}>
              <AList className={insertColor === 2 ? "blue" : ""}>
                Endereço
              </AList>
            </li>
          </UlList>
          {renderForm()}
        </ContainerProfile>
      </Container>
    </>
  );
}
