import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "../components/Navbar";
import Foot from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;
//  parseInt(`${process.env.NEXT_PUBLIC_CHAIN_ID}`)
const Title = "NFT marketplace";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ChakraProvider>
        <Head>
          <title>{Title}</title>
        </Head>
        <Nav />
        <Sidebar />
        <Component {...pageProps} />
        {/* <Foot /> */}
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
