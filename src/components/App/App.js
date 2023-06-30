import { Routes, Route } from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import RegisterChild from '../RegisterChild/RegisterChild';
import Login from "../Login/Login";
import '../../link/link.css'

import './App.css';

function App() {

  return (

    <div className="page">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies movies={new Array(12).fill(null)} />} />
        <Route path="/saved-movies" element={<SavedMovies movies={[]} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<RegisterChild />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
