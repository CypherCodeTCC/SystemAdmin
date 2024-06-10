import { useNavigate } from "react-router-dom";
import { Container, Title, Subtitle, HomeButton } from "./errorStyle";

export default function Error() {
  const navigate = useNavigate();

  /* 
       SE O ADMIN CAIR NA TELA DE ERRO E JÁ ESTIVER COM USUARIO NO LOCALSTORAGE, ELE É REDIRECIONADO PARA O PAINEL.
       SE NÃO, ELE É REDIRECIONADO PARA FAZER O LOGIN.
    */
  function checkUser() {
    const admin = localStorage.getItem("admin");
    if (admin) navigate("/panel");
    else navigate("/");
  }

  return (
    <>
      <Container>
        <Title>404</Title>
        <Subtitle>Página não encontrada</Subtitle>
        <HomeButton onClick={checkUser}>
          Ir para a pagina principal
        </HomeButton>
      </Container>
    </>
  );
}
