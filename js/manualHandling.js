// manually setting photos/names
// can remove whenever pokeapi adds original artwork for pokemon
function manualHandle(name, type) {


    switch (name) {
        // there is no west in api, made it here
        case 'shellos-west': {
            return 'shellos'
        }
        case 'gastrodon-west': {
            return 'gastrodon'
        }
        // it's morpeko-full-belly in api; unnecessary
        case 'morpeko': {
            return 'morpeko-full-belly'
        }
        case 'mimikyu': {
            return 'mimikyu-disguised'
        }
         // no photos in api for following pokemon
        case 'hydrapple': {
            let pokemonImg = './images/ogartwork/hydrapple.png';
            updateInfo(type, 'Hydrapple', pokemonImg);
            break
        }
        case 'archaludon': {
            let pokemonImg = './images/ogartwork/archaludon.png';
            updateInfo(type, 'Archaludon', pokemonImg);
            break
        }
        case 'terapagos': {
            let pokemonImg = './images/ogartwork/terapagos.png';
            updateInfo(type, 'Terapagos', pokemonImg);
            break
        }
        case 'terapagos-terestal': {
            let pokemonImg = './images/ogartwork/terapagos-terestal.png';
            updateInfo(type, 'Terapagos', pokemonImg);
            break
        }
        case 'terapagos-stellar': {
            let pokemonImg = './images/ogartwork/terapagos-stellar.png';
            updateInfo(type, 'Terapagos', pokemonImg);
            break
        }
        case 'pecharunt': {
            let pokemonImg = './images/ogartwork/pecharunt.png';
            updateInfo(type, 'Pecharunt', pokemonImg);
            break
        }
        case 'iron-crown': {
            let pokemonImg = './images/ogartwork/iron-crown.png';
            updateInfo(type, 'Iron Crown', pokemonImg);
            break
        }
        case 'iron-boulder': {
            let pokemonImg = './images/ogartwork/iron-boulder.png';
            updateInfo(type, 'Iron Boulder', pokemonImg);
            break
        }
        case 'raging-bolt': {
            let pokemonImg = './images/ogartwork/raging-bolt.png';
            updateInfo(type, 'Raging Bolt', pokemonImg);
            break
        }
        case 'gouging-fire': {
            let pokemonImg = './images/ogartwork/gougingfire.png';
            updateInfo(type, 'Gouging Fire', pokemonImg);
            break
        }
        case 'sinistcha': {
            let pokemonImg = './images/ogartwork/sinistcha.png';
            updateInfo(type, 'Sinistcha', pokemonImg);
            break
        }
        case 'ogerpon-wellspring': {
            let pokemonImg = './images/ogartwork/wellspring.png';
            updateInfo(type, 'Ogerpon', pokemonImg);
            break
        }
        case 'ogerpon-hearthflame': {
            let pokemonImg = './images/ogartwork/hearthflame.png';
            updateInfo(type, 'Ogerpon', pokemonImg);
            break
        }
        case 'ogerpon-cornerstone': {
            let pokemonImg = './images/ogartwork/cornerstone.png';
            updateInfo(type, 'Ogerpon', pokemonImg);
            break
        }
        case 'shellos-east': {
            let pokemonImg = './images/ogartwork/shellos-east.png';
            updateInfo(type, 'Shellos', pokemonImg);
            break
        }
        case 'gastrodon-east': {
            let pokemonImg = './images/ogartwork/gastrodon-east.png';
            updateInfo(type, 'Gastrodon', pokemonImg);
            break
        }
        default:
            return name;
    }
};

function updateInfo(type, newName, newImg){
    // query select all elements with these classes
    let pokeElements = document.querySelectorAll(`.${type}-img, .${type}-name`);
    // loop through them
    pokeElements.forEach((element) => {
        // looping through, if the class we target is the img class, we set the new img.
        // if the class we target is the name class, we set the new name
        if (element.classList.contains(`${type}-img`)){
            element.src = newImg;
        } else if (element.classList.contains(`${type}-name`)){
            element.textContent = newName;
        }
    })
};