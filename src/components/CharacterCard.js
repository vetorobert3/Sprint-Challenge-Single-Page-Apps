import React from "react";

export default function CharacterCard(props) {
  return (
    <>
      <img src={props.image}/>
      <h2>{props.name}</h2>
      <p>{props.species}</p>
    </>
  )
}
