export function fetchTeamData(query, callback) {
  fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${query}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let products = json;
      callback(products);
    })
    .catch(function (err) {
      console.log('Fetch problem: ' + err.message);
    });
}

export function fetchLeagueData(id, callback) {
  fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let products = json;
      callback(products.leagues[0]);
    })
    .catch(function (err) {
      console.log('Fetch problem: ' + err.message);
    });
}

export function fetchLeagueEvent(id, callback) {
  fetch(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let products = json;
      callback(products.results);
    })
    .catch(function (err) {
      console.log('Fetch problem: ' + err.message);
    });
}

export function fetchTeamEvent(id, callback) {
  fetch(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let products = json;
      callback(products.results);
    })
    .catch(function (err) {
      console.log('Fetch problem: ' + err.message);
    });
}

export function fetchPlayerData(name, callback) {
  fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${name}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let products = json;
      callback(products);
    })
    .catch(function (err) {
      console.log('Fetch problem: ' + err.message);
    });
}

export function fetchPlayerHonor(id, callback) {
  fetch(`https://www.thesportsdb.com/api/v1/json/1/lookuphonors.php?id=${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let products = json;
      callback(products);
    })
    .catch(function (err) {
      console.log('Fetch problem: ' + err.message);
    });
}

export function fetchAllTeamsInALeague(leagueName, callback) {
  fetch(
    `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=${leagueName}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let products = json;
      callback(products);
    })
    .catch(function (err) {
      console.log('Fetch problem: ' + err.message);
    });
}
