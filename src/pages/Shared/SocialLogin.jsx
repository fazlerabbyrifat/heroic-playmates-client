import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="text-center">
        <button onClick={handleGoogleLogin} className="btn btn-wide btn-outline text-green-500">
          <FaGoogle></FaGoogle>{" "}
          <span className="ml-2 text-red-400">Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
