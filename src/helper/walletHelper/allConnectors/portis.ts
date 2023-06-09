import { initializeConnector } from "@web3-react/core";
import { Portis } from "web3-react-portis";

const myNode = {
  nodeUrl: "https://rpc-mumbai.matic.today",
  chainId: 80001,
};
// const options = {
//   scope: ["email", "reputation"],
// };
const options = {
  gasRelay: true,
};

let dappId = "c8bc678d-eee7-4a40-8c15-b0630de04eca";
let network: any = "mainnet";

//@ts-ignore
export const [portis, hooks] = initializeConnector<Portis>(
  (actions) =>
    new Portis(actions, {
      dappId,
      network,
      options,
    })
);
