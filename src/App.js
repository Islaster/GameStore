import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import GameList from "./Pages/GameList/GameListPage";
import GameDetail from "./Pages/GameDetail/GameDetailPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import HomePage from "./Pages/HomePage/HomePage";
import { getUser } from "./Utilities/user-service";
import AddGamePage from "./Pages/AddGamePage/AddGamePage";
import UserPage from "./Pages/User/UserPage";
import AdminPage from "./Pages/Admin/AdminPage";
function App() {
  const [user, setUser] = useState(getUser());
  const [api, setApi] = useState({});
  useEffect(() => {
    fetch(
      "https://api.rawg.io/api/platforms?key=d0f09b8f39c441a3a5f42b2948bc4919"
    )
      .then((response) => {
        if (response.ok) {
          console.log(response.json());
        }
        throw response;
      })
      .then((data) => setApi(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/games/new" element={<AddGamePage />} />
        <Route path="/games/:id" element={<GameDetail />} />
        <Route path="/create/new" element={<AuthPage setUser={setUser} />} />
        <Route
          path="/guest"
          element={<UserPage user={user} setUser={setUser} />}
        />
        <Route
          path="/admin"
          element={<AdminPage user={user} setUser={setUser} />}
        />
      </Routes>
    </>
  );
}

export default App;
