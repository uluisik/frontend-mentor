import { ChakraProvider, theme } from "@chakra-ui/react";
import Header from "./components/Header";
import Section from "./components/Section";

export const App = () => (
  <ChakraProvider theme={theme}>
    <>
      <Header />
      <Section />
    </>
  </ChakraProvider>
);
