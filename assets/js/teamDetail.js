import {fetchTeamData} from "./api.js";

const urlParams = new URLSearchParams(window.location.search);
const teamName = urlParams.get('name').replaceAll(" ", "_");
const teamSection = document.querySelector("#selectedTeamDetail");


fetchTeamData(teamName, addTeamDetail);

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



