import React from "react";
import { useAuth } from "../../contexts/UseAuth";

type Props = {};

const NavBar = (props: Props) => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {!isLoggedIn() ? (
              <>
                <a href="login" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
                  Login
                </a>
                <a href="register" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
                  Signup
                </a>
              </>
            ) : (
              <a
                href="/"
                onClick={(e) => {
                  logout();
                }}
                className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">
                Logout
              </a>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
