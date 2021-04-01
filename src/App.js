import { BrowserRouter as Router} from "react-router-dom";
import './scss/Fonts.scss';
import './scss/App.scss';

import SearchBar from './components/searchBar.js'

function App() {
  return (
    <Router>
    <div className="outer-wrapper">
      <div className="nav-border-wrapper">
        <div className="nav-wrapper">
          <h1>
            <span className="title-large">WEATHER.BULLETIN</span>
            <span className="title-small">W.B</span>
          </h1>
          <SearchBar />
        </div>
      </div>

      <div id="weather-day-container"></div>
    </div>
    </Router>
  );
}

export default App;
