import React from 'react';
import Anxiety from "./Components/Anxiety";
import Care from "./Components/Care";
import Footer from "./Components/Footer"
import Goal from "./Components/Goal"
import Growth from "./Components/Growth"
import Healing from "./Components/Healing"
import Navbar from "./Components/Navbar"
import Ready from "./Components/Ready"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Anxiety/>
      <Goal/>
      <Care/>
      <Growth/>
      <Ready/>
      <Healing/>
      <Footer/>
    </div>
  );
}

export default App;
