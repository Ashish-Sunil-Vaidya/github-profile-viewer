/* eslint-disable react-refresh/only-export-components */
import { Header, Body, Footer } from "./components";
import {memo} from "react";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default memo(App);
