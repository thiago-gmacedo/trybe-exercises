// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const setJoke = (joke) => { 
  const jokeCont = document.querySelector('#jokeContainer')
  jokeCont.innerText = joke
}

const fetchJoke = () => {
  const object = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, object)
    .then(response => response.json())
      .then(data => setJoke(data.joke))
      
};

window.onload = () => fetchJoke();