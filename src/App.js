import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import WelcomePage from './components/WelcomePage.js';
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList.js';


export default function App() {
  return (
    <main>
      <Header />
      <BrowserRouter>
        <Link to='/components/WelcomePage.js'>Home</Link>
        <Link to='/components/CharacterList.js'>Characters</Link>

        <Route path='/components/WelcomePage.js' component={WelcomePage} />
        <Route path='/components/CharacterList.js' component={CharacterList} />
      </BrowserRouter>
    </main>
  );
}
