import { Container } from "./loginStyle";


export default function Login() {
    return(
        <>
            <Container>         
                <div className='container-form'>
                    <h3>Seja Bem-Vindo</h3>
                    <p>Faça login como colaborador</p>       
                    <h4>E-mail</h4>
                    <input type="text" placeholder='Ex: meuemail@endereco.com'/>
                    <h4>Senha</h4>
                    <input type="password" placeholder='Insira sua palavra-passe' />
                    <button className='btn-login'>Login</button>
                </div>
            </Container>
        </>
    )
}