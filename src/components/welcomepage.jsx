import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import "./welcomepage.css";

function WelcomePage(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = e.target.elements.token.value;
    props.setToken(token);
    localStorage.setItem("token", token);
    // console.log("=== token welcomepage.jsx [16] ===", props.token);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    props.setToken(null);
    localStorage.removeItem("token");
  };

  return !props.token ? (
    <div className="welcome-page">
      <h1 className="welcome-title">
        <FaGithub />
        Profile Viewer
      </h1>
      <p className="welcome-description">
        Enter your GitHub personal access token (PAT) below to get started:
      </p>
      <form className="PAT-form" onSubmit={handleSubmit}>
        <input
          type="password"
          id="token"
          name="token"
          placeholder="Enter PAT token"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="instructions-container">
        <p className="welcome-instructions">
          Don&apos;t have a GitHub PAT? Follow these instructions to generate
          one:
        </p>
        <ol className="welcome-steps">
          <li>
            Go to your GitHub settings page and click on{" "}
            <strong>Developer settings</strong> in the sidebar.
          </li>
          <li>
            Click on <strong>Personal access tokens</strong> in the sidebar,
            then click the <strong>Generate new token</strong> button.
          </li>
          <li>
            Give your token a name and select the <code>user</code> and{" "}
            <code>repo</code> scopes.
          </li>
          <li>
            Click the <strong>Generate token</strong> button, then copy the
            token to your clipboard.
          </li>
        </ol>
      </div>
    </div>
  ) : (
    <div className="welcome-page">
      <h1 className="welcome-title">
        <FaGithub />
        Profile Viewer
      </h1>
      <p className="welcome-message">
        Search by the username of a GitHub user to view their profile and public
        repositories. You can also view your own profile and repositories by
        searching for your own username. To logout, click the button below.
      </p>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

WelcomePage.propTypes = {
  token: PropTypes.string,
  setToken: PropTypes.func,
};

export default WelcomePage;
