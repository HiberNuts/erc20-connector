import { useWeb3React } from "@web3-react/core";
import { Navbar, Hero } from "./components";
// import { WalletLinkConnector } from "@web3-react/walletlink-connector";
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
// import { InjectedConnector } from "@web3-react/injected-connector";

// const CoinbaseWallet = new WalletLinkConnector({
//   supportedChainIds: [1, 3, 4, 5, 42],
// });

// const WalletConnect = new WalletConnectConnector({
//   qrcode: true,
// });

// const Injected = new InjectedConnector({
//   supportedChainIds: [1, 3, 4, 5, 42],
// });

const App = () => (
  <div className="min-h-screen ">
    <div className="gradient-bg-hero">
      <Navbar />
      <Hero />
    </div>
  </div>
);

export default App;
