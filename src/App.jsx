import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyTopBar from "./components/MyTopBar";
import TvShows from "./components/TvShows";
import Home from "./components/Home";
import Movies from "./components/Movies";
import RecentlyAdded from "./components/RecentlyAdded";
import MyList from "./components/MyList";
import NotFound from "./components/notFound";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <MyTopBar />
      <div className="app">
        <Routes>
          <Route path="/" element={<TvShows />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/recentlyadded" element={<RecentlyAdded />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/details/:filmId" element={<Details />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
