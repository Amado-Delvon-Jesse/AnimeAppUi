import logo from './logo.svg';
import './App.css';
import {XRapidAPIKey, XRapidAPIHost} from './keys.js';
import axios from 'axios';
import './DatabaseAnimeDB.js';
import readDatabase from './DatabaseAnimeDB.js';

const options = {
  method: 'GET',
  url: 'https://anime-db.p.rapidapi.com/anime',
  params: {page: '1', size: '10000', sortBy: 'ranking', sortOrder: 'asc'},
  headers: {
    'X-RapidAPI-Key': XRapidAPIKey,
    'X-RapidAPI-Host': XRapidAPIHost
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
