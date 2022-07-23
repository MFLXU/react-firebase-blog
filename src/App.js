import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  let navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, []);
  function signUserOut() {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  }
  return (
    <div className="container">
      <nav className="py-4 flex justify-center gap-4 items-center">
        <Link className="btn btn-ghost" to="/">
          Home
        </Link>
        {isAuth ? (
          <Link className="btn btn-ghost" to="/create-post">
            Create Post
          </Link>
        ) : null}
        {!isAuth ? (
          <Link className="btn btn-ghost" to="/login">
            Login
          </Link>
        ) : (
          <button className="btn btn-primary" onClick={signUserOut}>
            Log out
          </button>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </div>
  );
}

export default App;
