import React, { useState, useEffect } from 'react';

const Animes = () => {
  // const [hasError, setErrors] = useState(false);
  const [animes, setAnimes] = useState({});

  useEffect(() => {
    async function getAnimes() {
      const results = await fetch(
        'https://api.jikan.moe/v3/search/anime?q=naruto&limit=16'
      );
      results.json().then(results => setAnimes(results.results[0].title)); //createAnime - WHY ? doesnt work!
      // .catch(err => setErrors(err));

      // function createAnime() {
      //   const myAnime = {};
      //   myAnime.title = results.results.title;
      //   myAnime.image = results.results.image_url;
      //   myAnime.synopsis = results.results.synopsis;
      //   return myAnime;
      // }
    }

    getAnimes();
  });

  return (
    <div>
      <span>{JSON.stringify(animes)}</span>
      <hr />
      {/* <span>Has error: {JSON.stringify(hasError)}</span> */}
    </div>
  );
};
export default Animes;

// function createAnime(res) {
//   let myAnime = {};
//   myAnime.title = res.results.title;
//   myAnime.image = res.results.image_url;
//   myAnime.synopsis = res.results.synopsis;

//   return myAnime;
// }
// console.log(getAnimes);
