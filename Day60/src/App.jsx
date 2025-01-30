import { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Users from "./components/Users";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase/firebaseInfo";

function App() {
  const [users, setUsers] = useState();

  const getUsers = async () => {
      const res = await getDocs(collection(db, "users"));
  
      setUsers(res.docs.map((doc) => doc.data()));
    };

  return (
    <div className="w-full">
      <Contact getUsers={getUsers}/>
      <Users getUsers={getUsers} users={users}/>
    </div>
  );
}

export default App;
