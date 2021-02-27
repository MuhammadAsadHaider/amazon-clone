import React from "react";
import Product from "../Product";
import "./style.css";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Background"
        className="home__image"
      />
      <div className="home__products">
        <Product
          title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black"
          image="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2309B35A28833317._V535730076_.jpg"
          price={100}
          rating={3}
          id={123}
          key={123}
        />
        <Product
          title="Amazon Basics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
          image="https://images-na.ssl-images-amazon.com/images/I/51GTuVaUpdL.jpg"
          price={100}
          rating={5}
          id={321}
          key={321}
        />
      </div>
    </div>
  );
}

export default Home;
