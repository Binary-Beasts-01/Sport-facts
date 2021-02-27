import { fetchTeamData, fetchTeamEvent } from './api.js';

const urlParams = new URLSearchParams(window.location.search);
const teamName = urlParams.get('name').replaceAll(' ', '_');
const teamID = urlParams.get('id').replaceAll(' ', '_');
const teamSection = document.querySelector('#selectedTeamDetail');
const teamEvent = document.querySelector('#selectedTeamEvent .row');

fetchTeamData(teamName, addTeamDetail);
fetchTeamEvent(teamID, addTeamEvent);

function addTeamEvent(p) {
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
  teamEvent.innerHTML = temp;
}

function addTeamDetail(data) {
  let output;
  data = data.teams[0];
  output = `<div class="row mx-5">
                <div class="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                    <div class="about-image">
                        <img src="${data.strTeamJersey}" alt="About us" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 about-title">
                    <h2 class="text-uppercase pt-5">
                        <span>${data.strTeam}</span>
                    </h2>
                    <div class="paragraph py-4 pe-3">
                        <p class="para text-justify">
                        ${data.strDescriptionEN}
                        </p>
                    </div>
                </div>
            </div>`;
  output += `<div class="row mx-5">
                <div class="col-lg-6 col-md-12 about-title">
                <h2 class="text-uppercase pt-5">
                <span>${data.strStadium}</span>
                </h2>
                <div class="paragraph py-4 me-5 pe-5">
                <p class="para mr-5 pr-5  text-justify">
                ${data.strStadiumDescription}
                </p>
                </div>
                </div>
                <div class="col-lg-6 col-md-12 d-flex justify-content-center  align-items-center">
                    <div class="about-image">
                        <img src="${data.strStadiumThumb}" alt="About us" class="img-fluid">
                    </div>
                </div>
            </div>`;
  teamSection.innerHTML = output;
}
