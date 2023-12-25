import {
  GoPeople,
  GoOrganization,
  GoMail,
  GoLink,
  GoLocation,
} from "react-icons/go";
import useApiHook from "./context/useApiHook";

function Sidebar() {
  const { userData } = useApiHook();
  
  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="sidebar-container ">
      <img className="avatar" src={userData.avatar_url} alt="" />
      <div>
        <h1 className="name">{userData.name}</h1>
        <span className="login">{userData.login}</span>
      </div>
      <div className="bio">{userData.bio}</div>
      <span className="followers flex items-center gap-1">
        <GoPeople />
        <strong>{userData.followers}</strong> <span>followers</span>{" "}
        <strong>• {userData.following} </strong>
        <span>following</span>
      </span>
      <ul className="details">
        {userData.company && (
          <li className="company">
            <GoOrganization /> {userData.company}
          </li>
        )}
        {userData.location && (
          <li className="location">
            <GoLocation /> {userData.location}
          </li>
        )}
        {userData.email && (
          <li className="email">
            <GoMail /> {userData.email}
          </li>
        )}
        {userData.blog && (
          <li className="blog">
            <GoLink />{" "}
            <a href={userData.blog} target="_blank" rel="noopener noreferrer">
              {userData.blog}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
