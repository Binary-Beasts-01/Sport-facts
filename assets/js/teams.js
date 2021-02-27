const teamSection = document.querySelector('#teamsByLeague');

function fetchAllTeamsInALeague(leagueName) {
  fetch(
    `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${leagueName}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let products = json;
      let teams = shuffle(products.teams);
      addTeams(teams);
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
  for (team of teams) {
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
  }
}

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
