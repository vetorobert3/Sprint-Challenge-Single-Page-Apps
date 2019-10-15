import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard.js';
import LocationCard from './LocationCard.js';

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

  console.log(chars);

  return (
    <section className="character-list">
      <h2>
        {chars.map(char => {
          return (
            <CharacterCard 
              key={char.id}
              name={char.name}
              species={char.species}
            />
          )
        })}
      </h2>
    </section>

    // <section>
    //   <h3>
    //     {chars.map(char => {
    //       return (
    //         <LocationCard 
    //           key={char.id}
    //           location={char.location}
    //         />
    //       )
    //     })}
    //   </h3>
    // </section>
  );
}
