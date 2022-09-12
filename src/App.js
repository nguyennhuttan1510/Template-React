import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { todoSetInitiated } from "./reducers/appSlice";

function App() {
  const dispatch = useDispatch()
  const initialState = useSelector(state => state.app.initial)

  const handleAction = () => {
    dispatch(todoSetInitiated('State is changed'))
  }

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
        <div>{initialState}</div>
    <div>
      <button onClick={handleAction}>Change Redux Store</button>
    </div>
      </header>
    
    </div>
  );
}

export default App;
