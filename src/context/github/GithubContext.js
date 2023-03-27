import React from "react";
import { createContext, useState, useEffect, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GitHubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);


  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <GitHubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
