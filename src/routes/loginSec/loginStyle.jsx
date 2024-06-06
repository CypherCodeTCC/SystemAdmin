import styled from "styled-components";

export const Container = styled.section`
  min-height: 89vh;
  padding: 30px;
  gap: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ContainerForm = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 767px) {
    width: 60%;
  }
`;

export const SubTitle = styled.p`
  padding-bottom: 20px;
`;

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid ${(props) => (props.hasError ? "red" : "black")};
  padding: 10px;
`;

export const Button = styled.button`
  background-color: #6236f5;
  color: white;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
`;
