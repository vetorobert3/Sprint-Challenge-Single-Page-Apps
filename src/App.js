import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import WelcomePage from './components/WelcomePage.js';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList.js';
import LocationCard from './components/LocationCard.js';


export default function App(props) {
  return (
    <main>
      <Header />
      <BrowserRouter>
        <Link to='/components/WelcomePage.js'>Home</Link>

        <Route path='/components/WelcomePage.js' component={WelcomePage} />
      </BrowserRouter>
      <CharacterList />
    </main>
  );
}
