import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import { UserProvider } from "./contexts/UseAuth";

function App() {
  return (
    <div className="App font-sans antialiased text-slate-100 selection:bg-[#425D94] selection:text-white">
      <UserProvider>
        <div className="min-h-screen bg-gradient-to-br from-[#090e1a] via-[#0d1526] to-[#16233f] text-slate-100">
          <Outlet></Outlet>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;


