import * as React from "react";
import { VStack } from "@chakra-ui/react";
import Navbar from "./Navbar";
/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      bgImage="url('./pic.jpg')"
      bgSize='cover'
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        <Navbar></Navbar>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
