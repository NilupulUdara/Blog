import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

export const PostCard = ({ post, toggle, setToggle }) => {
  const navigate = useNavigate();
  const { id, title, description, author } = post;
  const isAuth = JSON.parse(localStorage.getItem("isAuth"));

  async function handleDelete() {
    const document = doc(db, "posts", id);
    await deleteDoc(document);
    setToggle(!toggle);
  }

  return (
    <div className="rounded-md p-2 shadow-md my-5 mx-4">
      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</p>
      <p className="font-normal text-gray-700 dark:text-gray-400 break-all">{description}</p>
      <p className="flex justify-between">
        <span className="text-sm font-medium bg-blue-100 p-1 rounded">{author.name}</span>
        {isAuth && (author.id === auth.currentUser.uid) && <span onClick={handleDelete} className="text-red-500 cursor-pointer">Delete</span>}
      </p>
    </div>
  )
}
