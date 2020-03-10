const fetch = require("node-fetch");

/* Exercise 2a */

var baseURL = "https://swapi.co/api/";

function getPlanetForFirstSpeciesInFirstMovieForPerson(id) {
  const result = {};
  let opts = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json"
    }
  };
  const personData = fetch(baseURL + "people/" + id, opts);
  personData
    .then(res => res.json())
    .then(data => {
      result.Name = data.name;
      films = data.films;
      films.sort();
      result.First_film = films[0];
      /* ----- */
      fetch(films[0], opts)
        .then(res => res.json())
        .then(data => {
          species = data.species;
          species.sort();
          result.First_species = species[0];
          /* ----- */
          fetch(species[0], opts)
            .then(res => res.json())
            .then(data => {
              homeworldLink = data.homeworld;
              /* ----- */
              fetch(homeworldLink, opts)
                .then(res => res.json())
                .then(data => {
                  result.Homeworld_for_specie = data.name;
                  console.log(result);
                });
            });
        });
    });
  return result;
}

//const data = getPlanetForFirstSpeciesInFirstMovieForPerson(1);

/* Exercise 2b */

async function getPlanetforFirstSpeciesInFirstMovieForPersonAsyncAwait(id) {
  const result = {};
  let opts = {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json"
    }
  };
  try {
      const d1 = await fetch(baseURL + "people/" + id, opts).then(res => res.json());
      result.Name = d1.name;
      films = d1.films;
      films.sort();
      result.First_film = films[0];
      /* ----- */
      const d2 = await fetch(films[0], opts).then(res => res.json());
      species = d2.species;
      species.sort();
      result.First_species = species[0];
      /* ----- */
      const d3 = await fetch(species[0], opts).then(res => res.json());
      homeworldLink = d3.homeworld;
      /* ----- */
      const d4 = await fetch(homeworldLink, opts).then(res => res.json());
      result.Homeworld_for_specie = d4.name;
      console.log(result);
  } catch (error) {
      console.log("Something went wrong");
      console.log(error);
  }
  return result;
}

const dataAsyncAwait = getPlanetforFirstSpeciesInFirstMovieForPersonAsyncAwait(1);
