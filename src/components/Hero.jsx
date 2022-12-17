import React, { useState, useEffect } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { contractAddress, contractabi } from "./contractdetails";
import { ethers } from "ethers";
function Hero() {
  const { account, active, library, chainId } = useWeb3React();
  const provider = library;
  const [toAddress, settoAddress] = useState("");
  const [amount, setamount] = useState(0);

  const transfer = async () => {
    try {
      if (provider) {
        console.log(amount);
        const connectedContract = new ethers.Contract(contractAddress, contractabi, library.getSigner());

        console.log("Going to pop wallet now to pay gas...");

        let Txn = await connectedContract.transfer(toAddress, amount, { gasLimit: 100000 });

        console.log("Mining...please wait.");
        await Txn.wait();
        console.log(Txn);
        setamount(0);
        settoAddress("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
        <input
          onChange={(e) => settoAddress(e.target.value)}
          placeholder="Address To"
          name="addressTo"
          type="text"
          className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />
        <input
          onChange={(e) => setamount(e.target.value)}
          placeholder="Amount (ETH)"
          name="amount"
          type="number"
          className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />

        <div className="h-[1px] w-full bg-gray-400 my-2" />
        <button
          onClick={transfer}
          type="button"
          className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#248cfcea] bg-[#24a2fcea] rounded-full cursor-pointer"
        >
          Transfer Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
