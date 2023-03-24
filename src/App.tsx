import { ChakraProvider, Text, theme } from "@chakra-ui/react";
import Header from "./components/Header";
import Navbar from "./components/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <>
      <Header />
    </>
  </ChakraProvider>
);
