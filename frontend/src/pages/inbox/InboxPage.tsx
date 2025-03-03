import React from "react";
import SideNav from "../../components/SideNav/SideNav";
import NavBar from "../../components/NavBar/NavBar";
import { useAuth } from "../../contexts/UseAuth";

type Props = {};

const InboxPage = (props: Props) => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={`w-full m-0 ${isLoggedIn() ? "ps-64" : "p-0"}`}>
      {isLoggedIn() ? <SideNav></SideNav> : <></>}
      <NavBar></NavBar>
    </div>
  );
};

export default InboxPage;
