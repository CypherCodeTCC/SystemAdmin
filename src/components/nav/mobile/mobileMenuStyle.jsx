import styled from "styled-components";

export const Container = styled.section`
  .interior-menumobile,
  .container-texts,
  #burger, #close {
    display: none;
  }

  @media (min-width: 802px) and (max-width: 1150px) {
    display: flex;
    flex-direction: column;

    #burger, #close {
      display: flex;
      cursor: pointer;
      z-index: 1001; /* Para garantir que o botão esteja acima do menu */
    }

    .interior-menumobile.visible,
    .container-texts.visible {
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: white;
      z-index: 1000; /* Altere este valor conforme necessário */
    }

    .item{
        width: 50%;
        display: flex;
        gap: 20px;
        align-items: center;   
    }

    .border {
      background-color: #e7edff;
      border-radius: 20px;
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      width: 32px;
      height: 35px;
    }
  }

@media (max-width: 801px){
    display: flex;
    flex-direction: column;

    #burger, #close {
      display: flex;
      cursor: pointer;
      z-index: 1001; /* Para garantir que o botão esteja acima do menu */
    }

    .interior-menumobile.visible,
    .container-texts.visible {
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: white;
      z-index: 1000; /* Altere este valor conforme necessário */
    }

    .item{
        width: 50%;
        display: flex;
        gap: 20px;
        align-items: center;   
    }

    .border{
        display: none;
    }
}
`;