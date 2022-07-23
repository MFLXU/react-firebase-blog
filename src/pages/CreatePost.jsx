import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const postCollectionRefs = collection(db, "posts");
  const navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postCollectionRefs, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  return (
    <div className="py-20 flex flex-col gap-8 justify-center items-center">
      <h1 className="text-6xl font-bold">Create a post</h1>
      <div className="card w-[80%] bg-base-200">
        <div className="card-body flex flex-col gap-2">
          <label className="text-2xl font-bold" htmlFor="">
            Title :
          </label>
          <input
            className="bg-inherit border-b outline-0 p-2"
            type="text"
            placeholder="Post title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <label className="text-2xl font-bold" htmlFor="">
            Post :
          </label>
          <textarea
            className="bg-inherit border-b outline-0 p-2"
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
          <button onClick={createPost} className="btn btn-primary w-full mt-4">
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}
export default CreatePost;
