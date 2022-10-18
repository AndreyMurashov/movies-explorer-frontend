import './Main.css';
import { Route, Switch } from 'react-router-dom';
import AboutProject from './AboutProject/AboutProject'
import AboutMe from './AboutMe/AboutMe'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Login from '../Login/Login'
import Register from '../Register/Register.js'

function Main() {
  return (
    <div className="Main">
      <Switch>
        <Route path='/movies'><Movies /></Route>
        <Route path='/saved-movies'><SavedMovies /></Route>
        <Route path='/profile'><AboutMe /></Route>
        <Route path='/signup'><Register /></Route>
        <Route path='/signin'><Login /></Route>
        <Route exact path='/'><AboutProject /></Route>
      </Switch>
  
    </div>
  );
}

export default Main;