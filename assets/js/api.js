function fetchTeamData(query) {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${query}`).then(function(response) {
    return response.json();
  }).then(function(json) {
    let products = json;
    displayTeam(products);
  }).catch(function(err) {
    console.log('Fetch problem: ' + err.message);
  });
}

fetchTeamData("Barcelona");

function displayTeam(data) {
    console.log(data.teams);
} 

function fetchPlayerData(firstname, lastname) {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${firstname}%20${lastname}`).then(function(response) {
    return response.json();
  }).then(function(json) {
    let products = json;
    displayPlayer(products);
  }).catch(function(err) {
    console.log('Fetch problem: ' + err.message);
  });
}

fetchPlayerData("Cristiano", "Ronaldo");

function displayPlayer(data) {
    console.log(data.player);
} 

function fetchAllTeamsInALeague(leagueName) {
  fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${leagueName}`).then(function(response) {
  return response.json();
}).then(function(json) {
  let products = json;
  displayAllTeamsInLeague(products);
}).catch(function(err) {
  console.log('Fetch problem: ' + err.message);
});
}

fetchAllTeamsInALeague("English_Premier_League");

function displayAllTeamsInLeague(data) {
  console.log(data.teams);
} 