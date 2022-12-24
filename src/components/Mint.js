import React, { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { contractAddress, contractabi } from "./contractdetails";
import { ethers } from "ethers";

const Mint = () => {
  const { account, active, library, chainId } = useWeb3React();
  const provider = library;
  const [Mint, setMint] = useState("");

  const transfer = async () => {
    try {
      if (provider) {
        console.log(Mint);
        const connectedContract = new ethers.Contract(contractAddress, contractabi, library.getSigner());

        console.log("Going to pop wallet now to pay gas...");

        let Txn = await connectedContract.mint(ethers.utils.parseEther(Mint), { gasLimit: 100000 });

        console.log("Mining...please wait.");
        await Txn.wait();
        console.log(Txn);
        setMint(0);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ display: "flex" }} className="mb-20">
      <input
        onChange={(e) => setMint(e.target.value)}
        placeholder="Enter amount of RJ Token to mint"
        name="mint"
        type="mint"
        style={{ backgroundColor: "rgb(52,75,111)" }}
        className="my-2 mr-20  rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
      />

      <button
        onClick={transfer}
        type="button"
        className="text-white w-20 mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#248cfcea] bg-[#24a2fcea] rounded-full cursor-pointer"
      >
        Mint
      </button>
    </div>
  );
};

export default Mint;
