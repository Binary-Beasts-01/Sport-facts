const leagueSection = document.querySelector('#listOfLeagues');

function fetchAllLeague() {
  fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let leagues = json.leagues.slice(0, 30);
      let l = shuffle(leagues);
      addLeagues(l);
    })
    .catch(function (err) {
      console.log('Fetch problem: ' + err.message);
    });
}
leagueSection.innerHTML = '';

fetchAllLeague();



const searchBtn = document.querySelector('#search-btn-league');
const searchInput = document.querySelector('#search-input-league');

searchBtn.addEventListener('click', filterLeague);
searchInput.addEventListener('keyup', filterLeague);

// team filtering
function filterLeague(e) {
  e.preventDefault();
  let query = searchInput.value.trim();
  let clubs = document.querySelectorAll('#listOfLeagues .league-name');
  clubs.forEach((el) => {
    let par = el.parentElement.parentElement;
    if (query != '') {
      if (el.textContent.toLowerCase().includes(query.toLowerCase())) {
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
