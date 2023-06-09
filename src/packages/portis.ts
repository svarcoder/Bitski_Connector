import type { Actions, Provider } from "@web3-react/types";
import { Connector } from "@web3-react/types";

const chainNameToNetwork: { [network: string]: number } = {
  mainnet: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  kovan: 42,
  xdai: 100,
  orchid: 30,
  orchidTestnet: 31,
  core: 99,
  sokol: 77,
  classic: 61,
  ubiq: 8,
  thundercore: 108,
  thundercoreTestnet: 18,
  lightstreams: 163,
  fuse: 122,
  devChain: 1337,
  hardhat: 31337,
  matic: 137,
  maticMumbai: 80001,
  boba: 288,
  bobaRinkeby: 28,
};

type Network = string | { chainId: string; [key: string]: any };

type PortisProvider = Provider;

/**
 * @param dappId - dappId which you can find in the portis dashboard
 * @param network - network can be the name of the network or the object containing details of the network
 */
export interface PortisWalletConstructorArgs {
  dappId: string;
  network: any;
  options?: any;
}

export class PortisConnector extends Connector {
  public provider?: PortisProvider;

  private readonly dappId: string;
  private readonly network: any;
  private readonly options: any;
  public portis: any;

  constructor(
    actions: Actions,
    { dappId, network, options }: PortisWalletConstructorArgs
  ) {
    super(actions);
    if (this.isValidNetwork(network)) {
      console.log("hey there1");
      this.network = network;
    } else {
      console.log("Invalid network", network);
      this.network = network;
    }
    this.dappId = dappId;
    this.options = options;
  }

  private async isomorphicInitialize(): Promise<void> {
    const Portis = await import("@portis/web3").then((m) => m?.default ?? m);
    console.log("this.network", this.network);
    this.portis = new Portis(this.dappId, this.network, this.options);

    // const walletAddress = await this.getAccount();
    // this.portis.onActiveWalletChanged(
    //   this.handleOnActiveWalletChanged(walletAddress[0])
    // );
  }

  public async activate(): Promise<void> {
    // let cancelActivation: () => void;
    // if (!this.provider?.isConnected?.())
    //   cancelActivation =
    this.actions.startActivation();
    console.log("this", this);
    await this.isomorphicInitialize();
    console.log("this.portis", this.portis);
    console.log("this.portis.provider", this.portis.provider);
    console.log(
      "this.portis.provider.isConnected()",
      this.portis.provider.isConnected()
    );
    this.portis.changeNetwork("matic");

    await this.portis.provider
      .enable()
      .then((accounts: string[]): string[] => accounts)
      .catch((error: any) => console.log("error", error));

    const chainId = await this.getChainId();
    const accounts = await this.getAccount();

    this.portis.showPortis();
    console.log("matic---matic");
    return this.actions.update({ chainId: parseChainId(chainId), accounts });
  }

  public async deactivate(): Promise<void> {
    await this.isomorphicInitialize();
    // this.portis.logout();
    this.actions.resetState();
  }

  public async getChainId(): Promise<string> {
    return this.portis.provider.send("eth_chainId");
  }

  public async getAccount(): Promise<string[]> {
    return this.portis.provider
      .send("eth_accounts")
      .then((accounts: string[]): string[] => accounts);
  }

  private handleOnActiveWalletChanged(walletAddress: string): void {
    console.log("Active wallet address:", walletAddress);
  }

  public isValidNetwork(network: any) {
    console.log("hey there");
    if (typeof network === "string") {
      return chainNameToNetwork[network] ? true : false;
    }
    return true;
  }

  public async changeNetwork(
    newNetwork: string | Network,
    isGasRelayEnabled?: boolean
  ) {
    if (typeof newNetwork === "string") {
      chainNameToNetwork[newNetwork] ? true : new Error(`Invalid Network`);

      this.portis.changeNetwork(
        chainNameToNetwork[newNetwork],
        isGasRelayEnabled
      );
      // this.actions.update({ chainId: chainNameToNetwork[newNetwork] })
    } else {
      this.portis.changeNetwork(newNetwork, isGasRelayEnabled);
      // this.actions.update({ chainId: Number(newNetwork.chainId) })
    }
  }
}

function parseChainId(chainId: string) {
  return Number.parseInt(chainId, 16);
}
