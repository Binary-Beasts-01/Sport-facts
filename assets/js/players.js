const loader = document.querySelector('.s');
loader.classList.add('active');
import { fetchPlayerData } from './api.js';

const listOfPlayers = document.querySelector('#listOfFootballPlayers');
listOfPlayers.innerHTML = '';
fetchPlayerData('Cristiano_Ronaldo', addPlayer);
fetchPlayerData('Danny_Welbeck', addPlayer);
fetchPlayerData('Lionel_Messi', addPlayer);
fetchPlayerData('CIRO_IMMOBILE', addPlayer);
fetchPlayerData('JADON_SANCHO', addPlayer);
fetchPlayerData('LUIS_SUAREZ', addPlayer);
fetchPlayerData('KARIM_BENZEMA', addPlayer);
fetchPlayerData('KEYLOR_NAVAS', addPlayer);
fetchPlayerData('ROBERT_LEWANDOWSKI', addPlayer);
fetchPlayerData('DAVID_DE_GEA', addPlayer);
fetchPlayerData('EDEN_HAZARD', addPlayer);
fetchPlayerData('GIORGIO_CHIELLINI', addPlayer);

function addPlayer(player) {
  player = player.player[0];
  console.log(player);
  let o = document.createElement('div');
  o.className += `col-lg-3 col-md-4 col-sm-12 element-item`;
  o.innerHTML = `<div class="our-project">
      <div class="img">
          <a class="test-popup-link" href="person.html?name=${player.strPlayer}">
              <img src="${player.strThumb}" alt="portfolio-1"
                  class="img-fluid">
          </a>
      </div>
      <div class="title py-4">
          <h4 class="text-uppercase player-name">${player.strPlayer}</h4>
          <span class="text-secondary player-stats">${player.strPosition}, ${player.strTeam}</span>
      </div>
  </div>`;
  listOfPlayers.appendChild(o);
  $('.project-area .grid').isotope('insert', o);
  loader.classList.remove('active');
}

function displaySearchResult(player) {
  player = player.player[0];
  console.log(player);
  listOfPlayers.innerHTML = ""
  let o = document.createElement('div');
  o.className += `col-lg-3 col-md-4 col-sm-12 element-item`;
  o.innerHTML = `<div class="our-project">
      <div class="img">
          <a class="test-popup-link" href="person.html?name=${player.strPlayer}">
              <img src="${player.strThumb}" alt="portfolio-1"
                  class="img-fluid">
          </a>
      </div>
      <div class="title py-4">
          <h4 class="text-uppercase player-name">${player.strPlayer}</h4>
          <span class="text-secondary player-stats">${player.strPosition}, ${player.strTeam}</span>
      </div>
  </div>`;
  listOfPlayers.appendChild(o);
  $('.project-area .grid').isotope('insert', o);
  loader.classList.remove('active');
}

const searchBtn = document.querySelector('#search-btn-player');
const searchInput = document.querySelector('#search-input-player');

searchBtn.addEventListener('click', searchPlayer);
searchInput.addEventListener('keyup', filterPlayer);

function searchPlayer(e) {
  e.preventDefault()
  let query = searchInput.value.toString().replaceAll(" ", "_")
  fetchPlayerData(query, displaySearchResult)
}

// team filtering
function filterPlayer(e) {
  e.preventDefault();
  let query = searchInput.value.trim();
  let clubs = document.querySelectorAll('#listOfFootballPlayers .player-name');
  clubs.forEach((el) => {
    let par = el.parentElement.parentElement.parentElement;
    if (query != '') {
      if (el.textContent.toLowerCase().startsWith(query.toLowerCase())) {
        par.style.display = 'block';
        par.style.position = 'static';
      } else {
        par.style.display = 'none';
        par.style.position = 'static';
      }
    } else {
      par.style.display = 'block';
      par.style.position = 'static';
    }
  });
}
