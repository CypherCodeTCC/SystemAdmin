import styled from "styled-components";

export const Options = styled.a`
  color: ${(props) => (props.isActive ? "blue" : "")};
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

export const Input = styled.input`
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
