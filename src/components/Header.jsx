/* eslint-disable react-refresh/only-export-components */
import {
  MemoizedFaGithub,
  MemoizedGoPersonFill,
  MemoizedGoSearch,
} from "../../public/memoizedIcons";

import { useContext,memo } from "react";
import { GithubApiContext } from "../context/GithubApiContext";

function Header() {
  const { fetchData, token } = useContext(GithubApiContext);
  return (
    <header className="navbar">
      <h1 className="navbar-title">
        <MemoizedFaGithub />
        Profile Viewer
      </h1>
      <form
        className="search-bar"
        onSubmit={fetchData}
        style={{ display: token ? "flex" : "none" }}
      >
        <span className="person-icon">
          <MemoizedGoPersonFill />
        </span>
        <input
          type="text"
          name="username"
          placeholder="Search for a user"
          required
        />
        <button>
          <MemoizedGoSearch />
        </button>
      </form>
    </header>
  );
}

export default memo(Header);
