import React, { useContext } from "react";
import { Link } from "react-router";
import { UserInfo } from "../contexts/UserContext";
import { ReferAuth } from "../contexts/ReferAuthContext";

const Nav = () => {
  const [state] = useContext(UserInfo);
  const [googleAuth, facebookAuth, gitHubAuth, handleSignOut] =
    useContext(ReferAuth);

    
  return (
    <div className="flex justify-between p-4 border-b border-gray-400 sticky top-0 z-50 backdrop-blur-lg">
      <h1 className="font-bold text-3xl bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
        Form Auth
      </h1>
      <ul className="flex items-center gap-3">
        <li>
          <Link to={"/"} className="hover:text-blue-500">
            Profile
          </Link>
        </li>
        {state.user ? (
          <li>
            <button
              onClick={handleSignOut}
              className="bg-emerald-800 py-2 px-4 rounded-md hover:bg-emerald-900"
            >
              Log Out
            </button>
          </li>
        ) : (
          <ul className="flex items-center gap-3">
            <li>
              <Link to={"login"} className="hover:text-blue-500">
                Login
              </Link>
            </li>
            <li>
              <Link to={"signUp"} className="hover:text-blue-500">
                Sign Up
              </Link>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Nav;
