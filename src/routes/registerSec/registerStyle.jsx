import styled from "styled-components";
import { IMaskInput } from "react-imask";

export const Options = styled.a`
  color: #b1b1b1;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;

  .blue {
    color: blue;
  }
`;

export const Input = styled(IMaskInput)`
  border: 1px solid;
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

export const ButtonRegister = styled.button`
  background-color: ${props => props.isActive ? "#1814f3" : "#b1b1b1"};
  border-radius: 15px;
  width: 248.2px;
  height: 63.6px;
  color: ${props => props.isActive ? "#ffffff" : "black"};
  font-size: 18px;
  font-weight: 500;
  font-family: "Inter", Arial, Helvetica, sans-serif;
  cursor: ${props => props.isActive ? "pointer" : "not-allowed"};

  @media (max-width: 767px) {
    width: 96px;
    height: 28px;
    font-size: 14px;
  }
`;
