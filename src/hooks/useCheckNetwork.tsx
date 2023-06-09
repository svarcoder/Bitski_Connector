import { selectWalletHooks } from "../helper/walletHelper/WalletHelper";
import { useConnectWallet } from "./useConnectWallet";

const useCheckNetwork = () => {
  const hook = selectWalletHooks();
  const { useChainId, useIsActive } = hook;
  const { deactivate, connectedWallet } = useConnectWallet();

  const chainId = useChainId();
  const active = useIsActive();

  if (chainId !== 1 && active) {
    deactivate(connectedWallet);
  }
};
export default useCheckNetwork;
