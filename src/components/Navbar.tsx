import { GoPersonFill, GoSearch } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import useApiHook from "./context/useApiHook";

function Navbar() {
  const [username, setUsername] = useState("");
  const { fetchUserData, fetchRepoData, token, setError } = useApiHook();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    fetchUserData(username, token);
    fetchRepoData(username, token);
    setUsername("");
  };

  return (
    <header className="navbar">
      <h1 className="navbar-title">
        <FaGithub />
        Profile Viewer
      </h1>
      <form
        className="search-bar"
        onSubmit={handleSubmit}
        style={{ display: token ? "flex" : "none" }}
      >
        <span className="person-icon">
          <GoPersonFill />
        </span>
        <input
          type="text"
          name="username"
          placeholder="Search for a user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="border-[#727a85] text-base text-[#727a85] py-2 px-4 rounded-md bg-opacity-20 border-2 w-full max-w-xs bg-[rgba(255,255,255,0.05)]"
        />
        <button>
          <GoSearch />
        </button>
      </form>
    </header>
  );
}

export default Navbar;
