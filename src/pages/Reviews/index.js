import React from "react";
import Header from "../../components/Header/Header";
import Reservation from "../../components/Home/Reservation/Reservation";
import Footer from "../../components/Footer/Footer";
const ReservationPage = () => {

    return (
        <div>
          <Header page="reviews" />
          <Reservation />
          <Footer />
        </div>
      );
}

export default ReservationPage;