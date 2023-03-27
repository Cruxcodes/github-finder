import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const githubFetch = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `toekn ${GITHUB_TOKEN}` },
});

// Get user search Results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await githubFetch.get(`/search/users?${params}`);
  return response.data.items;
};

// Get single user
export const getUserAndRepos = async (login) => {
  const [users,repos] = await Promise.all([
    githubFetch.get(`/users/${login}`),
    githubFetch.get(`/users/${login}/repos`)
  ])

  return {user: users.data, repos: repos.data}
};



export const fetchUsers = async () => {
  const response = await githubFetch.get('/users')
  return response.data;
};
