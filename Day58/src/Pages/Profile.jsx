import React, { useContext, useEffect, useState } from "react";
import { UserInfo } from "../contexts/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/FirebaseInfo";
import { ReferAuth } from "../contexts/ReferAuthContext";

const Profile = () => {
  const [state, dispatch] = useContext(UserInfo);
  const [profile, setProfile] = useState(state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [
    googleAuth,
    facebookAuth,
    gitHubAuth,
    handleSignOut,
    signSuccessModal,
    signErrModal,
  ] = useContext(ReferAuth);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfile(user);
        dispatch({ user });
      } else {
        setProfile(state.user);
      }

      setIsLoading(true);
    });
  }, [handleSignOut]);

  return (
    isLoading && (
      <div className="min-h-screen">
        {profile ? (
          <div>
            {profile.photoURL && (
              <img
                src={profile.photoURL}
                alt={profile.displayName}
                className="w-20 h-20 rounded-full mt-10 block mx-auto"
              />
            )}
            <h1 className="text-center text-5xl mt-10">
              {profile.displayName}
            </h1>
            <h3 className="text-center text-5xl mt-10">
              Email : {profile.email}
            </h3>
          </div>
        ) : (
          <div className="text-center text-5xl mt-10">
            <h2 className="mt-5"> Please Login or Sign Up</h2>
          </div>
        )}
      </div>
    )
  );
};

export default Profile;
