import React from "react";
import Booklist from "../components/book/Booklist";
import Hero from "../components/hero/Hero";
import InputFeild from "../components/search/InputFeild";

export default function Home() {
  return (
    <>
      <Hero />
      <InputFeild />
      <Booklist />
    </>
  );
}
