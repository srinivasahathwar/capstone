import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Home/Menu/Menu";
import Footer from "../../components/Footer/Footer";
const MenuPage = () => {

    return (
        <div>
          <Header page="menu" />
          <Menu />
          <Footer />
        </div>
      );
}

export default MenuPage;