import React, { useContext } from "react";
import { UserInfo } from "../../contexts/UserContext";

const SignErrModal = () => {
  const [state, dispatch] = useContext(UserInfo);
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕ 
          </button>
        </form>
        <h3 className="font-bold text-lg">Sorry!</h3>
        <p className="py-4 text-red-600">{state.signMessage}</p>
      </div>
    </dialog>
  );
};

export default SignErrModal;
