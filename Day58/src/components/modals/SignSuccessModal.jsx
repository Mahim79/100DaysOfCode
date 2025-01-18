import React, { useContext } from "react";
import { Link } from "react-router";
import { UserInfo } from "../../contexts/UserContext";

const SignSuccessModal = () => {
  const [state, dispatch] = useContext(UserInfo);

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          {state.user ? "Thank you" : "Incorrect Information"}
        </h3>
        <p className="py-4 text-emerald-600 font-semibold">{state.signMessage}</p>
        <div className="modal-action">
          <form method="dialog">
            <Link to={"/"} className="btn">
              <button className="btn">Close</button>
            </Link>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default SignSuccessModal;
