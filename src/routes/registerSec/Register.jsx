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
import { Input, Options } from "./registerStyle";

export default function Register() {
  const [isActive, setIsActive] = useState(1);
  const [insertColor, setInsertColor] = useState(1);

  //ALTERA A ANIMAÇÃO DAS OPÇÕES DA LISTA DO FORMULARIO
  const changeAnimation = (id) => {
    setIsActive(id === isActive ? id : id);
  };

  //ALTERA A COR DA LETRA DAS OPÇÕES DA LISTA DO FORMULARIO
  const changeColorInsert = (id) => {
    setInsertColor(id === insertColor ? id : id);
  };

  const renderForm = () => {
    switch (isActive) {
      case 1:
        return (
          <>
            <Fields>
              <Profile>
                <Infos>
                  <p>Nome Completo</p>
                  <Input type="text" placeholder="Digite o nome completo" />
                </Infos>
                <Infos>
                  <p>CPF</p>
                  <Input type="text" placeholder="Digite o CPF" />
                </Infos>
                <Infos>
                  <p>Email</p>
                  <Input type="text" placeholder="Digite o email" />
                </Infos>
                <Infos>
                  <p>Telefone</p>
                  <Input type="text" placeholder="Digite o telefone" />
                </Infos>
                <Infos>
                  <p>Senha</p>
                  <Input type="password" placeholder="Digite a senha" />
                </Infos>
                <ContainerButtonProfile>
                  <ButtonProfile>Continuar</ButtonProfile>
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
                  <Input type="text" placeholder="Digite o CEP" />
                </Infos>
                <Infos>
                  <p>Logradouro</p>
                  <Input type="text" placeholder="Digite o logradouro" />
                </Infos>
                <Infos>
                  <p>Número</p>
                  <Input type="text" placeholder="Digite o número" />
                </Infos>
                <Infos>
                  <p>Complemento</p>
                  <Input type="text" placeholder="Digite o complemento" />
                </Infos>
                <Infos>
                  <p>Cidade</p>
                  <Input type="text" placeholder="Digite a cidade" />
                </Infos>
                <Infos>
                  <p>Estado</p>
                  <Input type="text" placeholder="Digite o estado" />
                </Infos>
                <ContainerButtonProfile>
                  <ButtonProfile>Cadastrar</ButtonProfile>
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
              <Options isActive={true}>Overview</Options>
            </LiOptions>
            <LiOptions>
              <Options isActive={false}>Configurações</Options>
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
              onClick={() => changeAnimation(2)}
              className={isActive === 2 ? "active" : ""}
            >
              <AList
                onClick={() => changeColorInsert(2)}
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
