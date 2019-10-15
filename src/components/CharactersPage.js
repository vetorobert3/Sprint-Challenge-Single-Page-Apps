import React from "react";

import CharacterCard from './CharacterCard.js';

export default function CharactersPage() {
  return (
    <section className="characters-page">
      <header>
        <h1>Characters</h1>
          <CharacterCard />
      </header>
    </section>
  );
}
