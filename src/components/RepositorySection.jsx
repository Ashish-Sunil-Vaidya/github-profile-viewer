/* eslint-disable react-refresh/only-export-components */
import { useContext,memo } from "react";
import { GithubApiContext } from "../context/GithubApiContext";
import RepositoryContainer from "./repositorycontainer";
import { MemoizedGoRepo } from "../../public/memoizedIcons";

function RepositorySection() {
  const { repoData } = useContext(GithubApiContext);
  // console.log("=== repoData RepositorySection.jsx [8] ===", repoData);
  return (
    <div className="repo-container">
      <div className="repo-navbar">
        <div className="repo-navbar-header">
          <MemoizedGoRepo />
          <h1 className="repo-navbar-title">Repositories</h1>
        </div>
      </div>
      <div className="repo-content">
        {repoData.map((repo) => (
          <RepositoryContainer
            key={repo.id}
            repoUrl={repo.html_url}
            name={repo.name}
            isPrivate={repo.private}
            description={repo.description}
            language={repo.language}
            stargazersCount={repo.stargazers_count}
            forksCount={repo.forks_count}
            license={repo.license && repo.license.name}
            openIssuesCount={repo.open_issues_count}
            updatedAt={repo.updated_at}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(RepositorySection);
