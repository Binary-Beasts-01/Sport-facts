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

function addLeagues(leagues) {
  let counter = 0;
  leagues.forEach((league) => {
    let o = document.createElement('div');
    o.className += `col-lg-3 col-md-4 col-sm-12 element-item`;
    o.innerHTML = `<div class="our-project">
          <h2>${league.strLeague}</h2>
        <div class="title py-4">
            <h4 class="text-uppercase league-name">${league.strSport}</h4>
            <span class="text-secondary league-stats">${league.strLeagueAlternate}</span>
        </div>
    </div>`;
    leagueSection.appendChild(o);
  });
  //   for (x in leagues) {
  //     console.log(x);
  //     counter++;
  //     if (counter >= 20) {
  //       break;
  //     }
  //     let o = document.createElement('div');
  //     o.className += `col-lg-3 col-md-4 col-sm-12 element-item`;
  //     o.innerHTML = `<div class="our-project">
  //         <h2>${x.strLeague}</h2>
  //       <div class="title py-4">
  //           <h4 class="text-uppercase league-name">${x.strSport}</h4>
  //           <span class="text-secondary league-stats">${x.strLeagueAlternate}</span>
  //       </div>
  //   </div>`;
  //     leagueSection.appendChild(o);
  //     $('.project-area .grid').isotope('insert', o);
  //   }
}

// const searchBtn = document.querySelector('#search-btn');
// const searchInput = document.querySelector('#search-input');

// searchBtn.addEventListener('click', filterClub);
// searchInput.addEventListener('keyup', filterClub);

// // team filtering
// function filterClub(e) {
//   e.preventDefault();
//   let query = searchInput.value.trim();
//   let clubs = document.querySelectorAll('#teamsByLeague .player-name');
//   clubs.forEach((el) => {
//     let par = el.parentElement.parentElement.parentElement;
//     if (query != '') {
//       if (el.textContent.toLowerCase().startsWith(query.toLowerCase())) {
//         par.style.display = 'block';
//         par.style.position = 'static';
//       } else {
//         par.style.display = 'none';
//         par.style.position = 'static';
//       }
//     } else {
//       par.style.display = 'block';
//       par.style.position = 'static';
//     }
//   });
// }
