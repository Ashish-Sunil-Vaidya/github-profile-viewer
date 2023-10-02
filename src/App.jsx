import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoSearch, GoRepo, GoPersonFill, GoX } from "react-icons/go";
import ProfileSidebar from "./components/profilesidebar";
import RepositoryContainer from "./components/repositorycontainer";
import { getUser, getRepos } from "../api/github";
import WelcomePage from "./components/welcomepage";

function App() {
  const [data, setData] = useState(null);
  const [repoData, setRepoData] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  // console.log("=== token App.jsx [13] ===", token);
  const [error, setError] = useState(null);

  const fetchData = async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    // console.log("=== username App.jsx [18] ===", username);
    try {
      if (error) setError(null);
      const user = await getUser(username, token);
      setData(user);
      const userRepo = await getRepos(username, token);
      setRepoData(userRepo);
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message || "An error occurred.");
    }
  };

  function resetError() {
    setError(null);
  }

  return (
    <>
      <div className="App">
        <header className="navbar">
          <h1 className="navbar-title">
            <FaGithub />
            Profile Viewer
          </h1>
          <form
            className="search-bar"
            onSubmit={fetchData}
            style={{ display: token ? "flex" : "none" }}
          >
            <span className="person-icon">
              <GoPersonFill />
            </span>
            <input
              type="text"
              name="username"
              placeholder="Search for a user"
              required
            />
            <button>
              <GoSearch />
            </button>
          </form>
        </header>
        <div className="app-main">
          {error && (
            <div className="error">
              <p className="error-message">{error}</p>
              {/* <div className="app-header">{error.type}</div>
              <div className="app-content">{error.message}</div> */}
              <button onClick={resetError}>
                <GoX />
              </button>
            </div>
          )}

          {data && token ? (
            <div className="app-main-container">
              {data && (
                <ProfileSidebar
                  name={data.name}
                  login={data.login}
                  avatar={data.avatar_url}
                  bio={data.bio}
                  followers={data.followers}
                  following={data.following}
                  company={data.company}
                  location={data.location}
                  email={data.email}
                  blog={data.blog}
                />
              )}
              <div className="repo-container">
                <div className="repo-navbar">
                  <div className="repo-navbar-header">
                    <GoRepo />
                    <h1 className="repo-navbar-title">Repositories</h1>
                  </div>
                  <span className="repo-count">
                    <span>Total Repositories(Public):</span>
                    <strong>{repoData.length}</strong>
                  </span>
                </div>
                <div className="repo-content">
                  {repoData.map((repo) => (
                    <RepositoryContainer
                      key={repo.id}
                      name={repo.name}
                      description={repo.description}
                      language={repo.language}
                      stargazersCount={repo.stargazers_count}
                      forksCount={repo.forks_count}
                      license={repo.license && repo.license.name}
                      openIssuesCount={repo.open_issues_count}
                      updatedAt={repo.updated_at}
                      isPrivate={repo.private}
                      repoUrl={repo.html_url}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <WelcomePage token={token} setToken={setToken} />
          )}
        </div>
        <footer>
          <p>
            Made with <span>❤</span> by Ashish Vaidya(Calm Person)
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
