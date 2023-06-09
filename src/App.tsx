import { useEffect, useState } from "react";
import "./App.css";
import CancelIcon from "./assets/icons/cancel.svg";
import FortmaticIcon from "./assets/icons/fortmatic_icon.svg";
import LogoutIcon from "./assets/icons/logout.svg";
import MetamaskIcon from "./assets/icons/metamask_icon.svg";
import PortisIcon from "./assets/icons/portis_icon.svg";
import WalletIcon from "./assets/icons/wallet.svg";
import WalletConnectIcon from "./assets/icons/wallet_connect_icon.svg";
import CoinbaseIcon from "./assets/icons/coinbase_icon.svg";
import TorusIcon from "./assets/icons/torus_icon.svg";
import BitskiIcon from "./assets/icons/bitski_icon.svg";
import { connectorsObject } from "./helper/walletHelper/connectors";
import { useConnectWallet } from "./hooks/useConnectWallet";
import { CustomModal } from "./shared/customModal/CustomModal";
import * as Styled from "./style";
import { eagerConnection } from "./helper/walletHelper/EagerConnect";
import { metamask } from "./helper/walletHelper/allConnectors/metaMask";
import useCheckNetwork from "./hooks/useCheckNetwork";

function App() {
  const [showModal, setShowModal] = useState(false);
  const { activate, deactivate, chainId, active, account, connectedWallet } =
    useConnectWallet();

  useEffect(() => {
    //@ts-ignore
    const walletId = JSON.parse(localStorage.getItem("wallet"));
    if (walletId) {
      eagerConnection();
    }
  }, []);

  useCheckNetwork()
  return (
    <>
      <Styled.AppContainer>
        <Styled.NavContainer>
          <Styled.Button
            onClick={
              active
                ? () => deactivate(connectedWallet)
                : () => {
                    setShowModal(true);
                  }
            }
          >
            {active
              ? `${account && account[0]?.slice(0, 6)}...${
                  account && account[0]?.slice(38, 42)
                }`
              : "Connect"}
            {active ? (
              <img src={LogoutIcon} alt="logoutIcon" />
            ) : (
              <img src={WalletIcon} alt="walletIcon" />
            )}
          </Styled.Button>
        </Styled.NavContainer>
      </Styled.AppContainer>
      <CustomModal show={showModal}>
        <Styled.ModalOuterContainer>
          <Styled.ModalNavbar>
            <img
              src={CancelIcon}
              alt="cancel_icon"
              onClick={() => setShowModal(false)}
            />
          </Styled.ModalNavbar>
          <Styled.ModalContent>
            <Styled.ModalWalletContent
              onClick={
                active
                  ? () => deactivate(connectorsObject.metamask.connector)
                  : () => {
                      activate(connectorsObject.metamask.connector);
                      setShowModal(false);
                    }
              }
            >
              <img src={MetamaskIcon} alt="wallet_icon" />
              <p>Metamask</p>
            </Styled.ModalWalletContent>
            <Styled.ModalWalletContent
              onClick={
                active
                  ? () => deactivate(connectorsObject.portis.connector)
                  : () => {
                      activate(connectorsObject.portis.connector);
                      setShowModal(false);
                    }
              }
            >
              <img src={PortisIcon} alt="wallet_icon" />
              <p>Portis</p>
            </Styled.ModalWalletContent>
            <Styled.ModalWalletContent
              onClick={
                active
                  ? () => deactivate(connectorsObject.walletConnect.connector)
                  : () => {
                      activate(connectorsObject.walletConnect.connector);
                      setShowModal(false);
                    }
              }
            >
              <img src={WalletConnectIcon} alt="wallet_icon" />
              <p>WalletConnect</p>
            </Styled.ModalWalletContent>
            <Styled.ModalWalletContent
              onClick={
                active
                  ? () => deactivate(connectorsObject.fortmatic.connector)
                  : () => {
                      activate(connectorsObject.fortmatic.connector);
                      setShowModal(false);
                    }
              }
            >
              <img src={FortmaticIcon} alt="wallet_icon" />
              <p>Fortmatic</p>
            </Styled.ModalWalletContent>
            <Styled.ModalWalletContent
              onClick={
                active
                  ? () => deactivate(connectorsObject.coinbase.connector)
                  : () => {
                      activate(connectorsObject.coinbase.connector);
                      setShowModal(false);
                    }
              }
            >
              <img src={CoinbaseIcon} alt="wallet_icon" />
              <p>Coinbase</p>
            </Styled.ModalWalletContent>
            <Styled.ModalWalletContent
              onClick={
                active
                  ? () => deactivate(connectorsObject.torus.connector)
                  : () => {
                      activate(connectorsObject.torus.connector);
                      setShowModal(false);
                    }
              }
            >
              <img src={TorusIcon} alt="wallet_icon" />
              <p>Torus</p>
            </Styled.ModalWalletContent>
            <Styled.ModalWalletContent
              onClick={
                active
                  ? () => deactivate(connectorsObject.bitski.connector)
                  : () => {
                      activate(connectorsObject.bitski.connector);
                      setShowModal(false);
                    }
              }
            >
              <img src={BitskiIcon} alt="wallet_icon" />
              <p>Bitski</p>
            </Styled.ModalWalletContent>
          </Styled.ModalContent>
        </Styled.ModalOuterContainer>
      </CustomModal>
    </>
  );
}

export default App;
