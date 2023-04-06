import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import MyTopBar from "./components/MyTopBar";
import TvShows from "./components/TvShows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import RecentlyAdded from "./components/RecentlyAdded";
import MyList from "./components/MyList";
import NotFound from "./components/notFound";

function App() {
  return (
    <BrowserRouter>
      <MyTopBar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/recentlyadded" element={<RecentlyAdded />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
