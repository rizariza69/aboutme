import React, { Fragment } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Footer from "../src/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <div class="container"></div>
      <Footer />
    </Fragment>
  );
}

export default App;
