// import React, { Component } from 'react'

const Characters = () => {
  return fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      return resJson
    })
    .catch((error) => {
      console.error(error);
    })
}

const NameCharacter = characters => <div>
    <p>{characters.name}</p>
  </div>

