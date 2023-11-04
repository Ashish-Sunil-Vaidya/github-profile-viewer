import { useContext } from "react";
import { GithubApiContext } from "../context/GithubApiContext";
import { MemoizedGoX } from "../../public/memoizedIcons";
import ProfileSidebar from "./ProfileSidebar";
import RepositorySection from "./RepositorySection";
import WelcomePage from "./welcomepage";

function Body() {
  const { userData, resetError, token, error, repoData } =
    useContext(GithubApiContext);
  return (
    <main className="app-main">
      {error && (
        <div className="error">
          <p className="error-message">{error}</p>
          {/* <div className="app-header">{error.type}</div>
              <div className="app-content">{error.message}</div> */}
          <button onClick={resetError}>
            <MemoizedGoX />
          </button>
        </div>
      )}
      {/* {console.log(
            "=== userData && token App.jsx [53] ===",
            userData && token ? true : false,
            userData,
            token
          )} */}
      {userData && token ? (
        <div className="app-main-container">
          {userData && <ProfileSidebar />}
          {repoData && <RepositorySection />}
        </div>
      ) : (
        <WelcomePage />
      )}
    </main>
  );
}

export default Body;
