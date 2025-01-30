import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Firebase/firebaseInfo";

const Users = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="my-5">
      <h1 className="mt-5">This is User List</h1>
      <div className="grid lg:grid-cols-3">
        {users?.map((user) => (
          <div key={user.id} className="bg-purple-400 m-5 p-4 rounded-md">
            <h1> {user.name} </h1>
            <h2> {user.email} </h2>
            <h2> {user.number} </h2>
            <p>
              <span className="text-black">Message</span> : {user.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
