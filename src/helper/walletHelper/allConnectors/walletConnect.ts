import { initializeConnector } from "@web3-react/core";
import { WalletConnect } from "@web3-react/walletconnect";
import { URLS } from "../../../chains";

console.log("URLS", URLS);
const rpcArray = {
  56: ["https://bsc-dataseed1.binance.org/"],
};

export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        rpc: rpcArray,
      },
    })
);
