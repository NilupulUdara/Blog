import { useEffect, useState, useRef } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { PostCard, SkeletonCard } from "../components";
import { useTitle } from "../hooks/useTitle";

export const Home = () => {
  useTitle("Home");
  const [posts, setPosts] = useState(new Array(3).fill(false));
  const [toggle, setToggle] = useState(false);
  const postsRef = useRef(collection(db, "posts"));

  useEffect(() => {
    async function getPosts() {
      const data = await getDocs(postsRef.current);
      setPosts(data.docs.map((document) => (
        { ...document.data(), id: document.id }
      )))
    }
    getPosts();
  }, [postsRef, toggle]);

  return (
    <section>
      {posts.map((post, index) => (
        post ? (
          <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
        ) : (
          <SkeletonCard key={index} />
        )
      ))}
    </section>
  )
}
