//GET NAMES AND SORT THEM BY TYPES
function fetchPokemon(name) {

    let url = `https://pokeapi.co/api/v2/pokemon/{name}/`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
      console.log(data.sprites.other['official-artwork'].front_default);
        //must call whatever function uses the data within here
      })//ends .thendata
}//ends fetchPokemon fn

// fetchPokemon();



// SEARCH BAR WITH DROPDOWN AND FILTER
//made it a function to dynamically work with any type's div and array, will be called in callDropdowns() instead of calling it 18 times.
function pokemonDropdown(typeId, array) {
  //access the input element, the dropdown menu (ul), and all options (li)
  const dropdownInput = typeId.querySelector('.dropdown-input');
  const dropdownMenu = typeId.querySelector('.dropdown-menu');


  for (let i = 0; i < array.length; i++) {
    let grassChoice = document.createElement('li');
    grassChoice.setAttribute('class', 'dropdown-option');
    grassChoice.textContent = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    dropdownMenu.appendChild(grassChoice);
  };

  const dropdownOptions = dropdownMenu.querySelectorAll('.dropdown-option');

  //when click into input element, dropdown menu shows, originally hidden
  dropdownInput.addEventListener('click', function () {
    dropdownMenu.style.display = 'block';
  });



  //when anything is input in the element, event triggers the following
  dropdownInput.addEventListener('input', function () {

    // literally whatever the user is typed, the value of that is put into this const
    const whatUserTyped = dropdownInput.value.toLowerCase();

    // for each option that is in the ul...
    dropdownOptions.forEach(function (option) {
      // option's text content is lowercased and called "choice"
      console.log(option.textContent);
      const choice = option.textContent.toLowerCase();
      // if the choice includes any letter of what the user typed, show all choices that have the value of what has been typed
      if (choice.includes(whatUserTyped)) {
        option.style.display = 'block';
      } else {
        // hide the other choices
        option.style.display = 'none';
      }
    });
  });


  // when user clicks an option, input element's value is that option and menu hides
  dropdownOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      dropdownInput.value = option.textContent;
      dropdownMenu.style.display = 'none';
    });
  });
  // if user clicks outside of dropdown, dropdown hides too
  document.addEventListener('click', function (event) {
    if (!dropdownMenu.contains(event.target) && !dropdownInput.contains(event.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
};

// To dynamically call functions to make each list for each dropdown rather than calling the pokemonDropdown funciton 18 times
function callDropdowns() {
  let allTypes = ['grass', 'fire', 'water', 'normal', 'flying', 'electric', 'psychic', 'dark', 'ghost', 'poison', 'bug', 'fighting', 'rock', 'ground', 'steel', 'ice', 'dragon', 'fairy'];
  let allArrays = [ grassPokemon, firePokemon, waterPokemon, normalPokemon, flyingPokemon, electricPokemon, psychicPokemon, darkPokemon, ghostPokemon, poisonPokemon, bugPokemon, fightingPokemon, rockPokemon, groundPokemon, steelPokemon, icePokemon, dragonPokemon, fairyPokemon ]
  console.log(allArrays)

  for (let i = 0; i < allTypes.length; i++) {
    let type = allTypes[i];
    let typeSection = document.querySelector(`#${type}`);

    let typeArray = allArrays[i];

    pokemonDropdown(typeSection, typeArray);
  }
};

callDropdowns();