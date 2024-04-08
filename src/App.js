import React from "react";
import { FiMenu } from "react-icons/fi";
import Logo from '../src/logo.png'

function App() {
  return (
    <div className="flex justify-between items-center p-8">
      <div className="flex items-center">
        <img src={Logo} alt='Mungeri dhaba' className="w-1/5"></img>
        <h1 className="text-black text-7xl font-bold">Mungeri</h1>
        <h1 class="text-red-600 text-7xl font-bold justify-center">Dhaba</h1>
      </div>
      <FiMenu className="text-black text-6xl " />
    </div>
  );
}

export default App;
