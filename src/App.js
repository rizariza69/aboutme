import React, { Fragment } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Footer from "../src/components/Footer";
import Resume from "../src/components/Resume";
import Portofolio from "../src/components/Portofolio";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <div class="container">
        <Resume />
      </div>
      <Portofolio />
      <Footer />
    </Fragment>
  );
}

export default App;
