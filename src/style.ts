import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100vh;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;

export const Button = styled.button`
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  background: black;
  color: white;
  transition: 0.3s ease;
  cursor: pointer;
  border-radius: 10px;
  :hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px 10px;
  }
  img {
    width: 18px;
    height: 18px;
  }
`;

export const ModalOuterContainer = styled.div`
  background: #ffffff;
  width: 500px;
  height: 100%;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const ModalNavbar = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #000000;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  img {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
`;

export const ModalWalletContent = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  img {
    width: 18px;
    height: 18px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
  border: 1px solid #000;
  border-radius: 10px;
  :hover {
    background-color: gray;
  }
`;
