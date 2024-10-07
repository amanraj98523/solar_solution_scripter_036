import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  AvatarBadge,
  Flex,
  IconButton,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import img from "../assets/1.png";
import axios from "axios";

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const onLogout = async () => {
  //   const refreshToken = localStorage.getItem("refreshToken");
  //   console.log("Sending refresh token:", refreshToken); // Log the refresh token for debugging

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3200/api/logout", // Ensure this URL is correct
  //       { refreshToken: localStorage.getItem("refreshToken") }, // Send the refresh token in the request body
  //       {
  //         withCredentials: true, // Include cookies
  //       }
  //     );

  //     console.log("Logout response:", response.data); // Log the response for debugging

  //     // Clear tokens and authentication state
  //     localStorage.removeItem("accessToken");
  //     localStorage.removeItem("refreshToken");

  //     setIsAuthenticated(false); // Update state to reflect logged-out status
  //     navigate("/login"); // Redirect to login page
  //   } catch (error) {
  //     console.error("Error logging out:", error.response.data); // Log the error response for debugging
  //   }
  // };
  const onLogout = async () => {
    try {
      // Retrieve refresh token from cookies
      const refreshToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("refreshToken="))
        ?.split("=")[1]; // Optional chaining to handle case where token is missing

      if (!refreshToken) {
        throw new Error("Refresh token not found in cookies");
      }

      // Send logout request with refresh token
      const response = await axios.post(
        "http://localhost:3200/api/logout",
        {
          refreshToken,
        },
        {
          withCredentials: true, // Ensure cookies are sent with the request
        }
      );

      // Clear tokens from localStorage
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      setIsAuthenticated(false); // Update authentication state
      navigate("/login"); // Redirect to the login page
    } catch (error) {
      console.error(
        "Error logging out:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <Box
      as="nav"
      bg="#8853bf"
      p="4"
      boxShadow="md"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center" wrap="wrap">
        <IconButton
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
          bg="teal.500"
          _hover={{ bg: "teal.600" }}
          aria-label="Open Sidebar"
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="wheat"
          borderRadius="50%"
          w="50px"
          h="50px"
          marginRight="auto"
          marginLeft="auto"
        >
          <Image src={img} alt="see" borderRadius="full" boxSize="60px" />
        </Box>
        <Box color={"white"} fontWeight="bold" fontSize="26px">
          POLLING ARENA
        </Box>

        <HStack spacing="4" flex="1" justify="center">
          <Button
            as={Link}
            to="/home"
            colorScheme="#f3e3ff"
            variant="solid"
            size="md"
            borderRadius="md"
            _hover={{ bg: "#3E3E3E" }}
          >
            Home
          </Button>
          <Button
            as={Link}
            to="/contact"
            colorScheme="#f3e3ff"
            variant="solid"
            size="md"
            borderRadius="md"
            _hover={{ bg: "#3E3E3E" }}
          >
            Contact
          </Button>
        </HStack>

        {isAuthenticated ? (
          <>
            {user === "Admin@gmail.com" && (
              <Text
                as={Link}
                to="/admin"
                color="white"
                m="5px"
                variant="solid"
                size="md"
                borderRadius="md"
                _hover={{ bg: "teal.200" }}
              >
                Admin
              </Text>
            )}
            <Menu>
              <MenuButton
                as={Button}
                colorScheme="teal"
                variant="outline"
                borderRadius="md"
                rightIcon={<ChevronDownIcon />}
              >
                <Avatar size="md" name="User" cursor="pointer">
                  <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </>
        ) : (
          <>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={
                  <Avatar size="md" name="User" cursor="pointer">
                    <AvatarBadge boxSize="1.25em" bg="tomato" />
                  </Avatar>
                }
                variant="outline"
                borderColor="teal.600"
              >
                <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to="/login">
                  Login
                </MenuItem>
                <MenuItem as={Link} to="/signup">
                  Register
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;

