import {
    ConnectWallet,
    ThirdwebNftMedia,
    useAddress,
    useContract,
    useContractRead,
    useOwnedNFTs,
    useTokenBalance,
    Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import NFTCard from "../components/NFTCard";
import { useContractMetadata, useNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Theme.module.css";

import Link from 'next/link'


import Homestyles from "../styles/Home.module.css";


const StakingMutant: NextPage = () => {
    const address = useAddress();

    const nftDropContractAddress = "0x68225df7c4df4d82ded8478daa74c2138da1f85b";
    const stakingContractAddress = "0xFAaa8258bB2a324498F203BAB77655bd1Bc1D7D0";
    const tokenContractAddress = "0x0DdF1dAc8537C90b0a96Bdf05A8c9eD78ccD26cA";

    const { contract: nftDropContract } = useContract(
        nftDropContractAddress,
        "nft-drop"
    );
    const { contract: tokenContract } = useContract(
        tokenContractAddress,
        "token"
    );
    const { contract, isLoading } = useContract(stakingContractAddress);


    // const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);



    const { contract: LilBaby } = useContract('0x3B45542f6C97FE7f7aA3BB055c95e93B2c0437ED');
    const { data: metadata, isLoading: loadingMetadata } = useContractMetadata(LilBaby);
    const { data: ownedNFTs, isLoading: LilBabyLoading, error } = useOwnedNFTs(LilBaby, address);




    const { data: tokenBalance } = useTokenBalance(tokenContract, address);
    const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
    const { data: stakedTokens } = useContractRead(
        contract,
        "getStakeInfo",
        address
    );

    useEffect(() => {
        if (!contract || !address) return;

        async function loadClaimableRewards() {
            const stakeInfo = await contract?.call("getStakeInfo", address);
            setClaimableRewards(stakeInfo[1]);
        }

        loadClaimableRewards();
    }, [address, contract]);

    async function stakeNft(id: string) {
        if (!address) return;

        const isApproved = await nftDropContract?.isApproved(
            address,
            stakingContractAddress
        );
        if (!isApproved) {
            await nftDropContract?.setApprovalForAll(stakingContractAddress, true);
        }
        await contract?.call("stake", [id]);
    }

    if (isLoading) {
        return <div>Loading</div>;
    }

    return (
        <div className={styles.container}>

            <Link href="/Marketplace">
                <div className={Homestyles.dflex + " " + Homestyles.dfl}>
                    <button>Back to Homepage</button>
                </div>
            </Link>

            {/* <h1 className={styles.h1}>Stake Your NFTs</h1> */}
            {/* <hr className={`${styles.divider} ${styles.spacerTop}`} /> */}

            {!address ? (
                <ConnectWallet />
            ) : (
                <>
                    {/* <h2>Your Tokens</h2> */}
                    <div className={styles.tokenGrid}>
                        <div className={styles.tokenItem + " " + styles.tokenIt}>
                            <h3 className={styles.tokenLabel}>Claimable Rewards</h3>
                            <p className={styles.tokenValue}>
                                <b>
                                    {!claimableRewards
                                        ? "Loading..."
                                        : ethers.utils.formatUnits(claimableRewards, 18)}
                                </b>{" "}
                                {tokenBalance?.symbol}

                            </p>
                        </div>
                        <div className={styles.tokenItem + " " + styles.tokenIt}>
                            <h3 className={styles.tokenLabel}>Current Balance</h3>
                            <p className={styles.tokenValue}>
                                <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
                            </p>
                        </div>
                    </div>

                    <Web3Button
                        action={(contract) => contract.call("claimRewards")}
                        className={styles.clainbtn}
                        contractAddress={stakingContractAddress}
                    >
                        Claim Rewards
                    </Web3Button>

                    <hr className={`${styles.divider} ${styles.spacerTop}`} />
                    <h2>Your Staked NFTs</h2>
                    <div className={styles.nftBoxGrid + " " + styles.unstakenftBoxGrid}>
                        {stakedTokens &&
                            stakedTokens[0]?.map((stakedToken: BigNumber) => (
                                <NFTCard
                                    tokenId={stakedToken.toNumber()}
                                    key={stakedToken.toString()}
                                />
                            ))}
                    </div>

                    <hr className={`${styles.divider} ${styles.spacerTop}`} />
                    <h2 className="unstakentext">Your Unstaked NFTs</h2>
                    <div className={styles.nftBoxGrid}>
                        {ownedNFTs?.map((nft) => (
                            <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                                <ThirdwebNftMedia
                                    metadata={nft.metadata}
                                    className={styles.nftMedia}
                                />
                                <h3>{nft.metadata.name}</h3>
                                <button
                                    className={`${styles.mainButton} ${styles.spacerBottom} ${styles.listbtn}`}

                                    onClick={() => stakeNft(nft.metadata.id)}
                                >
                                    Stake
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default StakingMutant;