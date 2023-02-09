import {
    ThirdwebNftMedia,
    useAddress,
    useMetamask,
    useTokenBalance,
    useOwnedNFTs,
    useContract,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";


const nftDropContractAddress = "0x68225df7c4df4d82ded8478daa74c2138da1f85b";
const stakingContractAddress = "0xFAaa8258bB2a324498F203BAB77655bd1Bc1D7D0";
const tokenContractAddress = "0x0DdF1dAc8537C90b0a96Bdf05A8c9eD78ccD26cA";

const UserBalance: NextPage = () => {
    const address = useAddress();

    // Contract Hooks
    const { contract: nftDropContract } = useContract(
        nftDropContractAddress,
        "nft-drop"
    );

    const { contract: tokenContract } = useContract(
        tokenContractAddress,
        "token"
    );

    const { contract, isLoading } = useContract(stakingContractAddress);

    // Load Unstaked NFTs

    // Load Balance of Token
    const { data: tokenBalance } = useTokenBalance(tokenContract, address);

    ///////////////////////////////////////////////////////////////////////////
    // Custom contract functions
    ///////////////////////////////////////////////////////////////////////////
    const [stakedNfts, setStakedNfts] = useState<any[]>([]);
    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();

    useEffect(() => {
        if (!contract || !address) return;

        async function loadClaimableRewards() {
            const stakeInfo = await contract?.call("getStakeInfo", address);
            setClaimableRewards(stakeInfo[1]);
        }

        loadClaimableRewards();
    }, [address, contract]);

    // useEffect(() => {
    //     if (!contract || !address) return;

    //     async function loadClaimableRewards() {
    //         const cr = await contract?.call("availableRewards", address);
    //         console.log("Loaded claimable rewards", cr);
    //         setClaimableRewards(cr);
    //     }

    //     loadClaimableRewards();
    // }, [address, contract]);


    if (isLoading) {
        return <div>Loading</div>;
    }

    return (
        <section className="relativ mttt">
            <div className="container container--narrow pb-16">
                {/* <div className="border-b-2 border-coal-light">
            <ul className="flex flex-col sm:flex-row flex-wrap -mb-2px font-hand text-lg md:text-xl lg:text-2xl text-gray-300 text-center">
              <li className="sm:w-1/3 border-t-2 sm:border-0 border-coal-light">
                <a href="/me/wallet/" className="block p-4 rounded-t-lg border-b-2 transition text-xenos-500 border-xenos-500">
                  Overview
                </a>
              </li>
              <li className="sm:w-1/3 border-t-2 sm:border-0 border-coal-light">
                <a href="/me/wallet/activity" className="block p-4 rounded-t-lg border-b-2 transition border-transparent hover:text-white hover:border-gray-500">
                  Wallet Activity
                </a>
              </li>
              <li className="sm:w-1/3 border-t-2 sm:border-0 border-coal-light">
                <a href="/me/wallet/earnings" className="block p-4 rounded-t-lg border-b-2 transition border-transparent hover:text-white hover:border-gray-500">
                  Earnings Log
                </a>
              </li>
            </ul>
          </div> */}
                <div className="mt-10">
                    <div>
                        <div className="flex flex-wrap -m-4 font-hand text-center">
                            <div className="w-full sm:w-1/2 p-4">
                                <div className="p-8 border-2 border-coal-light rounded-2xl bg-coal-dark">
                                    <div className="text-xl font-semibold uppercase">
                                        Wallet balance
                                    </div>
                                    <div className="inline-flex items-center mt-4">
                                        <img src="https://gateway.pinata.cloud/ipfs/QmVgAZjazqRrETC4LFhA3t4sZt6VyesVisEqCvgRmd4gHZ" width={50} height={50} className="mr-6" />
                                        <span className="text-xl">
                                            <b>
                                                {!claimableRewards
                                                    ? "Loading..."
                                                    : ethers.utils.formatUnits(claimableRewards, 18)}
                                            </b>{" "}
                                            {tokenBalance?.symbol}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 p-4">
                                <div className="p-8 border-2 border-coal-light rounded-2xl bg-coal-dark">
                                    <div className="text-xl font-semibold uppercase">
                                        Current earnings
                                    </div>
                                    <div className="inline-flex items-center mt-4">
                                        <img src="https://gateway.pinata.cloud/ipfs/QmVgAZjazqRrETC4LFhA3t4sZt6VyesVisEqCvgRmd4gHZ" width={50} height={50} className="mr-6" />
                                        <span className="text-xl">
                                            <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 p-8 border-2 border-coal-light rounded-2xl bg-coal-dark">
                            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between -m-4 text-center sm:text-left">
                                <div className="w-full sm:w-auto text-lg p-4">
                                    You are not currently eligible to earn coins!
                                </div>
                                <div className="w-full sm:w-auto p-4">
                                    <a href="http://lilbabyapeclub.com/learn" className="af-button--xenos whitespace-nowrap af-button ">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserBalance;