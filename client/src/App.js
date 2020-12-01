import "./App.css";
import Header from "./components/layout/Header.js";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Infomation from "./components/pages/Infomation";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/infomation' component={Infomation} />
      </Router>
    </div>
  );
}

export default App;
