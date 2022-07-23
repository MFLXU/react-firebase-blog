import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { auth } from "../firebase-config";
function Home({ isAuth }) {
  const [postLists, setPostLists] = useState([]);
  const postCollectionRefs = collection(db, "posts");
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRefs);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });
  return (
    <div className="pt-10 flex flex-col gap-4">
      <p className="text-6xl font-bold text-center">Latest Posts :</p>

      {postLists.map((post) => {
        return (
          <div className="card bg-base-200">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <p className="text-md font-bold p-2 rounded-md bg-primary max-w-fit text-white">
                  By {post.author.name}
                </p>
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    className="text-2xl"
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    🗑️
                  </button>
                )}
              </div>
              <h1 className="text-3xl font-bold">{post.title}</h1>
              <p className="text-xl">{post.postText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Home;
