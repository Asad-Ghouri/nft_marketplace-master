import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";

import NavHoverBox from "../components/NavHoverBox";

import Image from "next/image";

import { useRouter } from "next/router";

export default function NavItem({
  icon,
  title,
  description,
  active,
  navSize,
  c_path,
  navSize1,
}) {
  const router = useRouter();

  function rendeer() {
    router.push("/" + c_path);
  }

  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active && "#AEC8CA"}
          p={3}
          borderRadius={8}
          // _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
          w={navSize == "large" && "100%"}
        >
          <MenuButton w="100%" onClick={rendeer}>
            <Flex>
              <Image
                src={icon}
                className={navSize == "small" ? "navsmall" : "navlarge"}
                id="eeeg"
              />
              <Text
                ml={5}
                className="sbtext"
                display={navSize == "small" ? "none" : "flex"}
                id="tttl"
              >
                {title}
              </Text>
            </Flex>
            {/* className="sbimg"  */}
          </MenuButton>
        </Link>
        <MenuList py={0} border="none" w={200} h={200} ml={5}>
          {/* <NavHoverBox title={title} icon={icon} description={description} /> */}
        </MenuList>
      </Menu>
    </Flex>
  );
}
