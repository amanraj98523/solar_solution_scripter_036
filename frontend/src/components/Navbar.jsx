import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, useNavigate } from "react-router-dom";

const Links = ["Dashboard"];

const Navlink = ({ children, onClick }) => (
  <Box
    as={ScrollLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "transparent",
      color: "#3E3E3E",
    }}
    _focus={{
      boxShadow: "none",
    }}
    to={children.toLowerCase()}
    smooth={true}
    duration={500}
    style={{ cursor: "pointer" }}
    onClick={onClick}
    color="#3E3E3E"
  >
    {children}
  </Box>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <Box
      bg="#ffffff"
      px={4}
      position="sticky"
      top={0}
      zIndex={1000}
      as="header"
      w="full"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box
          fontWeight="bold"
          color="#8853bf"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="pa1.png" alt="logo" width={150} height={30} />
        </Box>{" "}
        {/* Accent color for the logo */}
        <HStack spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <Navlink key={link} onClick={onClose}>
                {link}
              </Navlink>
            ))}
          </HStack>
          <Button
            as="a"
            href="Dashboard.jsx"
            color="black"
            bg="#f3e3ff"
            _hover={{
              color: "#3E3E3E",
            }}
          >
            Dashboard
          </Button>
          <Button
            as={NavLink}
            to={"login"}
            //href="/login"
            color="black"
            bg="#f3e3ff"
            _hover={{
              color: "#3E3E3E",
            }}
          >
            Login
          </Button>
          <Button
            as={NavLink}
            to={"signup"}
            //href="/signup"
            color="#0a0a0a"
            bg="#8853bf"
            _hover={{
              color: "#3E3E3E",
            }}
          >
            Sign Up
          </Button>
          <Menu isOpen={isOpen}>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              onClick={isOpen ? onClose : onOpen}
              minW={0}
              display={{ md: "none" }}
            >
              <IconButton
                size={"md"}
                bg={"#f3e3ff"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                _hover={{
                  bg: "#f3e3ff",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              />
            </MenuButton>
            <MenuList bg={"#f3e3ff"} borderColor="#f3e3ff">
              {Links.map((link) => (
                <MenuItem bg={"#f3e3ff"} key={link} onClick={onClose}>
                  <Navlink onClick={onClose}>{link}</Navlink>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};
