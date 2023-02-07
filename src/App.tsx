import { useState } from "react";
import ReactSwitch from "react-switch";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { Header } from "./componenets/Header/Header";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { themeLight } from "./styles/themes/themeLight";
import body_escuro from './Assets/body_escuro.png';
import body_white from './Assets/body_white.png';
import { ContentHome } from "./componenets/ContentHome/ContentHome";
import { ContentSecond } from "./componenets/ContentSecond/ContentSecond";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Portfolio } from "./componenets/Portfolio/Portfolio";
import { SkeletonTheme } from "react-loading-skeleton";
import { Cursos } from "./componenets/Cursos/Cursos";
import { Navigate } from "./componenets/Navigate/Navigate";
import { Contact } from "./componenets/Contact/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function App() {
  
  const [theme, setTheme] = useState(true);

  function handleTheme(){
      setTheme(!theme);
  }

  return (
    
    <SkeletonTheme baseColor="#202020" highlightColor="white">
    <BrowserRouter>
      <ThemeProvider theme={theme == true ? defaultTheme : themeLight}>
          <GlobalStyle />
          <ToastContainer autoClose={2000} />
          <Navigate />
          <Routes>
            <Route path="/" element={<ContentHome />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
    </SkeletonTheme>
  )
}
