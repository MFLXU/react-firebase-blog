import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login({ setIsAuth }) {
  let navigate = useNavigate();
  function signInWithGoogle() {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("Auth", true);
      setIsAuth(true);
      navigate("/");
    });
  }
  return (
    <div className="flex flex-col justify-center items-center gap-8 py-20">
      <p>Sign in with Google to continue</p>
      <button onClick={signInWithGoogle} className="btn btn-primary">
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
