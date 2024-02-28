import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  // redirect to another page

  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("USER", user);
        // by using this we only updated our uid and email id  so,we need to update the displayname & photoURL
        const { uid, email, displayName, photoURL } = user;

        // putting up data into store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

// unsubscribe when component unmounts
  return ()=> unsubscribe();

  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
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
        src={LOGO}
      />

      {user && (
        <div className="flex p-2 ">
          {/*  */}
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL}></img>
          <button
            onClick={handleSignOut}
            className="m-2 bg-red-600 rounded-md px-2 font-bold text-white whitespace-nowrap"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
