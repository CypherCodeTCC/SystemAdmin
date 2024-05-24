import styled from "styled-components";

export const Container = styled.section`
  @import url("https://fonts.googleapis.com/css?family=inter:100,200,300,400,500,600,700,800,900&display=swap");

  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  font-family: "Inter", Arial, Helvetica, sans-serif;

  .blue {
    color: blue;
  }

  img {
    width: 32px;
    height: 35px;
  }

  h2 {
    padding-top: 20px;
  }
`;

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;

  @media (min-width: 802px) and (max-width: 1150px) {
    display: none;
  }

  @media (max-width: 801px) {
    display: none;
  }
`;

export const ListOptions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const LiOptions = styled.li`
  list-style-type: none;
`

export const AOptions = styled.a`
    color: #b1b1b1;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
`

export const Containerinfos = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  height: max-content;
  width: 60%;

  @media (min-width: 802px) and (max-width: 1150px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 801px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ContainerConfig = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 802px) and (max-width: 1150px) {
    display: none;
  }

  @media (max-width: 801px) {
    display: none;
  }
`;

export const Item = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const Border = styled.div`
  background-color: #e7edff;
  border-radius: 20px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 802px) and (max-width: 1150px) {
    display: none;
  }

  @media (max-width: 801px) {
    display: none;
  }
`;

export const UlList = styled.ul`
  width: 100%;
  display: flex;
  gap: 100px;

  li {
    position: relative;
    list-style-type: none;
  }

  li::before,
  li::after {
    content: "";
    position: absolute;
    width: 80%;
    height: 2.8px;
    bottom: calc(-1.2rem);
    background-color: blue;
  }

  li::before,
  li.active::before {
    transition: 0.5s;
    transform: scaleX(0);
    transform-origin: left center;
  }

  li::after,
  li.active::after {
    transform: scaleX(0);
  }

  li.active::before,
  li.active::after {
    transform: scaleX(1.2);
  }

  @media (max-width: 801px) {
    gap: 70px;
  }
`;

export const AList = styled.a`
  color: #718ebf;
  cursor: pointer;
`

export const ContainerInsert = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 100px;
  width: 50%;
  margin: auto;

  .blue {
    color: blue;
    cursor: pointer;
  }

  @media (min-width: 802px) and (max-width: 1150px) {
    width: 80%;
  }

  @media (max-width: 801px) {
    width: 80%;
  }
`;

export const Card = styled.div`
  width: 45%;

  @media (min-width: 802px) and (max-width: 1150px) {
    width: 100%;
  }

  @media (max-width: 801px) {
    width: 100%;
  }
`;

export const CardPublishing = styled.div`
  width: 100%;
`

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
  cursor: pointer;
`;
