// manually setting photos
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
        case 'sinistcha': {
            let pokemonImg = './images/ogartwork/sinistcha.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Sinistcha';
            break
        }
        case 'ogerpon-wellspring': {
            let pokemonImg = './images/ogartwork/wellspring.webp';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Ogerpon';
            break
        }
        case 'ogerpon-hearthflame': {
            let pokemonImg = './images/ogartwork/hearthflame.webp';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Ogerpon';
            break
        }
        case 'ogerpon-cornerstone': {
            let pokemonImg = './images/ogartwork/cornerstone.webp';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Ogerpon';
            break
        }
        case 'shellos-east': {
            let pokemonImg = './images/ogartwork/shellos-east.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Shellos';
            break
        }
        case 'gastrodon-east': {
            let pokemonImg = './images/ogartwork/gastrodon-east.png';
            let imgDiv = document.querySelector(`#${type}-img`)
            imgDiv.src = pokemonImg;
            document.querySelector(`#${type}-name`).textContent = 'Gastrodon';
            break
        }
        default:
            return name;
    }
};

