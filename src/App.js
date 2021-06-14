import "./App.css";
import {Provider} from 'react-redux'


import Posts from "./components/Posts";
import Postform from "./components/Postform";
import store from "./store"



function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <h1> welcome to react-redux example</h1>

        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
