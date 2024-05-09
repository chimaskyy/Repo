import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";
import { format } from "date-fns";
// import StarRateIcon from "@mui/icons-material/StarRate";
// import CircularProgress from "@mui/material/CircularProgress";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";

const RepoDetails = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.github.com/repositories/${id}`)
      .then((response) => {
        setRepo(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repository details:", error);
        setLoading(false);
      });
  }, [id]); // Fetch repository details whenever id changes

  if (loading) {
    return <Spinner />;
  }

  if (!repo) {
    return <div>Repository not found!</div>;
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 bg-opacity-25 p-6`}
    >
      {/* <div className="bg-cover bg-gradient-to-r from-slate-300 to-slate-500 bg-opacity-25"> */}
      <div className="mt-24">
        <h2 className="text-2xl font-bold flex justify-center item-center">
          Viewing {repo.name} details
        </h2>
      </div>
      <article className="container bg-white rounded-lg bg-auto grid shadow w-64 flex justify-center item-center m-16 mt-6 md:w-auto xl:w-auto">
        <article className="flex items-center m-6 pt-3 justify-start">
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="rounded-full w-20 h-20 shadow"
          />
          <div className="ml-2">
            <h2 className="text-lg font-bold capitalize">{repo.owner.login}</h2>
            <h2 className="text-sm mb-1">{repo.name}</h2>
          </div>
        </article>
        <div className="m-6 pb-3">
          <div className="my-5 text-lg">
            <p>{repo.name}</p>
            This repository was created at{" "}
            {format(new Date(repo.created_at), "dd :MM :yyyy")} by{" "}
            {repo.owner.login}
          </div>
          <div className="flex flex-wrap items-center justify-between">
            <a
              className="underline hover:bg-gray-600 hover:text-white"
              href={repo.html_url}
              target="_blank"
              rel="noreferror"
            >
              Link to repo
            </a>
            <ul className="text-rigt">
              <li>
                {repo.stargazers_count} <StarRateOutlinedIcon />
              </li>
              <li>
                {repo.watchers_count} <VisibilityOutlinedIcon />
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap item-center mt-5 justify-between">
            {repo.language && (
              <p className="bg-gray-600 opacity-75 text-white py-1 px-2 rounded-lg shadow test-xs">
                {repo.language}
              </p>
            )}
            <ul>
              {repo.topics.map((topic, index) => (
                <li
                  className="bg-gray-200 opacity-75 inline-block mx-1 text-white py-1 px-2 rounded-lg shadow test-xs"
                  key={index}
                >
                  {topic}
                </li>
              ))}
            </ul>
            <p>{repo.forks} forks</p>
            <p className="text-xs">{repo.open_issues} issues</p>
          </div>
        </div>
      </article>

      {/* </div> */}
    </div>
  );
};

export default RepoDetails;
