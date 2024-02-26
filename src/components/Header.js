import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between max-sm:px-5">
      <img
        className="w-44"
        alt="Netflix Logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

    { user && <div className="flex p-2 ">
        {/* "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" */}
        <img className="w-12 h-12" alt="usericon" src={user?.photoURL}></img>
        <button
          onClick={handleSignOut}
          className="m-2 bg-red-600 rounded-md px-2 font-bold text-white whitespace-nowrap"
        >
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
