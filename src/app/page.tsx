 
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OurProduct from "./components/ourProductt";
import SubscribeNewsletter from "./components/Subscribetoournewslatter";
import TrainLikeaChampion from "./components/TrainLikeaChampion";
import WhatOurClientsAreSaying from "./components/WhatOurClientsAreSaying";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurProduct />
      <TrainLikeaChampion />
     <WhatOurClientsAreSaying />
     <SubscribeNewsletter/>
     <Footer/>
     </div>
  );
}
