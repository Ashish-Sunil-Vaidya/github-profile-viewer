import { useReducer } from "react";

const initialState = {
  data: null,
  repoData: [],
  token: localStorage.getItem("token") || null,
  error: null,
};

export const SET_DATA = "SET_DATA";
export const SET_REPO_DATA = "SET_REPO_DATA";
export const SET_TOKEN = "SET_TOKEN";


function reducer(state, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, userData: action.payload };
    case SET_REPO_DATA:
      return { ...state, repoData: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

const useGithubApiReducer = () => {
  return useReducer(reducer, initialState);
};

export default useGithubApiReducer;
