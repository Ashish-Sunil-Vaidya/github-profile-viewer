/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import format from "date-fns/format";
import { MemoizedGoIssueOpened, MemoizedGoLaw, MemoizedGoRepoForked, MemoizedGoStar } from "../../public/memoizedIcons";


function RepositoryContainer(props) {
  // console.log('=== props repositorycontainer.jsx [6] ===', props);
  return (
    <div className="repo-card">
      <div className="repo-name-container">
        <a href={props.repoUrl} className="repo-name">
          {props.name}
        </a>
        <span className="repo-visibility">
          {props.isPrivate ? "Private" : "Public"}
        </span>
      </div>
      <div className="repo-description">{props.description}</div>
      <div className="repo-details">
        {props.language && (
          <strong className="repo-language">{props.language}</strong>
        )}
        {props.stargazersCount !== 0 && (
          <span className="repo-stars">
            <strong>
              <MemoizedGoStar /> {props.stargazersCount}
            </strong>{" "}
          </span>
        )}
        {props.forksCount !== 0 && (
          <span className="repo-forks">
            <strong>
              <MemoizedGoRepoForked /> {props.forksCount}
            </strong>{" "}
          </span>
        )}
        {props.license && (
          <span className="repo-license">
            <strong>
              <MemoizedGoLaw /> {props.license}
            </strong>
          </span>
        )}
        {props.openIssuesCount !== 0 && (
          <span className="repo-issues">
            <strong>
              <MemoizedGoIssueOpened /> {props.openIssuesCount}
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
  name: PropTypes.string,
  repoUrl: PropTypes.string.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  description: PropTypes.string,
  language: PropTypes.string,
  stargazersCount: PropTypes.number,
  forksCount: PropTypes.number,
  license: PropTypes.string,
  openIssuesCount: PropTypes.number,
  updatedAt: PropTypes.string.isRequired,
};

export default RepositoryContainer;
