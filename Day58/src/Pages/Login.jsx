import React, { useContext, useRef } from "react";
import { Link } from "react-router";
import AuthBtn from "../components/AuthBtn";
import { ReferAuth } from "../contexts/ReferAuthContext";
import { UserInfo } from "../contexts/UserContext";
import SignSuccessModal from "../components/modals/SignSuccessModal";
import SignErrModal from "../components/modals/SignErrModal";
import { auth } from "../Firebase/FirebaseInfo";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [
    googleAuth,
    facebookAuth,
    gitHubAuth,
    handleSignOut,
    signSuccessModal,
    signErrModal,
  ] = useContext(ReferAuth);
  const [state, dispatch] = useContext(UserInfo);
  const formRef = useRef();
  const mailRef = useRef();

  console.log("Login");

  const handleLogin = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const email = e.target.mail.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch(res);
        signSuccessModal();
      })
      .catch((err) => {
        dispatch({ err });
        signErrModal();
      });

    form.reset();
  };

  const handleForgotPassword = () => {
    console.log("Forgot");

    const email = mailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        dispatch("Reset Password");
        signSuccessModal();
      })
      .catch((err) => {
        dispatch({ err });
        signErrModal();
      });
  };

  return (
    <div className="min-h-screen">
      <div className="w-1/2 mx-auto my-28 bg-sky-600 p-5 rounded-lg">
        <form
          ref={formRef}
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-4 justify-center "
        >
          <h1 className="text-3xl">User Login</h1>
          <input
            ref={mailRef}
            type="email"
            name="mail"
            id=""
            placeholder="Email Address"
            className="w-1/2  py-2 px-4 rounded-md outline-none focus:border-2 border-emerald-800 text-black bg-white"
            required
          />
          <input
            type={state.showPass ? "password" : "text"}
            name="password"
            id=""
            placeholder="Password"
            className="w-1/2  py-2 px-4 rounded-md outline-none focus:border-2 border-emerald-800 text-black bg-white"
            required
          />

          <div className="flex items-center justify-between gap-3 w-1/2 -mt-3">
            <div>
              <input
                type="checkbox"
                name=""
                id="showPass"
                className="accent-emerald-900 mr-1"
                onChange={() => dispatch("showPass")}
              />
              <label htmlFor="showPass">Show Password</label>
            </div>
            <Link
              onClick={handleForgotPassword}
              className="text-blue-800 hover:text-blue-950"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-1/2 bg-gradient-to-tr hover:bg-gradient-to-tl from-green-600 to-blue-500 py-2 px-4 rounded-md"
          >
            Login
          </button>
          <div>
            <p>
              Haven't any account?{" "}
              <Link
                to={"/signUp"}
                className="text-blue-800 hover:text-blue-950"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
        <div className="flex flex-col items-center gap-2 w-full mt-3">
          <AuthBtn value={"Continue with Google"} Auth={googleAuth} />
          <AuthBtn value={"Continue with Facebook"} Auth={facebookAuth} />
          <AuthBtn value={"Continue with GitHub"} Auth={gitHubAuth} />
        </div>

        <SignSuccessModal />
        <SignErrModal />
      </div>
    </div>
  );
};

export default Login;
