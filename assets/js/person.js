import {fetchPlayerData, fetchPlayerHonor} from "./api.js";

const urlParams = new URLSearchParams(window.location.search);
const playerName = urlParams.get('name').replaceAll(" ", "_");
const aboutPlayer = document.querySelector("#about-player");
const playerHonor = document.querySelector("#player-honor");

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
    console.log(data.idPlayer);
    fetchPlayerHonor(data.idPlayer, addPlayerHonor);
    aboutPlayer.innerHTML = output;
}

function addPlayerHonor(data) {
    let temp = '';
    for (let honor of data.honors) {
        temp += `<div class="swiper-slide d-flex align-items-center justify-content-center m-2" style="background-color: #ebebf2; border-top: .3125em solid #351c75">
                    <div>
                        <p>Won ${honor.strHonour}</p>
                        <p>With ${honor.strTeam}</p>
                        <p>In ${honor.strSeason}</p>
                    </div>
                </div>`
    }
    // console.log(temp);
    playerHonor.innerHTML = temp;
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
}