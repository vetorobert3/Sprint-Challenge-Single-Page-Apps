import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard.js';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChars = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setChars(response.data.results)
          console.log(response);
        })
        .catch(err => {
          console.log(err)
        })
    }

    getChars();
  }, []);

  return (
    <section className="character-list">
      <h2>{chars.map(char => (
        <CharacterCard name={char.id}/>
      ))}
        TODO: `array.map()` over your state here!
      </h2>
    </section>
  );
}
