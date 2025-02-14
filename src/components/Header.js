import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log("Header userslice: ", user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex items-center justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div className="flex p-4">
        {/* <img src="https://i.imgur.com/LJ9dB0T.png" alt="icon" />
        <img src="https://i.imgur.com/6FgZxbi.png" alt="icon" />
        <img src="https://i.imgur.com/OnOEIhZ.png" alt="icon" />
        <img src="https://i.imgur.com/WmB8jg2.png" alt="icon" /> */}
        <img className="w-12 h-12" src={user?.photoURL} alt="icon" /> &nbsp;
        <button onClick={handleSignOut} className="font-bold text-white">
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Header;
