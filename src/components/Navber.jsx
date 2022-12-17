import React from "react";
import { useWeb3React } from "@web3-react/core";

import { InjectedConnector } from "@web3-react/injected-connector";
const Injected = new InjectedConnector({ supportedChainIds: [5, 1] });
const Navber = () => {
  const { activate, deactivate, account, active, chainId } = useWeb3React();
  console.log(active);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-7">
      <h1></h1>
      <div className="md: flex-initial justify-between  blue-glassmorphism">
        <div
          placeholder=""
          name="addressTo"
          type="text"
          className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white text-center border-none text-sm white-glassmorphism"
          disabled
        >
          {account?.slice(0, 30)}
        </div>
      </div>
      <ul className="text-white md:flex  list-none flex-row justify-between items-center flex-initial">
        {!active && (
          <li
            onClick={() => {
              activate(Injected);
            }}
            className="bg-[#24a2fcea] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#248cfcea]"
          >
            Connect
          </li>
        )}

        <button onClick={deactivate}>Disconnect</button>
      </ul>
    </nav>
  );
};
export default Navber;
