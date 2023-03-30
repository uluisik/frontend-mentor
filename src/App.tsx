import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Article from './components/Articlee/Article';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Challenge from './pages/Challenge/Challenge';
import Home from './pages/Home/Home';
import Solutions from './pages/Solutions/Solutions';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </BrowserRouter>
    <Article />
    <Footer />
  </ChakraProvider>
);

