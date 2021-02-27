import { fetchLeagueData, fetchLeagueEvent } from './api.js';

const urlParams = new URLSearchParams(window.location.search);
const leagueName = urlParams.get('name').replaceAll(' ', '_');
const leagueID = urlParams.get('id').replaceAll(' ', '_');
const leagueSection = document.querySelector('#selectedLeagueDetail');
const leagueEvent = document.querySelector('#selectedLeageEvent .row');

fetchLeagueData(leagueID, addLeagueDetail);
fetchLeagueEvent(leagueID, addLeagueEvent);

function addLeagueEvent(p) {
  addEvent(p);
}

function addEvent(events) {
  let temp = '';
  for (let event of events) {
    temp += `
    <div class="col-sm-12 col-md-6 col-lg-4 mb-5">
    <div class="card text-center">
    <div class="card-header">
      ${event.strLeague}
    </div>
    <img src="${event.strThumb}" class="card-img-left" alt="match">
    <div class="card-body">
      <h5 class="card-title">${event.strFilename}</h5>
      <h6 class="card-title">Type: ${event.strSport}</h6>
      <h6 class="card-title">Season: ${event.strSeason}</h6>
      <p class="card-text">${event.strHomeTeam} ${event.intHomeScore} : ${event.intAwayScore} ${event.strAwayTeam}</p>
    </div>
  </div>
    </div>
    `;
  }
  // console.log(temp);
  leagueEvent.innerHTML = temp;
}

function addLeagueDetail(league) {
  console.log(league);
  let output;
  output = `<div class="row mx-5">
                <div class="col-sm-12 col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
                    <div class="about-image">
                        <img src="${league.strLogo}" alt="About us" class="img-fluid">
                    </div>
                </div>
                <div class="col-sm-12 col-lg-6 col-md-6 about-title">
                    <h2 class="text-uppercase pt-5">
                        <span>${league.strLeague}</span>
                    </h2>
                    <div class="paragraph py-4 pe-3">
                        <p class="para text-justify">
                        ${league.strDescriptionEN}
                        </p>
                    </div>
                </div>
            </div>`;
  output += `<div class="row mx-5">
  <div class="col-lg-6 col-md-12 d-flex justify-content-center  align-items-center">
                    <div class="about-image">
                        <img src="${league.strFanart1}" alt="About us" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 about-title">
                <h2 class="text-uppercase pt-5 text-center">
                <span class="text-center">${league.strLeagueAlternate}</span>
                <div class="col-lg-12 col-md-12 about-image text-center">
                        <img src="${league.strBanner}" alt="About us" class="img-fluid">
                </div>
                </h2>
                </div>
            </div>
            
                `;
  leagueSection.innerHTML = output;
}
