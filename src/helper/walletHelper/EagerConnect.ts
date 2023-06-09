import { wallets } from "./WalletHelper";

export const eagerConnection = async () => {
  //@ts-ignore
  const walletId = await JSON.parse(localStorage.getItem("wallet"));

  const getConnector = await Object.values(wallets).filter(
    (val: { [key: string]: any }) => val.id === walletId
  );
  void getConnector[0].connectWallet.connector.connectEagerly();
};
