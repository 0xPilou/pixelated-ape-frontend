import './css/App.css';
import {Header} from './component/Header'
import apggif from './images/gif/preview450.gif';


function App() {
  return (
    <div className="App">
      <Header />
      <section class="minting">
        <row>
            <div class="gif">
              <img src={apggif} alt="CollectionGif" />
            </div>
            <button class="wallet-btn btn" id="mintButton">
              <span>Mint</span>
            </button>
        </row>
      </section>


    </div>
  );
}

export default App;
