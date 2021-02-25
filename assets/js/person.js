import {fetchPlayerData} from "./api.js";

const urlParams = new URLSearchParams(window.location.search);
const playerName = urlParams.get('name').replaceAll(" ", "_");
const aboutPlayer = document.querySelector("#about-player");

let output = '';

fetchPlayerData(playerName, addPlayerDetail);

function addPlayerDetail(data) {
    data = data.player[0];
    output += ` <div class="row">
                    <div class="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
                        <div class="about-image">
                            <img src="${data.strRender}" alt="Player Image" class="img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 about-title">
                        <h2 class="text-uppercase">
                            <span>${data.strPlayer}</span>
                        </h2>
                        <div class="paragraph py-4 w-75 player-bio-container">
                            <p class="para player-bio mt-3">
                                ${data.strDescriptionEN}
                            </p>
                        </div>
                    </div>
                </div>`;
    aboutPlayer.innerHTML = output;
}