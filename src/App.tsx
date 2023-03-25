import { ChakraProvider, theme } from "@chakra-ui/react";
import Article from "./components/Article";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";

export const App = () => (
  <ChakraProvider theme={theme}>
    <>
      <Header />
      <Section />
      <Main />
      <Aside />
      <Article />
    </>
  </ChakraProvider>
);
