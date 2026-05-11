import React from "react";
import { motion, useScroll } from "motion/react";
import SheriyansMotion from "./pages/SheriyansMotion";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <Card />
    </div>
  );
};

export default App;
