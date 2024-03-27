import logo from './images/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <nav>
        <ul>
          <li><a href="index.html">GivingGarden      </a></li>
          <li><a href="home.html">Home</a></li>
          <li><a href="favorites.html">Favorites</a></li>
          <li><a href="garden.html">Garden        </a></li>
          <li><a href="basket.html">Basket</a></li>
          <li><a href="profile.html">Profile</a></li>
          
        </ul>
        </nav>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Soon, this will be Giving Garden.
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