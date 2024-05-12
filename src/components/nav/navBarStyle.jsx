import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    align-items: center;
    padding: 10px;

    .container-logo{
        max-width: 150px;
        text-align: center;

        img{
            width: 80%;
        }
    }

    .container-icons{
        max-width: 125px;

        img{
            width: 40%;
        }
    }
`;