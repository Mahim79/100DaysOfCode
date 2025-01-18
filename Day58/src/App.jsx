
// import './App.css'
import { createBrowserRouter,RouterProvider, useNavigate,} from "react-router";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Root from './Pages/Root'
import ReferAuthContext from "./contexts/ReferAuthContext";
import UserContext from "./contexts/UserContext";
import Profile from "./Pages/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
      {
        path:"/",
        element:<Profile/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"signUp",
        element:<SignUp/>
      }
    ]
  },
]);

function App() {

  

  console.log("app");
  
  return (
    <>
      <UserContext>
      <ReferAuthContext>
      
        <RouterProvider router={router} />

      </ReferAuthContext>
      </UserContext>

    </>
  )
}

export default App
