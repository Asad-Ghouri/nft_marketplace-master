import {
  useAddress,
  useDisconnect,
  useMetamask,
  useWalletConnect,
  useCoinbaseWallet,
  useNetwork,
  useNetworkMismatch,
} from "@thirdweb-dev/react";
import { ReactNode, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  useToast,
  Img,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useRef } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


import Dicon from "../public/icons/d_icon.png";
import Desicon from "../public/icons/dicon.png";
import listing from "../public/icons/listing.png";
import balance from "../public/icons/balance.png";
// import { openseaUrl, walletscanUrl } from "../const/aLinks";

import {
  RiLoginCircleFill,
  RiWallet3Fill,
  RiShieldUserFill,
  RiSignalWifiErrorLine,
} from "react-icons/ri";

import hamburger from "../public/icons/hamburger.png";

import Sidebar1 from "./Sidebar1";

import Imgs from "../public/icons/lolo.png";

const Title = "Alien Frens";
// const openseaLink = openseaUrl;
// const scanUrl = walletscanUrl;
// const Logo = "https://app.alienfrens.io/_nuxt/img/logo.6ec3e4c.svg";

const NavLink = ({ children }, { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const toast = useToast();
  const address = useAddress();
  const networkMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  const [menuIcon, setmenuIcon] = useState(false);

  const color = useColorModeValue("gray.200", "gray.700");

  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const disconnectWallet = useDisconnect();

  function handleClick() {
    setmenuIcon(false);
    router.push("/stake");
  }
  function marketClick() {
    setmenuIcon(false);
    router.push("/Marketplace");
  }
  function homeClick() {
    setmenuIcon(false);
    router.push("/");
  }
  function sellingClick() {
    setmenuIcon(false);
    router.push("/Balance");
  }
  function stakeClick() {
    router.push("/");
  }

  function setmenuIconfalse() {
    setmenuIcon(false);
  }
  return (
    <>
      <div className="">{menuIcon ? <>
        <div className="nav-container">
          <div className="navbar">
            <div className="menu">
              <ul>
                <div className="imagtext">
                  <Image src={Dicon} alt="" />
                  <li onClick={homeClick}>
                    Dashboard
                  </li>
                </div>
                <div className="imagtext imagtext1">
                  <Image src={Desicon} alt="" />

                  <li onClick={marketClick}>
                    Marketplace
                  </li>
                </div>
                {/* <div className="imagtext">
                  <Image src={listing} alt="" />

                  <li onClick={handleClick}>
                    Listing
                  </li>
                </div> */}
                <div className="imagtext">
                  <Image src={balance} alt="" />

                  <li onClick={sellingClick}>
                    Balance
                  </li>
                </div>

              </ul>
            </div>
          </div>
        </div>
      </> : console.log("finish")}</div>
      <div className="navz">
        <Box
          bg={color}
          px={4}
          style={{
            position: "fixed",
            width: "100%",
            zIndex: 99999,
            top: 0,
            background: "#091723",
            padding: "0.5rem",
          }}
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"} className="ccci">
            <Image src={Imgs} height={100} width={198} />

            {/* <img src="https://app.alienfrens.io/_nuxt/img/logo.6ec3e4c.svg" width={228} height={228} alt="logo" /> */}

            {/* <Box
            onClick={homeClick}
            cursor={"pointer"}
            fontSize={"lg"}
            fontWeight={700}
          >
            {Title}
          </Box> */}

            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={5}>
                {/* <Button>
                <Link
                  href={openseaLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="OpenSea"
                  style={{ height: 28 }}
                >
                  <Image src={Logo} width={28} height={28} alt="logo" />
                </Link>
              </Button> */}
                {/* <Button onClick={toggleColorMode}>
                {colorMode === "light" ? (
                  <MoonIcon size={32} />
                ) : (
                  <SunIcon size={32} />
                )}
              </Button> */}
                <img
                  src="https://gateway.pinata.cloud/ipfs/QmX2Vwkym49geStTGSLKvd6PPFfNDyRrPsgr1tsu5PMRsC"
                  width={55}
                  height={45}
                  className="mrt-t"
                />

                {address ? (
                  <Button
                    className="lo"
                    onClick={() => {
                      disconnectWallet(),
                        // homeClick(),
                        toast({
                          title: "Wallet Disconnected.",
                          description: "You've disconnect your wallet.",
                          status: "info",
                          duration: 3000,
                          isClosable: true,
                        });
                    }}
                  >
                    {/* <span><img src="https://app.alienfrens.io/_nuxt/img/logo-sign.1364a14.svg" alt="" /></span> */}
                    {/* <img src="https://gateway.pinata.cloud/ipfs/QmVgAZjazqRrETC4LFhA3t4sZt6VyesVisEqCvgRmd4gHZ" width={25} height={25} className="mr-6" /> */}
                    <p className="caaa"> Connected as </p>
                    <p className="truncate">
                      {" "}
                      {address.substring(0, 7) + "..."}{" "}
                    </p>
                  </Button>
                ) : (
                  <Button
                    className="cbn"
                    onClick={connectWithMetamask}
                    // colorScheme={'green'}
                    bg={"green.400"}
                    rounded={"full"}
                    px={6}
                    _hover={{
                      bg: "green.500",
                    }}
                  >
                    Connect
                  </Button>
                )}

                {/* <Menu>
                <>
                  {address ? (
                    <>
                      <MenuList alignItems={"center"}>
                        <br />
                        <Center>
                          <RiWallet3Fill size={60} />
                        </Center>
                        <br />
                        <Center>
                          <Link
                            href={scanUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Wallet Scan"
                            style={{ height: 28 }}
                          >
                            <p>
                              {address
                                .slice(0, 3)
                                .concat("")
                                .concat(address.slice(-4))}
                            </p>
                          </Link>
                        </Center>
                        <MenuDivider />
                        <Center>
                          <Link
                            href={"https://testnet.bnbchain.org/faucet-smart"}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="BNB faucet"
                          >
                            tBNB Faucet
                          </Link>
                        </Center>
                        <MenuDivider />
                        {networkMismatch ? (
                          <>
                            <MenuItem
                              leftIcon={<RiSignalWifiErrorLine />}
                              onClick={() =>
                                switchNetwork(
                                  Number(process.env.NEXT_PUBLIC_CHAIN_ID)
                                )
                              }
                              colorScheme={"blue"}
                            >
                              Switch Network
                            </MenuItem>
                          </>
                        ) : (
                          <>
                            <MenuItem onClick={stakeClick}>Dashboard</MenuItem>
                            <MenuItem onClick={marketClick}>
                              Marketplace
                            </MenuItem>
                            <MenuItem onClick={handleClick}>
                              Listing
                            </MenuItem>
                            <MenuItem onClick={sellingClick}>
                              Balance
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                disconnectWallet(),
                                  homeClick(),
                                  toast({
                                    title: "Wallet Disconnected.",
                                    description:
                                      "You've disconnect your wallet.",
                                    status: "info",
                                    duration: 3000,
                                    isClosable: true,
                                  });
                              }}
                            >
                              Logout
                            </MenuItem>
                          </>
                        )}
                      </MenuList>
                    </>
                  ) : (
                    <>
                      <MenuButton
                        as={Button}
                        rounded={"full"}
                        variant={"link"}
                        cursor={"pointer"}
                        minW={0}
                      >
                        <RiLoginCircleFill size={32} />
                      </MenuButton>
                      <MenuList alignItems={"center"}>
                        <br />
                        <Center>
                          <RiWallet3Fill size={40} />
                        </Center>
                        <br />
                        <Center>
                          <p>Connect Wallet</p>
                        </Center>
                        <br />
                        <MenuDivider />
                        
                        <MenuItem onClick={stakeClick}>Dashboard</MenuItem>
                            <MenuItem onClick={marketClick}>
                              Marketplace
                            </MenuItem>
                            <MenuItem onClick={handleClick}>
                              Listing
                            </MenuItem>
                            <MenuItem onClick={sellingClick}>
                              Balance
                            </MenuItem>
                      </MenuList>
                    </>
                  )}
                </>
              </Menu> */}

                <button
                  className="menu-btn"
                  onClick={() => {
                    setmenuIcon(!menuIcon);
                  }}
                >
                  <Image src={hamburger} width={42} height={32} />
                </button>
              </Stack>
            </Flex>
          </Flex>
        </Box>
        {/* <hr class="new4" /> */}
      </div>
    </>
  );
}
