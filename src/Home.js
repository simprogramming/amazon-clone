import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
  return (
    <div className="home" >
      <img
        className="home__image"
        src="/banner.png"
        alt=""/>
      <div className="home__row">
        <Product
          id="1234315"
          title="The Lean Startup How constant innovation creates radically successful Businesses"
          price={11.96}
          rating={5}
          image="/leanstartup.png" />
        <Product
          id="123431523"
          title="Echo Plus (2nd gen) – Premium sound with built-in smart home hub"
          price={89.99}
          rating={5}
          image="/product1.png" />
      </div>
      <div className="home__row">
        <Product
          id="1234313245"
          title="Garmin Vívoactive 4S, Smaller-Sized GPS Smartwatch, Features Music, Body Energy Monitoring, Animated Workouts, Pulse Ox Sensors and More, Silver with Gray Band"
          price={378.99}
          rating={4}
          image="/product2.png" />
        <Product
          id="12343"
          title="FORM Smart Swim Goggles, Activity Tracker with a See-Through Display Built into Swimming Goggles, Silver Mirrored Lens, Over 12 customizable metrics, including split times, stroke rate/count."
          price={479.96}
          rating={3}
          image="/product3.png" />
          <Product
          id="123431513"
          title="ASUS Computer INTL ZenBook 14 Ultra-Slim Laptop 14” Full HD NanoEdge Bezel, Intel Core i7-1065G7, 8GB RAM, 512GB PCIe SSD, Windows 10 Home - UX425JA-EB51, Pine Grey"
          price={1199.00}
          rating={4}
          image="/product4.png" />
      </div>
      <div className="home__row">
        <Product
          id="1234312315"
          title="Toshiba 32-inch 720p HD Smart LED TV - Fire TV Edition - Released 2020 60Hz refresh rate and 6.5ms - response time offer smooth, fluid movement even while watching fast moving content like sports and action movies -Amazon Fire TV operating system has a simple user interface to navigate through the apps and connectivity options -Built-in Amazon Alexa voice assistant lets you control the TV and access the online content through simple voice commands"
          price={329.99}
          rating={3}
          image="/product5.png" />
      </div>
    </div>
  );
}

export default Home
