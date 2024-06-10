import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
  font-family: "Poppins", sans-serif;
`;

export const animate = keyframes`
  0% { transform: translateY(-20px); }
  50% { transform: translateY(10px); }
  100% { transform: translateY(-20px); }
`;

export const Title = styled.h1`
  color: #020233;
  font-size: 5em;
  animation: ${animate} 1.5s ease-in-out infinite;
`;

export const Subtitle = styled.h2`
  color: #020233;
  margin: 20px 0;
`;

export const HomeButton = styled.button`
  padding: 10px 40px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  border: 1px solid #333;
  border-radius: 16px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: #333;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;
