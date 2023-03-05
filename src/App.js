import './App.css';

import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home"
import PricingPage from "./Pages/PricingPage";
import FeaturesPage from './Pages/FeaturesPage';

import Navigation from "./Components/Navigation";

function App() {


  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/Pricing" element={<PricingPage />}></Route>
        <Route path="/Features" element={<FeaturesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;