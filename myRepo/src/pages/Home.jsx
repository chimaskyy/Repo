import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-25 p-6">
      <div>
        <h1 className="text-center text-3xl font-bold mt-6">MyRepo</h1>
        <h1 className="text-center text-2xl font-bold mt-6">
          Welcome to My GitHub Portfolio
        </h1>
        <p className="text-center mt-4 text-2xl text-white">
          A simple app to showcase my GitHub repositories and their details.
          Also explore other users repositories on GitHub.
        </p>
        <div className="flex items-center justify-center mb-6 mt-8">
          <Link to={`/repos`}>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded mt-6 inline-block">
              View My Repo
            </button>
          </Link>
          <Link to={`/user_repos`}>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded mt-6 ml-8 inline-block">
              View A Users Repo
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center mb-6 mt-8">
          <p className="text-m mt-4 text-white">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account?{" "}
            <a href="https://github.com/join">Sign up for GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
