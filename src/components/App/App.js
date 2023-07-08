import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import RegisterChild from '../RegisterChild/RegisterChild';
import Login from "../Login/Login";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './App.css';
import { errorToJson } from '../../utils/helpers';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { localStorageKeys } from '../../utils/constants';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const navigate = useNavigate()

  useEffect(() => {
    const isLogged = localStorage.getItem(localStorageKeys.isLogged)
    setIsLoggedIn(isLogged)
    if (isLogged && !Object.keys(currentUser).length) {
      mainApi.getCurrentUser()
        .then((user) => {
          setCurrentUser((oldUserInfo) => { return { ...oldUserInfo, ...user } })
        })
        .catch(errorToJson((err) => console.error('getCurrentUser', err && err.message, err)))
    }
  }, [])

  function handleRegister({ name, email, password }, error) {
    mainApi.register(name, email, password)
      .then((data) => {
        setCurrentUser((oldUserInfo) => { return { ...oldUserInfo, ...data } })
        navigate('/signin', { replace: true })
      })
      .catch(errorToJson(error))
  }

  function handleLogin({ email, password }, error) {
    mainApi.login(email, password)
      .then((data) => {
        setCurrentUser((oldUserInfo) => { return { ...oldUserInfo, ...data } })
        localStorage.setItem(localStorageKeys.isLogged, true)
        setIsLoggedIn(true)
        navigate('/movies', { replace: true })
      })
      .catch(errorToJson(error))
  }

  function handleProfileChange(data, callback, error) {
    mainApi.updateUser(data)
      .then((updated) => {
        setCurrentUser((oldUserInfo) => { return { ...oldUserInfo, ...updated } })
        callback()
      })
      .catch(errorToJson(error))
  }

  function exit() {
    mainApi.signout()
      .then(() => {
        Object.keys(localStorageKeys).forEach((key) => localStorage.removeItem(localStorageKeys[key]))
        setCurrentUser({})
        setIsLoggedIn(false)
        navigate('/', { replace: true })
      })
      .catch(errorToJson((err) => console.error('signout', err && err.message, err)))
  }

  function saveMovie(movieData, callback) {
    mainApi.addMovie(movieData)
      .then((createdCard) => {
        callback(createdCard)
      })
      .catch(errorToJson((err) => console.error('addMovie', err && err.message, err)))
  }

  function deleteMovieFromSaved(movieId, callback) {
    mainApi.deleteMovie(movieId)
      .then((res) => {
        callback(res)
      })
      .catch(errorToJson((err) => console.error('deleteMovie', err && err.message, err)))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={
            <Main isLoggedIn={isLoggedIn} />
          } />
          <Route path="/movies" element={
            <ProtectedRoute
              element={Movies}
              onSaveMovie={saveMovie}
              onDeleteMovie={deleteMovieFromSaved}
              renderIf={isLoggedIn}
              pathToNavigate="/"
            />
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute
              element={SavedMovies}
              onDeleteMovie={deleteMovieFromSaved}
              renderIf={isLoggedIn}
              pathToNavigate="/"
            />
          } />
          <Route path="/profile" element={
            <ProtectedRoute
              element={Profile}
              renderIf={isLoggedIn}
              pathToNavigate="/"
              onExit={exit}
              onProfileDataChange={handleProfileChange}
            />
          } />
          <Route path="/signup" element={
            <ProtectedRoute
              element={RegisterChild}
              renderIf={!isLoggedIn}
              pathToNavigate="/"
              onRegister={handleRegister}
            />
          } />
          <Route path="/signin" element={
            <ProtectedRoute
              element={Login}
              renderIf={!isLoggedIn}
              pathToNavigate="/"
              onLogin={handleLogin}
            />
          } />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
