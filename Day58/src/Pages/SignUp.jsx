import React, { useContext, useRef } from "react";
import { Link } from "react-router";
import AuthBtn from "../components/AuthBtn";
import { ReferAuth } from "../contexts/ReferAuthContext";
import { UserInfo } from "../contexts/UserContext";
import SignSuccessModal from "../components/modals/SignSuccessModal";
import SignErrModal from "../components/modals/SignErrModal";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/FirebaseInfo";

const SignUp = () => {
  const passwordRegex = /^[A-Za-z\d@$!%*?&]{8,}$/;

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const firstName = e.target.fName.value;
    const lastName = e.target.lName.value;
    const email = e.target.email.value;
    const password = e.target.pass.value;
    const confirmPassword = e.target.conPass.value;

    if (password === confirmPassword) {
      if (state.terms) {
        if (passwordRegex.test(confirmPassword)) {
          createUserWithEmailAndPassword(auth, email, confirmPassword)
            .then((res) => {
              sendEmailVerification(res.user).then(() => {
                dispatch("emailVerify");
                signSuccessModal();
              });
              updateProfile(res.user, {
                displayName: firstName + " " + lastName,
              })
                .then(() => {
                  dispatch(res);
                  signSuccessModal();
                })
                .catch((err) => {
                  dispatch({ err });
                });
            })
            .catch((err) => {
              dispatch({ err });
              signErrModal();
            });
        } else {
          return dispatch("notRegex");
        }
      } else {
        dispatch("termsMessage");
        return;
      }
    } else {
      return dispatch("passwordMatch");
    }

    form.reset();
    console.log(form);
  };

  return (
    <div className="w-1/2 mx-auto my-5 bg-sky-600 p-5 rounded-lg">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 justify-center "
      >
        <h1 className="text-3xl">Create a new account</h1>
        <div className="flex gap-2 w-4/5">
          <input
            type="text"
            name="fName"
            id=""
            placeholder="First Name"
            className="w-1/2  py-2 px-4 rounded-md outline-none focus:border-2 bg-white border-emerald-800 text-black"
            required
          />
          <input
            type="text"
            name="lName"
            id=""
            placeholder="Last Name"
            className="w-1/2  py-2 px-4 rounded-md outline-none focus:border-2 bg-white border-emerald-800 text-black"
          />
        </div>

        <input
          type="email"
          name="email"
          id=""
          placeholder="Email Address"
          className="w-4/5  py-2 px-4 rounded-md outline-none focus:border-2 bg-white border-emerald-800 text-black"
          required
        />
        <input
          type="number"
          placeholder="Phone Number (Optional)"
          name=""
          id=""
          className="w-4/5  py-2 px-4 rounded-md outline-none focus:border-2 bg-white border-emerald-800 text-black"
        />

        <div className="flex gap-2 w-4/5">
          <input
            type={state.showPass ? "password" : "text"}
            name="pass"
            id=""
            placeholder="Password"
            className="w-1/2  py-2 px-4 rounded-md outline-none focus:border-2 bg-white border-emerald-800 text-black"
            required
          />
          <input
            type={state.showPass ? "password" : "text"}
            name="conPass"
            id=""
            placeholder="Confirm Password"
            className="w-1/2  py-2 px-4 rounded-md outline-none focus:border-2 bg-white border-emerald-800 text-black"
            required
          />
        </div>
        <p className="text-red-800 w-4/5">{state.passwordMatch}</p>
        <p className="text-red-800 w-4/5">{state.termsMessage}</p>

        <div className="flex items-center justify-between gap-3 w-4/5 -mt-3">
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

          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name=""
              id="terms"
              className="accent-emerald-900 mr-1"
              onChange={() => dispatch("terms")}
            />
            <label htmlFor="terms">I agree with</label>
            <Link className="text-blue-800 hover:text-blue-950">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="w-1/2 bg-gradient-to-tr hover:bg-gradient-to-tl from-green-600 to-blue-500 py-2 px-4 rounded-md"
        >
          Sign Up
        </button>
        <div className="-mt-3">
          <p>
            Already have an account? Please{" "}
            <Link to={"/login"} className="text-blue-800 hover:text-blue-950">
              Login
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
  );
};

export default SignUp;
