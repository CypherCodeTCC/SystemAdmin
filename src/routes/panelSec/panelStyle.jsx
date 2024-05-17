import styled from "styled-components";

export const Container = styled.section`
  @import url("https://fonts.googleapis.com/css?family=inter:100,200,300,400,500,600,700,800,900&display=swap");

  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  font-family: "Inter", Arial, Helvetica, sans-serif;

  .container-options {
    display: flex;
    flex-direction: column;
    height: max-content;

    .list-options {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }

  li {
    list-style-type: none;
  }

  a {
    color: #b1b1b1;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
  }

  .container-infos {
    display: flex;
    justify-content: center;
    gap: 30px;
    height: max-content;
    width: 60%;
  }

  .container-config {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .border {
      background-color: #e7edff;
      border-radius: 20px;
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .item{
        display: flex;
        gap: 20px;
        align-items: center;
    }

    img {
      width: 32px;
      height: 35px;
    }
  }

  .container-texts {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .container-insert {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 100px;
    width: 50%;
    margin: auto;

    .list {
      width: 100%;
      display: flex;
      gap: 100px;

      a {
        color: #718ebf;
      }
    }

    .card {
      width: 45%;
    }
  }

  @media (min-width: 802px) and (max-width: 1150px){
    .container-config, .border, .container-texts, .container-options{
        display: none;
    }

    .container-infos {
        width: 100%;
        justify-content: center;
    }

    .container-insert{
        width: 80%;
    }
  }

  @media (max-width: 801px){
    .container-config, .border, .container-texts, .container-options{
        display: none;
    }

    .container-infos {
        width: 100%;
        justify-content: center;
    }

    .container-insert{
        width: 80%;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 15px;
  padding: 10px;
`;

export const Button = styled.button`
  font-size: 18px;
  background-color: #1814f3;
  color: white;
  padding: 10px;
  border-radius: 9px;
  width: 160px;
  height: 50px;
`;
