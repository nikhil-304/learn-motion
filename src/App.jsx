import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Card from "./components/Card";
import Btn from "./components/Btn";
import Hello from "./components/Hello";
import FloatingNav from "./components/FloatingNav";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-50 flex items-center justify-center relative overflow-hidden">
      {/* Main Content Area */}
      <div className="w-full h-full flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Navigate to="/card" replace />} />
          <Route path="/card" element={<Card />} />
          <Route path="/btn" element={<Btn />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </div>

      {/* Floating Navigation */}
      <FloatingNav />
    </div>
  );
};

export default App;
