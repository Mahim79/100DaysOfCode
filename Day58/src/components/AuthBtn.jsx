import React, { memo } from "react";

const AuthBtn = ({ value, Auth }) => {
  console.log("Button");

  return (
    <div className="w-1/3">
      <button
        onClick={Auth}
        className="bg-emerald-800 py-2 px-4 rounded-md hover:bg-emerald-900 w-full"
      >
        {value}
      </button>
    </div>
  );
};

export default memo(AuthBtn);
