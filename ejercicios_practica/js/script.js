"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");

const ejemplo = 1;

if(ejemplo == 1) {

// Fetch de un archivo JSON
fetch("./bulbasaur.json")
    .then(response => response.text())
    .then(data => {
        /** Procesar los datos **/
        console.log("Datos procesados en formato ¿?");
        console.log(data);
}
)
    .catch(data => console.log("falla la promesa"))
    .finally(d => console.log("se ejecuta siempre"));
};

const pokeNameDiv = document.getElementById('pokeName');
const pokeTypesDiv = document.getElementById('pokeTypes');
const pokeStatsDiv = document.getElementById('pokeStats');

fetch('bulbasaur.json')
  .then(response => response.json())
  .then(pokemonData => {
    displayPokemonName(pokemonData.name);
    displayPokemonTypes(pokemonData.types);
    displayPokemonStats(pokemonData.stats);
  });

function displayPokemonName(name) {
  pokeNameDiv.innerHTML = `<h2>${name}</h2>`;
}

function displayPokemonTypes(types) {
  const typeHTML = types.map(type => `<span class="type">${type.type.name}</span>`).join('');
  pokeTypesDiv.innerHTML = `<h3>Tipos:</h3> ${typeHTML}`;
}

function displayPokemonStats(stats) {
  const statHTML = stats.map(stat => `
    <div class="stat">
      <span class="stat-name">${stat.stat.name}:</span>
      <span class="stat-value">${stat.base_stat}</span>
    </div>
  `).join('');
  pokeStatsDiv.innerHTML = `<h3>Estadísticas:</h3> ${statHTML}`;
}
