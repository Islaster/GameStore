import { getToken } from "./user-service";

const BASE_URL = "/api/users";

export function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export function login(credentials) {
  console.log("user-api login");
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export function create(games) {
  return sendRequest("/games/new", "POST", games);
}

export function getGames() {
  return sendRequest(`/games`);
}

export function getGame(id) {
  return sendRequest(`/games/${id}`);
}

export function edit(aUser) {
  return sendRequest(`${BASE_URL}/${aUser.role}`, "PUT", aUser);
}

export function deleteGame(game) {
  return sendRequest("/games", "DELETE", game);
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = "GET", payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    console.log("token");
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
