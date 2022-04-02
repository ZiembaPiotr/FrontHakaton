import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import Authentication from "./pages/Authentication";
import SearchBar from "./components/MenuBar";
import {useState} from "react";
import {useCycle} from "framer-motion";
import {IsAuthenticatingContext} from "./providers/isAuthenticatingProvider";

function App() {
  const [searchBarContent, setSearchBarContent] = useState("")
  const [isAuthenticating, setIsAuthenticating] = useCycle(false, true)

  return (
    <div className="App">
      <IsAuthenticatingContext.Provider value={{isAuthenticating, setIsAuthenticating}}>
        <Router>
          <Navbar/>
          {!isAuthenticating && (<SearchBar/>)}
          <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/authentication" component={Authentication}/>
          </Switch>
        </Router>
      </IsAuthenticatingContext.Provider>
    </div>
  );
}

export default App;
