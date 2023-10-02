import PropTypes from "prop-types";
import "./repositorycontainer.css";
import format from "date-fns/format";
import { GoIssueOpened, GoLaw, GoRepoForked, GoStar } from "react-icons/go";

function RepositoryContainer(props) {
  return (
    <div className="repo-card">
      <div className="repo-name-container">
        <a href={props.repoUrl} className="repo-name">
          {props.name}
        </a>
        <span className="repo-visibility">{props.isPrivate?"Private":"Public"}</span>
      </div>
      <div className="repo-description">{props.description}</div>
      <div className="repo-details">
        {props.language && (
          <strong className="repo-language">{props.language}</strong>
        )}
        {props.stargazersCount !== 0 && (
          <span className="repo-stars">
            <strong>
              <GoStar /> {props.stargazersCount}
            </strong>{" "}
          </span>
        )}
        {props.forksCount !== 0 && (
          <span className="repo-forks">
            <strong>
              <GoRepoForked /> {props.forksCount}
            </strong>{" "}
          </span>
        )}
        {props.license && (
          <span className="repo-license">
            <strong>
              <GoLaw /> {props.license}
            </strong>
          </span>
        )}
        {props.openIssuesCount !== 0 && (
          <span className="repo-issues">
            <strong>
              <GoIssueOpened /> {props.openIssuesCount}
            </strong>{" "}
          </span>
        )}
        <span className="repo-updated_at">
          Updated on {format(new Date(props.updatedAt), "MMMM d, yyyy")}
        </span>
      </div>
    </div>
  );
}

RepositoryContainer.propTypes = {
  name: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  description: PropTypes.string,
  language: PropTypes.string,
  stargazersCount: PropTypes.number.isRequired,
  forksCount: PropTypes.number.isRequired,
  license: PropTypes.string,
  openIssuesCount: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired,
};

export default RepositoryContainer;
