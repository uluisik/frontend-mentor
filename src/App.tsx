import { ChakraProvider, theme } from "@chakra-ui/react";
import Article from "./components/Article";
import Aside from "./components/Aside";
import Header from "./components/Header/Header";

import Intro from "./components/Intro";
import Main from "./components/Main/Main";

export const App = () => (
  <ChakraProvider theme={theme}>
    <>
      <Header />
      <Intro />
      <Main />
      <Aside />
      <Article />
    </>
  </ChakraProvider>
);
