import { useState, useEffect } from "react";
import {
  Button,
  Container,
  ContainerForm,
  Input,
  SubTitle,
} from "./loginStyle";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
export default function Login({ setIsUserLogged }) {
  const navigate = useNavigate();

  /* CASO O ADMIN JÁ TENHA LOGADO, ELE NÃO CONSEGUE VOLTAR PARA A TELA DE LOGIN. */
  useEffect(() => {
    const checkUser = () => {
      const admin = localStorage.getItem("admin");
      if (admin) {
        setTimeout(() => {
          navigate("/panel");
        }, 0);
      }
    };
    checkUser();
  }, [navigate]);

  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false);

  const handleChanged = (e) => {
    setAdmin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://node-routes-mysql.vercel.app/admin/login",
        admin
      );
      if (res.data.message == "Login Successful") {
        localStorage.setItem("admin", JSON.stringify(res.data.user.Id));
        navigate("/panel");
        setIsUserLogged(true);
        toast.success("Login efetuado com sucesso.", {
          closeOnClick: true,
        });
      } else {
        setLoginError(true);
        toast.error("Email ou senha inválidos.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      console.log("Erro ao logar o administrador.", err);
    }
  };

  return (
    <>
      <Container>
        <ContainerForm>
          <h3>Seja Bem-Vindo</h3>
          <SubTitle>Faça login como colaborador</SubTitle>
          <h4>E-mail</h4>
          <Input
            type="text"
            name="email"
            placeholder="Ex: meuemail@endereco.com"
            onChange={handleChanged}
            hasError={loginError}
          />
          <h4>Senha</h4>
          <Input
            type="password"
            name="password"
            placeholder="Insira sua palavra-passe"
            onChange={handleChanged}
            hasError={loginError}
          />
          <Button onClick={handleSubmit}>Login</Button>
        </ContainerForm>
      </Container>
    </>
  );
}
