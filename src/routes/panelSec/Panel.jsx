import LogoutPng from "../../../public/logout.png";
import TrashPng from "../../../public/trash.png";
import { Button, Container, Input} from "./panelStyle";

export default function Panel() {
  return (
    <>
      <Container>
        <div className="container-options">
          <ul className="list-options">
            <li className="overview">
              <a href="/testeambiente">Overview</a>
            </li>
            <li className="settings">
              <a href="/testeambiente">Configurações</a>
            </li>
          </ul>
        </div>
        <div className="container-infos">
          <p>Id</p>
          <p>Preço</p>
          <p>Editora</p>
          <p>Autor</p>
          <p>Gênero</p>
          <p>Avaliação</p>
          <p>Modificar</p>
        </div>
        <div className="container-config">
          <div className="item">
            <div className="border">
              <img src={LogoutPng} alt="Sair da Conta" />
            </div>
            <div className="text">
              <h3>Log out</h3>
              <p>Saia da sua conta</p>
            </div>
          </div>
          <div className="item">
            <div className="border">
              <img src={TrashPng} alt="Excluir" />
            </div>
            <div>
              <h3>Excluir gêneros</h3>
              <p>Exclua gêneros de livros</p>
            </div>
          </div>
          <div className="item">
            <div className="border">
              <img src={TrashPng} alt="Excluir" />
            </div>
            <div>
              <h3>Excluir autores</h3>
              <p>Exclua autores de livros</p>
            </div>
          </div>
          <div className="item">
            <div className="border">
              <img src={TrashPng} alt="Excluir" />
            </div>
            <div>
              <h3>Excluir editoras</h3>
              <p>Exclua editoras de livros</p>
            </div>
          </div>
          <div className="item">
            <div className="border">
              <img src={TrashPng} alt="Excluir" />
            </div>
            <div>
              <h3>Excluir livros</h3>
              <p>Exclua todo um livro</p>
            </div>
          </div>
        </div>
        <div className="container-insert">
          <h1>Adicionar</h1>
          <ul className="list">
            <li>
              <a href="/testeambiente">Livros</a>
            </li>
            <li>
              <a href="/testeambiente">Gêneros</a>
            </li>
            <li>
              <a href="/testeambiente">Editoras</a>
            </li>
          </ul>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque
            et mi nec neque fermentum vehicula.
          </h2>

          <div className="card">
            <h3>Nome do autor</h3>
            <Input type="text" placeholder="Apenas letras" />
          </div>
          <div className="card">
            <h3>Descrição</h3>
            <Input type="text" placeholder="Apenas letras" />
          </div>
          <div className="card">
            <h3>Título do livro</h3>
            <Input type="text" placeholder="Apenas letras" />
          </div>
          <div className="card">
            <h3>Editora</h3>
            <Input type="text" placeholder="Apenas letras" />
          </div>
          <Button>Adicionar</Button>
        </div>
      </Container>
    </>
  );
}
