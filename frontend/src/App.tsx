import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import { UserProvider } from "./contexts/UseAuth";

function App() {
  return (
    <div className="App font-sans antialiased text-slate-100 selection:bg-indigo-500 selection:text-white">
      <UserProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100">
          <Outlet></Outlet>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;

