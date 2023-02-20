import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

import React, { useState } from "react";
import {
  useContract,
  useActiveListings,
  useContractMetadata,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import {
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Container,
  Spinner,
} from "@chakra-ui/react";
import { MARKETPLACE_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Theme.module.css";
import Image from "next/image";
import { MediaRenderer } from "@thirdweb-dev/react";
// import { besideNavbar } from "../components/besideNavbar";
// import { besideNavbar } from "../components/besideNavbar"
// import besideNavbar from "../components/besideNavbar";
import RefreshbImg from "../public/icons/Refreshicon.png";

import filterImg from "../public/icons/filter.png";

// import Foo from "../components/DropDown";

import { Select } from "@chakra-ui/react";

import { useRouter } from "next/router";

export default function Listings() {
  const { contract: marketplace } = useContract(MARKETPLACE_ADDRESS);
  const { data: listings, isLoading } = useActiveListings(marketplace);

  // Load contract metadata
  const { data: contractMetadata, isLoading: loadingMetadata } =
    useContractMetadata(marketplace);

  const router = useRouter();

  const [filter, setFilter] = useState(0); // 0 = direct, auction = 1
  const [inputValue, setInputValue] = useState("");
  const [changeColor, setchangeColor] = useState(1);
  const [radiochangeColor, setradiochangeColor] = useState(true);
  const [closeBtn, setcloseBtn] = useState(true);

  const [closeBtn1, setcloseBtn1] = useState(true);

  const { isOpen, onOpen, onClose } = useDisclosure();

  function LilListing() {
    setchangeColor(1);
    router.push("/ListBaby");
  }

  function MutantListing() {
    setchangeColor(8);
    router.push("/ListMutant");
  }

  function LilStake() {
    setchangeColor(2);
    router.push("/StakingBaby");
    // alert("contract address is not deployed yet");
  }

  function MutantStaking() {
    setchangeColor(5);
    router.push("/StakingMutant");
  }

  function swapcoin() {
    setchangeColor(3);
    router.push("/SwapCoin");
  }

  function swapnft() {
    setchangeColor(4);
    router.push("/SwapNFT");
  }

  function presale() {
    setchangeColor(5);
    router.push("/preSale");
  }

  return (
    <>
      <div className="max-h-full px-3 space-y-5 overflow-y-auto bsbs">
        <div className="lg:block hfmm">
          <div className="bg-coal-dark border-2 border-coal-light rounded-xl fmm">
            <ul className="bg-coal-light bg-opacity-25 rounded-xl divide-y divide-coal-light fmm1">
              <li role="button" className="p-1 ucc">
                <button
                  onClick={LilListing}
                  className={
                    changeColor != 1
                      ? "flex items-center hover:bg-opacity-25 hover:bg-coal-light asa justify-between py-2 px-3 rounded-md cursor-pointer transition bg-coal-light bg-opacity-75 mk"
                      : "flex items-center justify-between py-2 px-3 rounded-md cursor-pointer asa text-xenos-500 bg-opacity-25   bg-coal-light mk"
                  }
                >
                  <span className="font-hand text-xl fg fgg2">LIL LISTING</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </button>
              </li>
              <li role="button" className="p-1 ucc">
                <button
                  onClick={MutantListing}
                  className={
                    changeColor != 8
                      ? "flex items-center hover:bg-opacity-25 hover:bg-coal-light asa justify-between py-2 px-3 rounded-md cursor-pointer transition bg-coal-light bg-opacity-75 mk"
                      : "flex items-center justify-between py-2 px-3 rounded-md cursor-pointer asa text-xenos-500 bg-opacity-25   bg-coal-light mk"
                  }
                >
                  <span className="font-hand text-xl fg fgg2">
                    MUTANT LISTING
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </button>
              </li>
              <li className="p-1 ucc">
                <a
                  onClick={LilStake}
                  className={
                    changeColor != 2
                      ? "flex items-center justify-between py-2 px-3 rounded-md asa cursor-pointer transition  hover:bg-opacity-25 hover:bg-coal-light mk"
                      : "flex items-center justify-between py-2 px-3 rounded-md asa cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light  text-xenos-500 mk"
                  }
                >
                  <span className="font-hand text-xl fg">Lil Staking</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    // style={{ display: "none" }}
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li>
              <li className="p-1 ucc">
                <a
                  onClick={MutantStaking}
                  className={
                    changeColor != 5
                      ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light po0"
                      : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500 po0"
                  }
                >
                  <span className="font-hand text-xl fg">Mutant Staking</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    // style={{ display: "none" }}
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li>
              <li className="p-1 ucc">
                <a
                  onClick={swapcoin}
                  className={
                    changeColor != 3
                      ? "flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition asa hover:bg-opacity-25 hover:bg-coal-light mk"
                      : "flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition asa hover:bg-opacity-25 hover:bg-coal-light text-xenos-500 mk"
                  }
                >
                  <span className="font-hand text-xl fg">Swap Coin</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    // style={{ display: "none" }}
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li>
              <li className="p-1 ucc">
                <a
                  onClick={swapnft}
                  className={
                    changeColor != 4
                      ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light"
                      : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500"
                  }
                >
                  <span className="font-hand text-xl fg fgg1">Swap NFT</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    style={{ display: "none" }}
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li>
              {/* <li className="p-1 ucc">
                <a
                  onClick={presale}
                  className={
                    changeColor != 5
                      ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light po0"
                      : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500 po0"
                  }
                >
                  <span className="font-hand text-xl fg">Presale</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    // style={{ display: "none" }}
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li> */}
              <li className="p-1 ucc">
                <a
                  onClick={() => setchangeColor(6)}
                  className={
                    changeColor != 6
                      ? "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light"
                      : "flex items-center asa justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light text-xenos-500"
                  }
                >
                  <span className="font-hand text-xl fg fgg1">Raffle</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons"
                    style={{ display: "none" }}
                  >
                    <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="bg-coal-dark border-2 border-coal-400 md:border-coal-light rounded-xl pt-pb dddn">
            <div className="flex items-center justify-between py-3 px-4 border-b border-coal-light">
              <span className="text-sm">Listing type</span>
            </div>
            <div>
              <ul className>
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm rounded-md cursor-pointer text-gray-400 hover:bg-opacity-25 hover:bg-coal-light">
                    <span>All types</span>
                    <input
                      // onClick={() => setradiochangeColor(false)}
                      // type="radio"
                      type="checkbox"
                      // onChange={this.handleCheck} defaultChecked={this.state.checked}
                      className="bg-coal-light fill-coal-dark transition duration-100 srg ease-in-out shadow-sm border-2 focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 text-xenos-500 !border-coal-light sr"
                    />
                  </label>
                </li>
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm rounded-md cursor-pointer text-gray-400 hover:bg-opacity-25 hover:bg-coal-light">
                    <span>Buy now</span>
                    <input
                      defaultValue="buy_now"
                      // type="radio"
                      type="checkbox"
                      className="bg-coal-light fill-coal-dark transition duration-100 ease-in-out shadow-sm border-2 focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 text-xenos-500 !border-coal-light"
                    />
                  </label>
                </li>
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm rounded-md cursor-pointer bg-coal-light bg-opacity-75 text-white">
                    <span>Raffle</span>
                    <input
                      defaultValue="raffle"
                      // type="radio"
                      type="checkbox"
                      className="bg-coal-light fill-coal-dark transition duration-100 ease-in-out shadow-sm border-2 focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 text-xenos-500 !border-coal-light"
                    />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-coal-dark border-2 border-coal-400 md:border-coal-light rounded-xl dddn">
            <div>
              <ul className="divide-y divide-coal-light">
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm hover:bg-opacity-25 hover:bg-coal-light rounded-md cursor-pointer text-gray-400">
                    <span>Show out of stock</span>
                    <span
                      role="checkbox"
                      aria-checked="true"
                      tabIndex={0}
                      className="-mr-1 relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 p-1 bg-coal-light rounded-full border-2 border-transparent focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50"
                    >
                      {/* <input type="hidden" /> */}
                      <span className="inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"></span>

                      <span
                        onClick={() => setcloseBtn1(!closeBtn1)}
                        className={
                          closeBtn1 == true
                            ? "inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"
                            : "inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs bg-xenos-500"
                        }
                      ></span>
                      <span
                        onClick={() => setcloseBtn1(!closeBtn1)}
                        className={
                          closeBtn1 == true
                            ? "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full bg-xenos-500 shadow flex items-center justify-center text-xenos-500 text-xs"
                            : "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full  shadow flex items-center justify-center text-xenos-500 text-xs"
                        }
                      ></span>
                    </span>
                  </label>
                </li>
                <li className="px-1">
                  <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm hover:bg-opacity-25 hover:bg-coal-light rounded-md cursor-pointer text-white">
                    <span>Show ended sales</span>
                    <span
                      tabIndex={0}
                      className="-mr-1 relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 border-2 border-transparent focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 p-1 bg-coal-light rounded-full"
                    >
                      <input type="hidden" defaultValue="true" />
                      <span
                        aria-checked="true"
                        className="inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"
                      ></span>
                      <span
                        onClick={() => setcloseBtn(!closeBtn)}
                        className={
                          closeBtn == true
                            ? "inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"
                            : "inline-block rounded-full bg-xenos-500 h-3 w-3 flex items-center justify-center text-xenos-500 text-gray-400 text-xs"
                        }
                      ></span>
                      <span
                        onClick={() => setcloseBtn(!closeBtn)}
                        className={
                          closeBtn == true
                            ? "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full bg-xenos-500 shadow flex items-center justify-center text-xenos-500 text-xs"
                            : "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full shadow flex items-center justify-center text-xenos-500 text-xs"
                        }
                      ></span>
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="nftleft">
        <Container centerContent className="nfns">
          {/* <div className="sri"> */}
          <fieldset className="field-container">
            <input
              type="text"
              placeholder="Search Listings..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="field"
            />
            <div className="icons-container">
              <div className="icon-search" />
              <div className="icon-close">
                <div className="x-up" />
                <div className="x-down" />
              </div>
            </div>
          </fieldset>
          {/* <Image src={RefreshbImg} /> */}
          {/* </div> */}

          <div className={styles.collectionContainer}>
            <div className={styles.detailPageContainer}>
              {!loadingMetadata ? (
                <>
                  <img
                    className="iimg"
                    src="https://gateway.pinata.cloud/ipfs/QmUQLuLudnP97okmk6ZRb2egfPSJNoheZDqvLcvApepNzm?_gl=1*1wj90be*_ga*MTAxNzI1NTk2Ny4xNjc2MDU4NDU2*_ga_5RMPXG14TE*MTY3NjA1ODQ1Ny4xLjEuMTY3NjA1ODg0OC41My4wLjA."
                    // https://ik.imagekit.io/alienfrens/app-assets/background-market.jpg
                    alt=""
                  />
                  <h3 className="frs">Ape Club Marketplace</h3>
                  {/* <h1>{contractMetadata?.name}</h1>
              <p>{contractMetadata?.description}</p> */}

                  <div className="ydd">
                    <Select placeholder="Enable drop mode" className="yellowdd">
                      {/* <option value="Price Low to High">UFO stays Drop</option> */}
                      {/*<option value="Price High to Low">
                        Trick or Treat Bag
                      </option>
                      <option value="Stock Low to High">
                        Frens Radio Whitelist
                      </option>
                      <option value="Stock High to Low">
                        Anniversary Restock - UFO
                      </option>
                      <option value="Sale Ends Soon">
                        Anniversary Restock - Shirt
                      </option>
                      <option value="Price Low to High">
                        Anniversary Restock - Pillows
                      </option>
                      <option value="Price High to Low">
                        Anniversary Restock - Ledger
                      </option>
                      <option value="Stock Low to High">
                        Anniversary Restock - Hat
                      </option>
                      <option value="Stock High to Low">
                        Anniversary Restock - French Cookies
                      </option>
                      <option value="Sale Ends Soon">
                        Anniversary Restock - Blockchain for Babies
                      </option>

                      <option value="Sale Ends Soon">
                        Anniversary Restock - Alien Frens Evoluation
                      </option>
                      <option value="Price Low to High">
                        Anniversary Restock - Alien Frens
                      </option>
                      <option value="Price High to Low">
                        Anniversary Restock - Air Freshener
                      </option>
                      <option value="Stock Low to High">
                        Anniversary Restock - Hat
                      </option>
                      <option value="Stock High to Low">
                        Anniversary Restock - French Cookies
                      </option>
                      <option value="Sale Ends Soon">
                        Anniversary Restock - Blockchain for Babies
                      </option> */}
                    </Select>
                  </div>
                </>
              ) : (
                <div className={styles.loading}>
                  <Spinner size="md" />
                </div>
              )}
              <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />
            </div>

            <Select placeholder="Recently listed">
              <option value="Price Low to High">Price low to high</option>
              <option value="Price High to Low">Price high to low</option>
              <option value="Stock Low to High">Price low to high</option>
              <option value="Stock High to Low">Price high to low</option>
              <option value="Sale Ends Soon">Sale Ends Soon</option>
            </Select>

            <div className="reload filter" onClick={onOpen}>
              <Image src={filterImg} width={25} height={25} />
            </div>

            <div className="reload">
              <Image src={RefreshbImg} width={25} height={25} />
            </div>

            {!isLoading ? (
              <div className={styles.nftBoxGrid}>
                {listings
                  ?.filter((listing) => listing.type === filter)
                  ?.map((listing) =>
                    inputValue == null || inputValue == "" ? (
                      <Link
                        className={styles.nftBox}
                        key={listing.id.toString()}
                        href={`/listing/${listing.id}`}
                      >
                        <Card maxW="sm" overflow="hidden">
                          {/* <ThirdwebNftMedia
                        metadata={{ ...listing.asset.image }}
                        className={styles.nftMedia}
                      /> */}
                          <MediaRenderer
                            src={listing.asset.image}
                            style={{
                              objectFit: "cover",
                            }}
                            className={
                              "h-[244px] rounded-lg transition duration-300 ease-in-out hover:scale-105"
                            }
                          />

                          <CardBody style={{ padding: "15px" }}>
                            <h4>{listing.asset.name}</h4>
                            <h4>Render Count: {inputValue}</h4>
                          </CardBody>
                          <Divider />
                          <CardFooter style={{ padding: "10px" }}>
                            <p>
                              {listing.buyoutCurrencyValuePerToken.displayValue}{" "}
                              {listing.buyoutCurrencyValuePerToken.symbol}
                            </p>
                          </CardFooter>
                        </Card>
                      </Link>
                    ) : inputValue == listing.asset.name ? (
                      <Link
                        className={
                          styles.nftBox +
                          (inputValue == listing.asset.name ? "active" : "")
                        }
                        key={listing.id.toString()}
                        href={`/listing/${listing.id}`}
                      >
                        <Card maxW="sm" overflow="hidden">
                          {/* <ThirdwebNftMedia
                                          metadata={{ ...listing.asset.image }}
                                          className={styles.nftMedia}
                                        /> */}
                          <MediaRenderer
                            src={listing.asset.image}
                            style={{
                              objectFit: "cover",
                            }}
                            className={
                              "h-[244px] rounded-lg transition duration-300 ease-in-out hover:scale-105"
                            }
                          />

                          <CardBody style={{ padding: "15px" }}>
                            <h4>{listing.asset.name}</h4>
                            {/* <h4>Render Count: {inputValue}</h4> */}
                          </CardBody>
                          <Divider />
                          <CardFooter style={{ padding: "10px" }}>
                            <p>
                              {listing.buyoutCurrencyValuePerToken.displayValue}{" "}
                              {listing.buyoutCurrencyValuePerToken.symbol}
                            </p>
                          </CardFooter>
                        </Card>
                      </Link>
                    ) : (
                      <>
                        {/* <Card className={(inputValue == listing.asset.name ? 'active' : '')}>


                        </Card> */}
                        <h4 style={{ display: "none" }}></h4>
                      </>
                    )
                  )}
              </div>
            ) : (
              <>
                <div className={styles.loading}>
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                </div>
              </>
            )}
          </div>
        </Container>
      </div>

      {/* <button onClick={onOpen}>Open Modal</button> */}

      <div className="bbg">
        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Filters</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
              <div className="modalbox">
                <Select placeholder="Enable drop mode" className="yellowdd">
                  {/* <option value="Price Low to High">UFO stays Drop</option>
                  <option value="Price High to Low">Trick or Treat Bag</option>
                  <option value="Stock Low to High">
                    Frens Radio Whitelist
                  </option>
                  <option value="Stock High to Low">
                    Anniversary Restock - UFO
                  </option>
                  <option value="Sale Ends Soon">
                    Anniversary Restock - Shirt
                  </option>
                  <option value="Price Low to High">
                    Anniversary Restock - Pillows
                  </option>
                  <option value="Price High to Low">
                    Anniversary Restock - Ledger
                  </option>
                  <option value="Stock Low to High">
                    Anniversary Restock - Hat
                  </option>
                  <option value="Stock High to Low">
                    Anniversary Restock - French Cookies
                  </option>
                  <option value="Sale Ends Soon">
                    Anniversary Restock - Blockchain for Babies
                  </option>

                  <option value="Sale Ends Soon">
                    Anniversary Restock - Alien Frens Evoluation
                  </option>
                  <option value="Price Low to High">
                    Anniversary Restock - Alien Frens
                  </option>
                  <option value="Price High to Low">
                    Anniversary Restock - Air Freshener
                  </option>
                  <option value="Stock Low to High">
                    Anniversary Restock - Hat
                  </option>
                  <option value="Stock High to Low">
                    Anniversary Restock - French Cookies
                  </option>
                  <option value="Sale Ends Soon">
                    Anniversary Restock - Blockchain for Babies
                  </option> */}
                </Select>
              </div>

              <div className="recentlisted">
                <Select placeholder="Recently listed">
                  <option value="Price Low to High">Price low to high</option>
                  <option value="Price High to Low">Price high to low</option>
                  <option value="Stock Low to High">Price low to high</option>
                  <option value="Stock High to Low">Price high to low</option>
                  <option value="Sale Ends Soon">Sale Ends Soon</option>
                </Select>
              </div>

              <div>
                <div className="bg-coal-dark border-2 border-coal-400 md:border-coal-light rounded-xl pt-pb">
                  <div className="flex items-center justify-between py-3 px-4 border-b border-coal-light">
                    <span className="text-sm">Listing type</span>
                  </div>
                  <div>
                    <ul className>
                      <li className="px-1">
                        <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm rounded-md cursor-pointer text-gray-400 hover:bg-opacity-25 hover:bg-coal-light">
                          <span>All types</span>
                          <input
                            // onClick={() => setradiochangeColor(false)}
                            // type="radio"
                            type="checkbox"
                            // onChange={this.handleCheck} defaultChecked={this.state.checked}
                            className="bg-coal-light fill-coal-dark transition duration-100 srg ease-in-out shadow-sm border-2 focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 text-xenos-500 !border-coal-light sr"
                          />
                        </label>
                      </li>
                      <li className="px-1">
                        <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm rounded-md cursor-pointer text-gray-400 hover:bg-opacity-25 hover:bg-coal-light">
                          <span>Buy now</span>
                          <input
                            defaultValue="buy_now"
                            // type="radio"
                            type="checkbox"
                            className="bg-coal-light fill-coal-dark transition duration-100 ease-in-out shadow-sm border-2 focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 text-xenos-500 !border-coal-light"
                          />
                        </label>
                      </li>
                      <li className="px-1">
                        <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm rounded-md cursor-pointer bg-coal-light bg-opacity-75 text-white">
                          <span>Raffle</span>
                          <input
                            defaultValue="raffle"
                            // type="radio"
                            type="checkbox"
                            className="bg-coal-light fill-coal-dark transition duration-100 ease-in-out shadow-sm border-2 focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 text-xenos-500 !border-coal-light"
                          />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-coal-dark border-2 border-coal-400 md:border-coal-light rounded-xl">
                  <div>
                    <ul className="divide-y divide-coal-light">
                      <li className="px-1">
                        <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm hover:bg-opacity-25 hover:bg-coal-light rounded-md cursor-pointer text-gray-400">
                          <span>Show out of stock</span>
                          <span
                            role="checkbox"
                            aria-checked="true"
                            tabIndex={0}
                            className="-mr-1 relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 p-1 bg-coal-light rounded-full border-2 border-transparent focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50"
                          >
                            {/* <input type="hidden" /> */}
                            <span className="inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"></span>

                            <span
                              onClick={() => setcloseBtn1(!closeBtn1)}
                              className={
                                closeBtn1 == true
                                  ? "inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"
                                  : "inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs bg-xenos-500"
                              }
                            ></span>
                            <span
                              onClick={() => setcloseBtn1(!closeBtn1)}
                              className={
                                closeBtn1 == true
                                  ? "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full bg-xenos-500 shadow flex items-center justify-center text-xenos-500 text-xs"
                                  : "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full  shadow flex items-center justify-center text-xenos-500 text-xs"
                              }
                            ></span>
                          </span>
                        </label>
                      </li>
                      <li className="px-1">
                        <label className="flex items-center justify-between py-3 md:py-2 px-3 text-sm hover:bg-opacity-25 hover:bg-coal-light rounded-md cursor-pointer text-white">
                          <span>Show ended sales</span>
                          <span
                            tabIndex={0}
                            className="-mr-1 relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 border-2 border-transparent focus:ring-2 focus:ring-xenos-500 focus:outline-none focus:ring-opacity-50 p-1 bg-coal-light rounded-full"
                          >
                            <input type="hidden" defaultValue="true" />
                            <span
                              aria-checked="true"
                              className="inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"
                            ></span>
                            <span
                              onClick={() => setcloseBtn(!closeBtn)}
                              className={
                                closeBtn == true
                                  ? "inline-block rounded-full h-3 w-3 flex items-center justify-center text-gray-400 text-xs"
                                  : "inline-block rounded-full bg-xenos-500 h-3 w-3 flex items-center justify-center text-xenos-500 text-gray-400 text-xs"
                              }
                            ></span>
                            <span
                              onClick={() => setcloseBtn(!closeBtn)}
                              className={
                                closeBtn == true
                                  ? "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full bg-xenos-500 shadow flex items-center justify-center text-xenos-500 text-xs"
                                  : "inline-block absolute transform translate-x-full transition ease-in-out duration-200 h-3 w-3 rounded-full shadow flex items-center justify-center text-xenos-500 text-xs"
                              }
                            ></span>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Done
              </Button>
              {/* <Button variant='ghost'></Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}
