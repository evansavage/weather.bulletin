
import './scss/Fonts.scss';
import './scss/App.scss';

import SearchBar from './components/searchBar.js'

function App() {

  return (
    <div className="outer-wrapper">
      <div className="nav-border-wrapper">
        <div className="nav-wrapper">
          <h1>WEATHER.BULLETIN</h1>
          <SearchBar />
        </div>
      </div>

      <div id="weather-day-container"></div>
    </div>
  );
}

export default App;
