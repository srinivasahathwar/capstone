import React from "react";
import Header from "../../components/Header/Header";
import About from "../../components/Home/About/About";
import Footer from "../../components/Footer/Footer";
const AboutPage = () => {

    return (
        <div>
          <Header page="about" />
          <About />
          <Footer />
        </div>
      );
}

export default AboutPage;