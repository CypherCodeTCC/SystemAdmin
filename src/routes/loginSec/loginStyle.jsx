import styled from "styled-components";

export const Container = styled.section`
    min-height: 90vh;
    padding: 30px;
    gap: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;

    background-image: url("../../../public/library.png");
    background-repeat: no-repeat;
    background-size: cover;

    .container-form{
        display: flex;
        width: 30%;
        flex-direction: column;
        gap: 20px;
        
        input{
            border-radius: 8px;
            border: 1px solid;
            padding: 10px;
        }

        p{
            padding-bottom: 20px;
        }

        .btn-login{
            background-color: #6236F5;
            color: white;
            padding: 10px;
            border-radius: 8px;
        }
}

@media (max-width: 801px){
    .container-form{
        width: 60%;
    }
}
`;