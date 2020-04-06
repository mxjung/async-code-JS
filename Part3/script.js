

async function get_pokemon() {
  let poke = Math.ceil(Math.random()*963);
  // let poke2 = Math.ceil(Math.random()*963);
  // let poke3 = Math.ceil(Math.random()*963);

  let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`);
  let pokemonSpecies = pokemon.data.name;

  let species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonSpecies}`);

  let flavor_text;
  let flavor_text_entries = species.data.flavor_text_entries
  for (let i=0; i< flavor_text_entries.length; i++) {
    if (flavor_text_entries[i].language.name === 'en') {
      flavor_text = flavor_text_entries[i].flavor_text;
      break;
    }
  }
  return {
    'name': pokemonSpecies,
    'image': pokemon.data.sprites.front_default,
    'flavor': flavor_text
  }
}

$('#get-pokemon').on('click', async function () {
  let pokemon = await get_pokemon();
  let container = `
                  <div class='pokemon'>
                    <h2>${pokemon.name}</h2>
                    <img src="${pokemon.image}">
                    <p>${pokemon.flavor}</p>
                  </div>
                  `
  $('#list-pokemon').append(container);
})