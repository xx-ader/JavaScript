let sectionEl = document.querySelector(".section");
// let divs = document.querySelectorAll(".section div");

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

let API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=150";

sectionEl.innerHTML = "Loading Please Wait . . .";

function fetchMovies(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (element) {
      /** function color rate  */
      function rate(vote) {
        if (vote <= 5) {
          return "redRate";
        } else if (vote <= 8) {
          return "yellowRate";
        } else if (vote > 8) {
          return "greenRate";
        }
      }
      /** function color rate end */

      sectionEl.innerHTML = "";
      let tableResult = element.results;
      tableResult.forEach((movie) => {
        sectionEl.innerHTML += `<div><img src="${
          IMG_PATH + movie.poster_path
        }" alt="sorry.png"><span>
                <h3 class="movieTitle">${movie.original_title}</h3>
                <p class="vote ${rate(movie.vote_average)}">${
          movie.vote_average
        }</p>
            </span>
            <main class="overview"><h4>Overview</h4>${movie.overview}
            </main>
        </div>`;
      });
    });
}

fetchMovies(API_URL);

/** Search element  */
let searchEl = document.querySelector(".search");

let search_API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=grudge";

searchEl.addEventListener("keyup", function () {
  if (event.keyCode === 13) {
    search_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${searchEl.value}`;

    fetchMovies(search_API_URL);
  }
});
