import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const dispatch = useDispatch();
  // redirect to another page

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
    return () => unsubscribe();
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

  const handleGptSearchClick = () => {
    // Toggle GPT Search  button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex  justify-between max-sm:px-5 flex-col md:flex-row ">
      <img className="w-44 mx-auto md:mx-0" alt="Netflix Logo" src={LOGO} />

      {user && (
        <div className="flex p-2 mx-auto md:mx-0">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900  text-white max-sm:ml-1"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {" "}
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 m-2 bg-purple-800 text-white "
            onClick={handleGptSearchClick}
          >
          {showGptSearch ?"Homepage" :" GPT Search"} 
          </button>
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL}></img>
          <button
            onClick={handleSignOut}
            className="m-2  px-2 font-semibold text-white text-xl whitespace-wrap hover:opacity-80 mix-blend-light"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
