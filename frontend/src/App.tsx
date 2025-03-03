import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import { UserProvider } from "./contexts/UseAuth";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <div className="   h-full">
          <div className=" bg-sky-100 min-h-lvh">
            <Outlet></Outlet>
          </div>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
