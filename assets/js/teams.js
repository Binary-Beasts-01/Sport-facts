var totalFetch = 0;
var size = 10;
var currentIndex = 0;
let teams = '';

const teamSection = document.querySelector('#teamsByLeague');

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function fetchAllTeamsInALeague(leagueName) {
  fetch(
    `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${leagueName}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let products = json;
      teams = shuffle(products.teams);
      addTeams(products.teams);
    })
    .catch(function (err) {
      console.log('Fetch problem: ' + err.message);
    });
}
teamSection.innerHTML = '';

fetchAllTeamsInALeague('English_Premier_League');
fetchAllTeamsInALeague('german_bundesliga');
fetchAllTeamsInALeague('italian_serie_a');
fetchAllTeamsInALeague('French_Ligue_1');
fetchAllTeamsInALeague('spanish_La_Liga');

function addTeams(teams, league) {
  let counter = 0;
  for (team of teams) {
    if (counter == size - 1) {
      break;
    }
    let o = document.createElement('div');
    o.className += `col-lg-3 col-md-4 col-sm-12 element-item ${team.strCountry}`;
    o.innerHTML = `<div class="our-project">
    <div class="img">
        <a class="test-popup-link" href="teamDetail.html?name=${team.strTeam}">
            <img src="${team.strTeamBadge}" alt="portfolio-1"
                class="img-fluid">
        </a>
    </div>
    <div class="title py-4">
        <h4 class="text-uppercase player-name">${team.strTeam}</h4>
        <span class="text-secondary player-stats">Latest, Portfolio</span>
    </div>
</div>`;
    teamSection.appendChild(o);
    $('.project-area .grid').isotope('insert', o);
    counter++;
  }
}

// pagination
const getNext = document.querySelector('.pagination .nxt');
const getPrev = document.querySelector('.pagination .prv');
getNext.addEventListener('click', paginateNext);
getNext.addEventListener('click', paginatePrev);

function paginateNext(e) {}
function paginatePrev(e) {}

const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');

searchBtn.addEventListener('click', filterClub);
searchInput.addEventListener('keyup', filterClub);

// team filtering
function filterClub(e) {
  e.preventDefault();
  let query = searchInput.value.trim();
  let clubs = document.querySelectorAll('#teamsByLeague .player-name');
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
