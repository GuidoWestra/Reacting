import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home"
import Navigation from "./Components/Navigation";

function App() {


  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
