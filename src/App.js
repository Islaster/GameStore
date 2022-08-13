import "./App.css";
import { useState } from "react";
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

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GameList user={user} />} />
        <Route path="/games/:id" element={<GameDetail />} />
        <Route path="/create/new" element={<AuthPage setUser={setUser} />} />
        <Route path="/games/new" element={<AddGamePage />} />
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
