import styled from "styled-components";

export const Container = styled.nav`
  position: relative;
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

export const MenuMobile = styled.div`
  display: none;

  @media (max-width: 1024px) {
    cursor: pointer;
    display: flex;
    flex-direction: column;
  }
`;

export const DropUser = styled.div`
  text-align: left;
  min-height: 100%;
  font-size: 24px;
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  width: 100%;
  padding: 30px;
  z-index: 1001;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const LiBotao = styled.li`
  flex: 1 1 min-content;
`;

export const ALiBotao = styled.a`
  background: #000000;
  color: #ffffff;
  display: inline-block;
  border-radius: 10px;
  padding: 14px 24px 16px;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1;
  border: 0;
  user-select: none;
  text-align: center;
  text-decoration: none;
  position: relative;
  background: transparent;
  color: #000000;
  box-shadow: 0 0 0 3px #000000 inset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1rem;
`;
