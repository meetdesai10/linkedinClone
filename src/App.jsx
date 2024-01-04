import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Jobs from "./pages/Jobs/Jobs";
import Messaging from "./pages/Messaging/Messaging";
import Notifications from "./pages/Notifications/Notifications";
import ForBusiness from "./pages/ForBuisness/ForBusiness";
import MyNetwork from "./pages/MyNetwork/MyNetwork";
import Connection from "./component/MynetWorkPages/Connection/Connection";
import Groups from "./component/MynetWorkPages/Groups/Groups";
import Events from "./component/MynetWorkPages/Events/Events";
import Pages from "./component/MynetWorkPages/pages/Pages";
import NewsLetters from "./component/MynetWorkPages/NewsLetters/NewsLetters";
import Hashtags from "./component/MynetWorkPages/Hashtag/Hashtags";
import Following from "./component/MynetWorkPages/Following/Following";
import Profile from "./pages/Profile/Profile";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mynetwork" element={<MyNetwork />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/forbusiness" element={<ForBusiness />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* My Network Page Nested Routing  */}
      <Routes>
        <Route path="/mynetwork/connections" element={<Connection />} />
        <Route
          path="/mynetwork/followingandfollowers"
          element={<Following />}
        />
        <Route path="/mynetwork/groups" element={<Groups />} />
        <Route path="/mynetwork/events" element={<Events />} />
        <Route path="/mynetwork/pages" element={<Pages />} />
        <Route path="/mynetwork/newsletters" element={<NewsLetters />} />
        <Route path="/mynetwork/hashtags" element={<Hashtags />} />
      </Routes>
    </div>
  );
}
