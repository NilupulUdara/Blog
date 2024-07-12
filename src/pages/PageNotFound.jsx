import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/pagenotfount.jpg";

export const PageNotFound = () => {
  return (
    <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4">
        <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404 / Page Not Found</p>
        <img  src={PageNotFoundImage} alt="PageNotFoundImage" />
      </div>

      <div className="flex justify-center my-4">
        <Link to="/">
          <button className="w-64 text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  dark:text-white rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">Back To Home</button>
        </Link>
      </div>
    </section>
  )
}