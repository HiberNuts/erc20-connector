import React, { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { contractAddress, contractabi } from "./components/contractdetails.js";
import { ethers } from "ethers";
import { Navbar, Hero } from "./components";
import Mint from "./components/Mint";
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

const App = () => {
  const { account, active, library, chainId } = useWeb3React();
  const [isOwner, setisOwner] = useState(false);

  useEffect(() => {
    const getOwner = async () => {
      const connectedContract = new ethers.Contract(contractAddress, contractabi, library);

      let Txn = await connectedContract.owner();
      console.log(Txn);
      if (Txn == account) {
        setisOwner(true);
      } else {
        setisOwner(false);
      }
    };
    getOwner();
  }, [account, active, isOwner]);

  return (
    <div style={{ height: "100vh" }} className="">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        className="gradient-bg-hero"
      >
        <Navbar />
        {active && isOwner && <Mint />}

        <Hero />
      </div>
    </div>
  );
};

export default App;
