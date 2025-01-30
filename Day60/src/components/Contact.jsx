import React, { useEffect, useState } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { db } from "../Firebase/firebaseInfo";
import { addDoc, collection } from "firebase/firestore";

const Contact = ({ getUsers }) => {
  const [user, setUser] = useState({
    
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const changeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { name, email, number, message } = user;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && number && message) {
      await addDoc(collection(db, "users"), {
        id: new Date().getTime(),
        ...user,
      });

      console.log("CLicked");

      setUser({ name: "", email: "", number: "", message: "" });
      getUsers();
      alert("Your message has been sent");
    } else {
      alert("Please fill up the all field on the form");
    }
  };

  return (
    <div className="max-w-[300px] mx-auto">
      <h1 className="my-5">Contact</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Input
            value={user.name}
            onChange={changeInput}
            name="name"
            fontWeight="font-bold"
            label="name"
            type="text"
          />
          <Input
            value={user.email}
            onChange={changeInput}
            name="email"
            label="Email Address"
            type="email"
          />
          <Input
            value={user.number}
            onChange={changeInput}
            name="number"
            label="Phone Number"
            type="number"
          />
          <Textarea
            value={user.message}
            onChange={changeInput}
            name="message"
            label="Message"
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
