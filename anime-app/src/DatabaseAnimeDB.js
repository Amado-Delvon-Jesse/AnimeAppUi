const fetch = require('node-fetch');

const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10000&sortBy=ranking&sortOrder=asc';

const options = {
  method: 'GET',
  headers: {

  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));