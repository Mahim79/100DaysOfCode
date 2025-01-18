import React, { createContext, useReducer } from "react";

export const UserInfo = createContext();

const UserContext = ({ children }) => {
  const initState = {
    user: null,
    signMessage: "",
    showPass: true,
    passwordMatch: "",
    terms: false,
    termsMessage: "",
  };

  const reducer = (state, action) => {

    if (action === "terms") {
      return (state = { ...state, terms: !state.terms });
    }
    if (action === "termsMessage") {
      return (state = {
        ...state,
        termsMessage: "Please check the terms & conditions",
      });
    }
    if (action === "passwordMatch") {
      return (state = { ...state, passwordMatch: "Password doesn't matched" });
    }
    if (action === "notRegex") {
      return (state = {
        ...state,
        passwordMatch:
          "Password must be at least 8 characters long, include 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.",
      });
    }
    if (action === "emailVerify") {
      return (state = {
        ...state,
        signMessage: "We sent a verification link in your email.Please Verify.",
      });
    }

    if (action.user) {
      return (state = {
        ...state,
        user: action.user,
        showPass: true,
        signMessage:"Authentication Successfull",
        passwordMatch: "",
        terms: false,
        termsMessage: "",
      });
    }

    if (action == "SignOut") {
      return (state = { ...state, user : null });
    }

    if (action.err) {
      return (state = { ...state, signMessage: action.err.message });
    }

    if (action === "showPass") {
      return (state = { ...state, showPass: !state.showPass });
    }

    if (action === "Reset Password") {
      return (state = {
        ...state,
        signMessage: "Please check your email and set a new password",
      });
    }

    return state;
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <UserInfo.Provider value={[state, dispatch]}>{children}</UserInfo.Provider>
  );
};

export default UserContext;
