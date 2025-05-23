import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import languages from "./components/variables/languages";

export default function App() {
  return (
    <>
      <Header />
      <Main languages={languages} />
      <Footer />
    </>
  );
}
