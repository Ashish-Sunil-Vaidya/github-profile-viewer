import PropTypes from "prop-types";
import "./profilesidebar.css";
import {
  GoLocation,
  GoMail,
  GoLink,
  GoOrganization,
  GoPeople,
} from "react-icons/go";
function ProfileSidebar(props) {
  return (
    <div className="sidebar-container">
      <img className="avatar" src={props.avatar} alt="" />
      <div>
        <h1 className="name">{props.name}</h1>
        <span className="login">{props.login}</span>
      </div>
      <div className="bio">{props.bio}</div>
      <span className="followers">
        <GoPeople />
        <strong>{props.followers}</strong> <span>followers</span>{" "}
        <strong>• {props.following} </strong>
        <span>following</span>
      </span>
      <ul className="details">
        {props.company && (
          <li className="company">
            <GoOrganization /> {props.company}
          </li>
        )}
        {props.location && (
          <li className="location">
            <GoLocation /> {props.location}
          </li>
        )}
        {props.email && (
          <li className="email">
            <GoMail /> {props.email}
          </li>
        )}
        {props.blog && (
          <li className="blog">
            <GoLink />{" "}
            <a href={props.blog} target="_blank" rel="noopener noreferrer">
              {props.blog}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

ProfileSidebar.propTypes = {
  name: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  bio: PropTypes.string,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  company: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  blog: PropTypes.string,
};

export default ProfileSidebar;
