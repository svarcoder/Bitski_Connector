import { Web3ReactHooks } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { WalletConnect } from "@web3-react/walletconnect";
import { Portis } from "web3-react-portis";
import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { Fortmatic } from "web3-react-fortmatic";
import { TorusConnector } from "web3-react-torus";
import { BitskiConnect } from "web3-react-bitski";
import { hooks as metamaskHooks, metamask } from "./allConnectors/metaMask";
import { hooks as portisHooks, portis } from "./allConnectors/portis";
import { hooks as fortmaticHooks, fortmatic } from "./allConnectors/fortmatic";
import { hooks as coinbaseHooks, coinbase } from "./allConnectors/coinbase";
import { hooks as torusHooks, torus } from "./allConnectors/torus";
import { hooks as bitskiHooks, bitski } from "./allConnectors/bitski";
import {
  hooks as walletConnectHooks,
  walletConnect,
} from "./allConnectors/walletConnect";

export const connectors: [
  (
    | MetaMask
    | WalletConnect
    | Portis
    | Fortmatic
    | CoinbaseWallet
    | TorusConnector
    | BitskiConnect
  ),
  Web3ReactHooks
][] = [
  [portis, portisHooks],
  [metamask, metamaskHooks],
  [walletConnect, walletConnectHooks],
  [fortmatic, fortmaticHooks],
  [coinbase, coinbaseHooks],
  [torus, torusHooks],
  [bitski, bitskiHooks],
];

export const connectorsObject = {
  metamask: {
    connector: metamask,
    hooks: metamaskHooks,
  },
  walletConnect: {
    connector: walletConnect,
    hooks: walletConnectHooks,
  },
  portis: {
    connector: portis,
    hooks: portisHooks,
  },
  fortmatic: {
    connector: fortmatic,
    hooks: fortmaticHooks,
  },
  coinbase: {
    connector: coinbase,
    hooks: coinbaseHooks,
  },
  torus: {
    connector: torus,
    hooks: torusHooks,
  },
  bitski: {
    connector: bitski,
    hooks: bitskiHooks,
  },
};

console.log("metamask, metamaskHooks", metamask, metamaskHooks);
