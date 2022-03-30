const APIKEY = "k_59q1yuxx";

export const fetchMovies = async () => {
  return await fetch(
    `https://imdb-api.com/API/AdvancedSearch/${APIKEY}?groups=top_250&count=250`
  ).then((res) => res.json());
};

export const fetchSingleMovie = async (id) => {
  return await fetch(`https://imdb-api.com/API/Title/${APIKEY}/${id}`).then(
    (res) => res.json()
  );
};

export const filterMovieByGenre = async (genre) => {
  return await fetch(
    `https://imdb-api.com/API/AdvancedSearch/${APIKEY}?genres=${genre}&sort=year,asc`
  ).then((res) => res.json());
};

export const filterMovieByRating = async (rate) => {
  return await fetch(
    `https://imdb-api.com/API/AdvancedSearch/${APIKEY}?user_rating=${rate},&sort=year,asc`
  ).then((res) => res.json());
};
