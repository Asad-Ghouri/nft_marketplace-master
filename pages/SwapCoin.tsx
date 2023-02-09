import React from "react";

import Link from 'next/link'

import { setup1inchWidget } from '@1inch/embedded-widget';

import styles from "../styles/Home.module.css";

export default function Swaping() {


  return (
    <div>
      <Link href="/Marketplace">
        <div className={styles.dflex + " " + styles.dfl}>
          <button>Back to Homepage</button>
        </div>
      </Link>

      <iframe
        id="iframe"
        src="https://app.uniswap.org/#/swap?theme=dark"
        height="660px"
        width="100%"
      ></iframe>



      {/* <iframe src="https://app.uniswap.org/#/swap" width={1000} height={500} sandbox='allow-scripts allow-modal' ></iframe> */}
    </div>
  );
};
