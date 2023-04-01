import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Article from './components/Articlee/Article';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Solutions from './pages/Solutions/Solutions';
import Resources from './pages/Resources/Resources';
import Unlockpro from './pages/Unlockpro/Unlockpro';
import Challengess from './pages/Challenges/Challengess';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Challengess />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/unlockpro" element={<Unlockpro />} />
      </Routes>
    </BrowserRouter>
    <Article />
    <Footer />
  </ChakraProvider>
);

