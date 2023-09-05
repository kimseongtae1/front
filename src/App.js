import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  axios.get('https://port-0-jsonserver-6w1j2alm48baij.sel5.cloudtype.app/')
  .then(res=>{
    console.log(res)
  });

  // axios.post('http://localhost:3030/insert',{id:1000,name:'신규데이터'})
  // .then(res => {
  //   console.log(res);
  // })






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
