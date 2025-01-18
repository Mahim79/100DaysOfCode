import React, { createContext, useContext, } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/FirebaseInfo";
import { UserInfo } from "./UserContext";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const ReferAuth = createContext();

const ReferAuthContext = ({ children }) => {
  const [state, dispatch] = useContext(UserInfo);

  const signSuccessModal = () => {
    document.getElementById("my_modal_1").showModal();
  };
  const signErrModal = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const googleAuth = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        dispatch(res);
        signSuccessModal();
      })
      .catch((err) => {
        dispatch({ err });
        signErrModal();
      });
  };

  const facebookAuth = () => {
    signInWithPopup(auth, facebookProvider)
      .then((res) => {
        dispatch(res);
        signSuccessModal();
      })
      .catch((err) => {
        dispatch({ err });
        signErrModal();
      });
  };
  const gitHubAuth = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((res) => {
        dispatch(res);
        signSuccessModal();
      })
      .catch((err) => {
        dispatch({ err });
        signErrModal();
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => dispatch("SignOut"))
      .catch((err) => dispatch(err));
  };

  
  console.log(state);
  return (
    <ReferAuth.Provider
      value={[googleAuth, facebookAuth, gitHubAuth, handleSignOut,signSuccessModal,signErrModal]}
    >
      {children}
    </ReferAuth.Provider>
  );
};

export default ReferAuthContext;
