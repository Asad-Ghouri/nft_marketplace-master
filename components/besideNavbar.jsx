import React from 'react'

import {
  Link,
} from "@chakra-ui/react";

export default function BesideNavbar() {
  return (
    <div className="bg-coal-dark border-2 border-coal-light rounded-xl">
    <ul className="bg-coal-light bg-opacity-25 rounded-xl divide-y divide-coal-light">
      <li className="p-1">
        <Link to="" className="flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition bg-coal-light bg-opacity-75 text-xenos">
          <span className="font-hand text-xl">
            All Listings
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons snipcss0-6-6-8">
            <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right" className="snipcss0-7-8-9">
            </use>
          </svg>
        </Link>
      </li>
      <li className="p-1">
        <Link href="" className="flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light">
          <span className="font-hand text-xl">
            NFTs
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons snipcss0-6-11-13" style={{display: 'none'}}>
            <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right" className="snipcss0-7-13-14">
            </use>
          </svg>
        </Link>
      </li>
      <li className="p-1">
        <Link href="" className="flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light">
          <span className="font-hand text-xl">
            Whitelists
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons snipcss0-6-16-18" style={{display: 'none'}}>
            <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right" className="snipcss0-7-18-19">
            </use>
          </svg>
        </Link>
      </li>
      <li className="p-1">
        <a href="/market?category=eK1ydlN305490nv8" className="flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light">
          <span className="font-hand text-xl">
            Clothing and Apparel
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons snipcss0-6-21-23" style={{display: 'none'}}>
            <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right" className="snipcss0-7-23-24">
            </use>
          </svg>
        </a>
      </li>
      <li className="p-1">
        <Link href="" className="flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light">
          <span className="font-hand text-xl">
            Custom Items
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons snipcss0-6-26-28" style={{display: 'none'}}>
            <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right" className="snipcss0-7-28-29">
            </use>
          </svg>
        </Link>
      </li>
      <li className="p-1">
        <Link to="" className="flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition hover:bg-opacity-25 hover:bg-coal-light">
          <span className="font-hand text-xl">
            Experiences
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="-mr-1 w-5 h-5 fill-current transition icon sprite-icons snipcss0-6-31-33" style={{display: 'none'}}>
            <use href="/_nuxt/90542362d159cf028adfa51646312af4.svg#i-chevron-right" className="snipcss0-7-33-34">
            </use>
          </svg>
        </Link>
      </li>
    </ul>
  </div>
  )
}
