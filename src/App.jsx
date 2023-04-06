import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import MyTopBar from "./components/MyTopBar";
import TvShows from "./components/TvShows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <MyTopBar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
