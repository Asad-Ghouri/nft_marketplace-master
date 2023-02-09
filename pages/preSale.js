import React from "react";

import styles from "../styles/Theme1.module.css";

import Link from "next/link";

import styles1 from "../styles/Home.module.css";

import { ArrowBackIcon } from "@chakra-ui/icons";

export default function preSale() {
  var test = true; // False if contracts are on Mainnet
  var contractAddressSale = "0x44f83bBcAa75EAE6fb2DF77F04EEe3C686AA9401";
  var contractAddressToken = "0xfD34194C3d78fea42E62d09f2199374D27C9321b";

  return (
    <div>
      <Link href="/listings">
        <div className={styles1.dflex}>
          <button>Back to Homepage</button>
        </div>
      </Link>

      <div className={styles.container}>
        <div className={styles.heading + " " + styles.head}>
          <div className={styles.hideit}>
            <center>
              <div style={{ textAlign: "center" }}>
                <button
                  className={styles.button}
                  id="connect"
                  style={{ fontSize: "12px" }}
                >
                  Connect
                </button>{" "}
                <button
                  className={styles.switch}
                  id="addTestBSC"
                  style={{ fontSize: "12px" }}
                >
                  To BSC Testnet
                </button>
                <span
                  id="nometamask"
                  className={styles.err}
                  style={{ display: "none" }}
                >
                  Please install Metamask first...
                </span>
                <div className={styles.network + " " + styles.small}>
                  <span id="curnet">
                    <span className={styles.err}>
                      Please use DApp browser/extension (e.g.{" "}
                      <a href="https://metamask.io">Metamask</a>)
                    </span>
                  </span>{" "}
                  <span id="myAddr" />
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <p>Token info</p>
                <p>
                  <span id="tokenName">BIGBUCKS</span> (
                  <span className={styles.tokenSymbol}>BUCKS</span>)
                </p>
                <p>
                  <a
                    // target="_blank"
                    href="https://testnet.bscscan.com/token/0xfD34194C3d78fea42E62d09f2199374D27C9321b"
                    id="tokenAddress"
                  >
                    0xfD34194C3d78fea42E62d09f2199374D27C9321b
                  </a>
                </p>
                {/* Reserved in case you want to show decimals and total supply: Decimals <span id="#tokenDecimals"></span> Total supply <span id="#tokenSupply"></span>*/}
                <p>Do not send BNB to the token contract!</p>
                <p>
                  <button id="addToken" style={{ textAlign: "center" }}>
                    Add to Metamask
                  </button>{" "}
                  <button id="copyToken" style={{ textAlign: "center" }}>
                    Copy address
                  </button>
                </p>
              </div>
            </center>
          </div>
          <center>
            <h2 className={styles.prt}>PRESALE</h2>
          </center>
        </div>
        <div className={styles.cont}>
          <div className={styles.heading + " " + styles.hea}>
            <center>
              <p className={styles.Mec}>MEC COIN (MECCO)</p>
            </center>
          </div>
          <div className={styles.line}>
            <span className={styles.left}> Network </span>
            <span className={styles.right}> Binance Smart Chain </span>
            <hr className={styles.hr} />
          </div>
          <div className={styles.line}>
            <span className={styles.left}> Total Supply </span>
            <span className={styles.right}> 10.0000.000 MECC </span>
            <hr className={styles.hr} />
          </div>
          <div className={styles.line}>
            <span className={styles.left}> Presales </span>
            <span className={styles.right}> 5.0000.000 MECC </span>
            <hr className={styles.hr} />
          </div>
          <div className={styles.line}>
            <span className={styles.left}> Exchange Rate </span>
            <span className={styles.right}> 1 BNB = 10.0000 MECC </span>
            <hr className={styles.hr} />
          </div>
          <div className={styles.line}>
            <span className={styles.left}> Min Purchase </span>
            <span className={styles.right}> 0.01 BNB </span>
            <hr className={styles.hr} />
          </div>
          <div className={styles.line}>
            <span className={styles.left}> Max Purchase </span>
            <span className={styles.right}> 5 BNB </span>
            <hr className={styles.hr} />
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <p>
              1 BNB = <span className={styles.rate}>10000.0</span>{" "}
              <span className={styles.tokenSymbol}>BUCKS</span>
            </p>
            <p className={styles.mtbi}>
              <input
                className={styles.input}
                type="number"
                id="buyAmount"
                defaultValue={0}
                min={0}
              />{" "}
              BNB
            </p>
            <div className={styles.uppercase}>
              <p>
                You get: <span id="get">0</span>{" "}
                <span className={styles.tokenSymbol}>BUCKS</span>
              </p>
            </div>
            <p>
              <button
                id="buyBtn"
                className={styles.btn + " " + styles.block}
                style={{ textAlign: "center" }}
              >
                BUY
              </button>
            </p>
            <div className={styles.uppercase + " " + styles.hideit}>
              <p>
                In my wallet: <span id="myTokens" />{" "}
                <span className={styles.tokenSymbol}>BUCKS</span>
              </p>
            </div>
          </div>
          <br />
          {/* <div class="endline abs">
         <span class="left">Presale End</span>
          <span class="right"> 30 </span>
          <span class="right"> 13 </span>
          <span class="right"> 23 </span>
          <span class="right"> 60 </span>
         </div> 
         <br>

         <div class="endline end">
         <span class="right d"> Days </span>
         <span class="right"> Hours </span>
         <span class="right"> Minutes </span>
         <span class="right"> Seconds </span>
        </div>  */}
        </div>
        <div className={styles.hideit}>
          <hr className={styles.hr} />
          <div style={{ textAlign: "center" }}>
            <h1>Sale contract</h1>
            <p>
              You can also buy tokens by sending BNB directly from your wallet
              to this contract
              <br />
              (please increase gas limit to 200,000 or even more for tokens with
              special functions like autoLP, swaps, etc.)
            </p>
            <p>
              <a
                href="https://testnet.bscscan.com/address/0x44f83bBcAa75EAE6fb2DF77F04EEe3C686AA9401"
                // target="_blank"
                id="saleAddress"
              >
                0x44f83bBcAa75EAE6fb2DF77F04EEe3C686AA9401
              </a>{" "}
              <button id="copySale" style={{ textAlign: "center" }}>
                Copy address
              </button>
            </p>
            <div style={{ textAlign: "center" }} id="saleqr" />
          </div>
        </div>
      </div>
    </div>
  );
}
