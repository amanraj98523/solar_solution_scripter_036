"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      /*
      const response = {
        data: {
          accessToken: "dsfs",
          refreshToken: "Dfs",
        },
      };
      */
      const response = await axios.post("/auth/login", { email, password });

      console.log("API response:", response);

      if (
        response.data &&
        response.data.accessToken &&
        response.data.refreshToken
      ) {
        const { accessToken, refreshToken } = response.data;
        Cookies.set("accessToken", accessToken, {
          secure: true,
          sameSite: "Strict",
        });
        Cookies.set("refreshToken", refreshToken, {
          secure: true,
          sameSite: "Strict",
        });
        localStorage.setItem("accessToken", accessToken);
        const user = email;
        localStorage.setItem("user", user);

        toast({
          title: "Login successful.",
          description: "You have been successfully logged in.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.error("Login error:", err);

      toast({
        title: "Login failed.",
        description:
          err.response?.data?.message ||
          err.message ||
          "Please check your credentials.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                onClick={handleSubmit}
                bg={"#8853bf"}
                color={"white"}
                _hover={{
                  bg: "#f3e3ff",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
