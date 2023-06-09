import { initializeConnector } from "@web3-react/core";
import { Fortmatic } from "web3-react-fortmatic";

const customNodeOptions = {
  rpcUrl: "https://rpc-mumbai.matic.today", // your own node url
  chainId: 80001, // chainId of your own node
};
const BSCOptions = {
  /* Smart Chain mainnet RPC URL */
  rpcUrl: "https://bsc-dataseed.binance.org/",
  chainId: 56, // Smart Chain mainnet chain id
};
const BSCTest = {
  rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
  chainId: 97,
};
const PolygonMain = {
  rpcUrl: "https://polygon-rpc.com/",
  chainId: 137,
};
const AvalancheMain = {
  rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
  chainId: 43114,
};
const FantomMain = {
  rpcUrl: "https://rpc.ftm.tools/",
  chainId: 250,
};
const OptimismMain = {
  rpcUrl: "https://mainnet.optimism.io",
  chainId: 10,
};
const AuroraMain = {
  rpcUrl: "https://mainnet.aurora.dev",
  chainId: 1313161554,
};
const ArbitrumMain = {
  rpcUrl: "https://arb1.arbitrum.io/rpc",
  chainId: 42161,
};
const MoonbeamMain = {
  rpcUrl: "https://moonbeam.api.onfinality.io/public",
  chainId: 1284,
};
// const options = {
//   scope: ["email", "reputation"],
// };
const options = {
  gasRelay: true,
};

let apiKey = "pk_live_AC5FF1E5F1D153E0";
let network: any = BSCOptions;

export const [fortmatic, hooks] = initializeConnector<Fortmatic>(
  (actions) =>
    new Fortmatic(actions, {
      apiKey,
      network,
    })
);
