import styled from "styled-components";

export const Container = styled.section`
  @import url("https://fonts.googleapis.com/css?family=inter:100,200,300,400,500,600,700,800,900&display=swap");

  padding: 30px;
  display: flex;
  gap: 240px;
  min-height: 80vh;

  font-family: "Inter", Arial, Helvetica, sans-serif;

  .blue {
    color: blue;
  }
`;

export const ButtonDelete = styled.button`
  width: 100px;
  height: 35px;
  border: 1px solid salmon;
  border-radius: 50px;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: red;
  cursor: pointer;

  &&:hover {
    background-color: red;
    color: white;
    transition: 0.5s;
    border: 1px solid black;
  }
`;
