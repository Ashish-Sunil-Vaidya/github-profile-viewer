import { createContext, useCallback } from "react";
import ReactPropTypes from "prop-types";
import useGithubApiReducer, {
  SET_DATA,
  SET_REPO_DATA,
  SET_TOKEN,
} from "./GithubApiReducer";

import { getUser, getRepos } from "../../api/github";
export const GithubApiContext = createContext();

export default function GithubApiProvider({ children }) {
  const [state, dispatch] = useGithubApiReducer();

  const fetchData = useCallback(
    async (e) => {
      e.preventDefault();
      const username = e.target.elements.username.value;
      // console.log("=== username App.jsx [18] ===", username);
      try {
        const userData = await getUser(username, state.token);
        const repoData = await getRepos(username, state.token);

        // console.log("=== userData App.jsx [21] ===", userData);
        // console.log("=== repoData App.jsx [22] ===", repoData);
        dispatch({ type: SET_DATA, payload: userData });
        dispatch({ type: SET_REPO_DATA, payload: repoData });
      } catch (error) {
        alert(error.message);
      }
    },
    [dispatch, state.token]
  );

  const setToken = (token) => {
    dispatch({ type: SET_TOKEN, payload: token });
  };

  return (
    <GithubApiContext.Provider
      value={{
        userData: state.userData,
        repoData: state.repoData,
        token: state.token,
        setToken,
        fetchData,
      }}
    >
      {children}
    </GithubApiContext.Provider>
  );
}

GithubApiProvider.propTypes = {
  children: ReactPropTypes.node.isRequired,
};
