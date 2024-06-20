import { useState } from "react";
import {
  AList,
  ButtonProfile,
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
    Numero: "",
    Complemento: "",
    Cidade: "",
    Estado: "",
  })

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
    navigate("/panel", {state: {optionColor: id}});
  };

  const handleContinue = () => {
    changeAnimation(2);
    changeColorInsert(2);
  }

  const handleChange = (e) => {
    setAdmin((prev) => ({...prev, [e.target.name] : e.target.value}));
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
                  <Input type="text" name="Nome" value={admin.Nome} placeholder="Digite o nome completo" onChange={handleChange}/>
                </Infos>
                <Infos>
                  <p>CPF</p>
                  <Input type="text" name="CPF" value={admin.CPF} placeholder="Digite o CPF" onChange={handleChange}/>
                </Infos>
                <Infos>
                  <p>Email</p>
                  <Input type="text" name="Email" value={admin.Email} placeholder="Digite o email" onChange={handleChange}/>
                </Infos>
                <Infos>
                  <p>Telefone</p>
                  <Input type="text" name="Telefone" value={admin.Telefone} placeholder="Digite o telefone" onChange={handleChange}/>
                </Infos>
                <Infos>
                  <p>Senha</p>
                  <Input type="password" name="Senha" value={admin.Senha} placeholder="Digite a senha" onChange={handleChange}/>
                </Infos>
                <ContainerButtonProfile>
                  {!admin.Nome ? (
                    <ButtonRegister isActive={false}>Continuar</ButtonRegister>
                  ) : (
                    <ButtonRegister onClick={handleContinue} isActive={true}>Continuar</ButtonRegister>
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
                  <Input type="text" name="CEP" value={admin.CEP} placeholder="Digite o CEP" onChange={handleChange}/>
                </Infos>
                <Infos>
                  <p>Logradouro</p>
                  <Input type="text" name="Logradouro" value={admin.Logradouro} placeholder="Digite o logradouro" onChange={handleChange}/>
                </Infos>
                <Infos>
                  <p>Número</p>
                  <Input type="text" name="Numero" value={admin.Numero} placeholder="Digite o número" onChange={handleChange}/>
                </Infos>
                <Infos>
                  <p>Complemento</p>
                  <Input type="text" name="Complemento" value={admin.Complemento} placeholder="Digite o complemento" onChange={handleChange}/>
                </Infos>
                <Infos>
                  <p>Cidade</p>
                  <Input type="text" name="Cidade" value={admin.Cidade} placeholder="Digite a cidade" onChange={handleChange}/>
                </Infos>
                <Infos>
                  <p>Estado</p>
                  <Input type="text" name="Estado" value={admin.Estado} placeholder="Digite o estado" onChange={handleChange}/>
                </Infos>
                <ContainerButtonProfile>
                  <ButtonRegister>Cadastrar</ButtonRegister>
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
              <Options onClick={() => changeOptionColor(1)} className={optionColor === 1 ? "blue" : ""}>Overview</Options>
            </LiOptions>
            <LiOptions>
              <Options onClick={() => changeOptionColor(2)} className={optionColor === 2 ? "blue" : ""}>Configurações</Options>
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
            <li
              className={isActive === 2 ? "active" : ""}
            >
              <AList
                className={insertColor === 2 ? "blue" : ""}
              >
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
