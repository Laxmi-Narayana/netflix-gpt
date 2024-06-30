import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        console.log("OnAuthChange:", user);
        const { uid, email, displayName, photoURL } = user;
        console.log(
          "SignIn, Adding to reduxStore: ",
          uid,
          email,
          displayName,
          photoURL
        );
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      } else {
        // user is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className="h-screen">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
