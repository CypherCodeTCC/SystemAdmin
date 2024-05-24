import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  align-items: center;
  padding: 10px;

  .container-logo {
    max-width: 150px;
    text-align: center;
    margin: auto 0;

    img {
      width: 80%;
    }
  }

  .container-icons {
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 125px;

    img {
      width: 40%;
    }
  }
`;