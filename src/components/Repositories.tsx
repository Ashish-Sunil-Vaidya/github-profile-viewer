/* eslint-disable react-refresh/only-export-components */
import {
  GoRepo,
  GoStar,
  GoRepoForked,
  GoLaw,
  GoIssueOpened,
} from "react-icons/go";
import useApiHook from "./context/useApiHook";
import { format } from "date-fns";

function Repositories() {
  const { repoData } = useApiHook();

  return (
    <div className="repo-container">
      <div className="repo-navbar">
        <div className="repo-navbar-header">
          <GoRepo />
          <h1 className="repo-navbar-title">Repositories</h1>
        </div>
      </div>
      <div className="repo-content">
        {repoData &&
          repoData.map((repo) => (
            <div className="repo-card" key={repo.id}>
              <div className="repo-name-container">
                <a href={repo.html_url} className="repo-name">
                  {repo.name}
                </a>
                <span className="repo-visibility">
                  {repo.private ? "Private" : "Public"}
                </span>
              </div>
              <div className="repo-description">{repo.description}</div>
              <div className="repo-details">
                {repo.language && (
                  <strong className="repo-language">{repo.language}</strong>
                )}

                <span className="flex items-center gap-1">
                  <strong>
                    <GoStar />
                  </strong>{" "}
                  {repo.stargazers_count}
                </span>

                <span className="flex items-center gap-1">
                  <strong>
                    <GoRepoForked />
                  </strong>{" "}
                  {repo.forks_count}
                </span>

                {repo.license && repo.license.name && (
                  <span className="flex items-center gap-1">
                    <strong>
                      <GoLaw />
                    </strong>
                    {repo.license.name}
                  </span>
                )}
                {repo.open_issues_count !== 0 && (
                  <span className="flex items-center gap-1">
                    <strong>
                      <GoIssueOpened />
                    </strong>{" "}
                    {repo.open_issues_count}
                  </span>
                )}
                <span>
                  Updated on{" "}
                  {repo.updated_at &&
                  !isNaN(new Date(repo.updated_at).valueOf())
                    ? format(new Date(repo.updated_at), "MMMM d, yyyy")
                    : "Invalid date"}
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Repositories;
