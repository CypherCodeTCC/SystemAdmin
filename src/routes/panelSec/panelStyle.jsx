import styled from "styled-components";

export const Container = styled.section`
  @import url("https://fonts.googleapis.com/css?family=inter:100,200,300,400,500,600,700,800,900&display=swap");

  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;

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

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 767px) {
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
`;

export const AOptions = styled.a`
  color: #b1b1b1;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

export const ContainerScroll = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  overflow-x: auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Containerinfos = styled.table`
  width: 100%;
  height: max-content;
  margin-top: 20px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Td = styled.td`
  padding: 12px;
`;

export const Th = styled.th`
  color: #718ebf;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 16px;
`;

export const Tr = styled.tr`
  color: #232323;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 16px;
  text-align: center;
`;

export const ButtonTable = styled.button`
  width: 100px;
  height: 35px;
  border: 1px solid #1814f3;
  border-radius: 50px;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #1814f3;
  cursor: pointer;

  &&:hover {
    background-color: #1814f3;
    color: white;
    transition: 0.5s;
    border: 1px solid black;
  }
`;

export const ContainerConfig = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Item = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
`;

export const Border = styled.div`
  background-color: #e7edff;
  border-radius: 20px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 767px) {
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
`;

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

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 801px) {
    width: 80%;
  }
`;

export const Card = styled.div`
  width: 45%;
  flex-grow: 1;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 801px) {
    width: 100%;
  }
`;

export const CardPublishing = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 15px;
  padding: 10px;
`;

export const Button = styled.button`
  width: 100%;
  font-size: 18px;
  background-color: #1814f3;
  color: white;
  padding: 10px;
  border-radius: 9px;
  height: 50px;
  cursor: pointer;
`;

export const ContainerProfile = styled.section`
  width: 80%;
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 1024px) {
    padding: 10px;
    width: 100%;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ContainerPng = styled.div`
  display: flex;

  img {
    width: 108px;
    height: 105px;
  }
  .edit {
    margin-top: 80px;
    width: 39.19px;
    height: 38.16px;
  }
`;

export const Profile = styled.div`
  padding-top: 30px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  min-height: 50vh;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Infos = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ContainerButtonProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`;

export const InputProfile = styled.input`
  border: 1px solid #dfeaf2;
  height: 63.6px;
  font-weight: 400;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  font-size: 15px;
  padding: 12px;
  border-radius: 15px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ButtonProfile = styled.button`
  background-color: #1814f3;
  border-radius: 15px;
  width: 248.2px;
  height: 63.6px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 96px;
    height: 28px;
    font-size: 14px;
  }
`;
