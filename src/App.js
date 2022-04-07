import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Archive from "./pages/archive/Archive";
import Trash from "./pages/trash/Trash";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import LandingPage from "./pages/landing-page/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="home" element={<Home />} />
      <Route path="archive" element={<Archive />} />
      <Route path="trash" element={<Trash />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
