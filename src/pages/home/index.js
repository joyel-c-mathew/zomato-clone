import React, { useState } from 'react'
import Header from '../../components/common/header'
import TapOptions from '../../components/common/tabOptions'
import Footer from '../../components/common/footer'
import Delivery from '../../components/dellivery';
import DiningOut from '../../components/diningOut';
import Nightlife from '../../components/nightlife';

const Homepage = () => {

  const [activeTab, setActiveTab] = useState("Delivery")
  return (
    <div>
      <Header />
      <TapOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />

    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />
    case "Dining Out":
      return <DiningOut />
    case "Nightlife":
      return <Nightlife />

    default:
      return <Delivery />

  }
};

export default Homepage
