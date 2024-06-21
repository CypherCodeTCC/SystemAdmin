import styled from "styled-components";

export const ContainerUpdate = styled.div`

    min-height: 40vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    width: 50%;

    @media (max-width: 1024px){
        width: 100%;
    }
`;

export const InputPublishing = styled.input`
    border: 1px solid;
    border-radius: 15px;
    padding: 10px;
    font-size: 15px;
    font-weight: 500;
    font-family: "Inter", Arial, Helvetica, sans-serif;
`;

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;

  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`;

export const ButtonCancelar = styled.button`
    background-color: transparent;
    font-size: 18px;
    font-weight: 500;
    font-family: "Inter", Arial, Helvetica, sans-serif;
    cursor: pointer;
    color: gray;
    border: none;
`;

export const ButtonUpdate = styled.button`
    background-color: #1814f3;
    width: 30%;
    padding: 10px;
    border-radius: 15px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    font-family: "Inter", Arial, Helvetica, sans-serif;
    cursor: pointer;
    
    @media (max-width: 767px){
        width: 50%;
    }
`;

