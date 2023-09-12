/*
  Pokemon Finder

  This challenge will have 5 functions where, given an array, display the required information.
*/

var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
  ];
  
  /**
  * console.log the pokemon objects whose id is evenly divisible by 3 
  * @param {Array<any>} pokemon
  * @returns {null} no return
  */
  function dividibleByThree(pokemon) {
    for( var i = 0; i < pokemon.length; i++){
        if(pokemon[i].id % 3 === 0) {
            console.log(pokemon[i]);
        }
    }
  }
  dividibleByThree(pokemon);
  /**
  * console.log the pokemon objects that have more than one type
  * @param {Array<any>} pokemon
  * @returns {null} no return
  */
  function moreThanOneType(pokemon) {
    for( var i = 0; i < pokemon.length; i++){
        if(pokemon[i].types.length > 1) {
            console.log(pokemon[i]);
        }
    }
}
moreThanOneType(pokemon);
  
  /**
  * console.log the names of the pokemon whose only type is 'poison'
  * @param {Array<any>} pokemon
  * @returns {null} no return
  */
  function poisonType(pokemon) {
    for( var i = 0; i < pokemon.length; i++){
        if (pokemon[i].types.length === 1 && pokemon[i].types[0] === 'poison') {
            console.log(pokemon[i].name);
        }
  }
}
  poisonType(pokemon);
  /**
  * console.log the first type of all the pokemon whose second type is flying
  * @param {Array<any>} pokemon
  * @returns {null} no return
  */
  function flyingSecondType(pokemon) {
    for( var i = 0; i < pokemon.length; i++){
        if (pokemon[i].types[1] === 'flying') {
            console.log(pokemon[i].types[0]);
        }
  }
  }  
  flyingSecondType(pokemon);
  /**
  * console.log the reverse of the names of the pokemon whose only type is 'poison'
  * @param {Array<any>} pokemon
  * @returns {null} no return
  */
  function reversedNamesOfPoisonPokemon(pokemon) {
    for( var i = 0; i < pokemon.length; i++){
        if (pokemon[i].types.length === 1 && pokemon[i].types[0] === 'poison') {
            console.log(pokemon[i].name.split("").reverse().join(""));
        }
    }
  }
  reversedNamesOfPoisonPokemon(pokemon);