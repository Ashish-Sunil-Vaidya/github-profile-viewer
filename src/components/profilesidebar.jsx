/* eslint-disable react-refresh/only-export-components */
import { useContext } from "react";
import { GithubApiContext } from "../context/GithubApiContext";
import {
  MemoizedGoPeople,
  MemoizedGoOrganization,
  MemoizedGoMail,
  MemoizedGoLink,
  MemoizedGoLocation,
} from "../../public/memoizedIcons";
function ProfileSidebar() {
  const { userData } = useContext(GithubApiContext);
  // console.log('=== userData profilesidebar.jsx [13] ===', userData);
  return (
    <div className="sidebar-container">
      <img className="avatar" src={userData.avatar_url} alt="" />
      <div>
        <h1 className="name">{userData.name}</h1>
        <span className="login">{userData.login}</span>
      </div>
      <div className="bio">{userData.bio}</div>
      <span className="followers">
        <MemoizedGoPeople />
        <strong>{userData.followers}</strong> <span>followers</span>{" "}
        <strong>• {userData.following} </strong>
        <span>following</span>
      </span>
      <ul className="details">
        {userData.company && (
          <li className="company">
            <MemoizedGoOrganization /> {userData.company}
          </li>
        )}
        {userData.location && (
          <li className="location">
            <MemoizedGoLocation /> {userData.location}
          </li>
        )}
        {userData.email && (
          <li className="email">
            <MemoizedGoMail /> {userData.email}
          </li>
        )}
        {userData.blog && (
          <li className="blog">
            <MemoizedGoLink />{" "}
            <a href={userData.blog} target="_blank" rel="noopener noreferrer">
              {userData.blog}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ProfileSidebar;
