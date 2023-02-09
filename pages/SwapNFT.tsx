import { NftSwap } from "@traderxyz/nft-swap-sdk";
import React, { useCallback, useEffect, useState } from "react";

import { NftSwapV4 } from '@traderxyz/nft-swap-sdk';

import {
  useAddress,
  useDisconnect,
  useMetamask,
  useWalletConnect,
  useCoinbaseWallet,
  useNetwork,
  useNetworkMismatch,
} from "@thirdweb-dev/react";

import Link from 'next/link'

import styles from "../styles/Home.module.css";

import { ArrowBackIcon } from '@chakra-ui/icons'

export default function mainSwap() {
  // const address = useAddress();

  // Supply a provider, signer, and chain id to get started
  // Signer is optional if you only need read-only methods
  // const nftSdk = new NftSwapV4(address, signer, 1);

  // const order = nftSdk.buildOrder(
  // I am offering an NFT (CryptoCoven #9757)
  // {
  //   type: "ERC721",
  //   tokenAddress: "0x5180db8f5c931aae63c74266b211f580155ecac8",
  //   tokenId: "9757",
  // },
  // I will receive an ERC20 (5,000 of USDC)
  // {
  //   type: "ERC20",
  //   tokenAddress: "0x31f42841c2db5173425b5223809cf3a38fede360",
  //   amount: "500000000000000", // 5000 USDC (5000 * 6 decimals)
  // },
  // My wallet address
  //   "0xabc23F70Df4F45dD3Df4EC6DA6827CB05853eC9b"
  // );

  return (
    <>
      {/* <div className={styles.swap}>
        <form className={styles.form}>
          <label className={styles.label}>Contract Address</label>
          <input className={styles.input} />
          <label className={styles.label}>Token Id</label>
          <input name="address" className={styles.input} />
          <center>
            <h1 className={styles.swapHead}>Swap with</h1>
          </center>
          <label className={styles.label}>Contract Address</label>
          <input name="date" className={styles.input} />
          <label className={styles.label}>Token Id</label>
          <input name="order" className={styles.input} />
          <input type="submit" className={styles.submitButton} />
        </form>
      </div> */}

      <Link href="/Marketplace">
        <div className={styles.dflex}>
          <button>Back to Homepage</button>
        </div>
      </Link>

      <div className="aaa">
        <iframe
          id="iframe"
          src="https://m.swapx.com/swap"
          height="660px"
          width="100%"
          className={styles.ifram}
          style={{
            border: 0,
            margin: "0 auto",
            marginLeft: "5rem",
            display: "block",
            borderRadius: "10px",
            maxWidth: "92%",
            minWidth: "92%",
            background: "rgb(23, 22, 27)",
          }
          }

        ></iframe>
      </div>
    </>
  );
}
function useWeb3React<T>(): { library: any; chainId: any } {
  throw new Error("Function not implemented.");
}
