import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import Authentication from "./pages/Authentication";
import SearchBar from "./components/MenuBar";
import AnnouncementForm from './components/AnnouncementForm';
import {useState} from "react";
import {useCycle} from "framer-motion";
import {IsAuthenticatingContext} from "./providers/isAuthenticatingProvider";
import {FilterTypeContext} from "./providers/filterTypeProvider";

function App() {
  const [searchBarContent, setSearchBarContent] = useState("")
  const [isAuthenticating, setIsAuthenticating] = useCycle(false, true)
  const [filterType, setFilterType] = useState("")

  return (
    <div className="App">
      <IsAuthenticatingContext.Provider value={{isAuthenticating, setIsAuthenticating}}>
        <FilterTypeContext.Provider value={{filterType}}>
          <Router>
            <Navbar/>
            {!isAuthenticating && (<SearchBar {...{setFilterType}}/>)}
            <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route path="/authentication" component={Authentication}/>
              <Route path="/add_announcement" component={AnnouncementForm}/>
            </Switch>
          </Router>
        </FilterTypeContext.Provider>
      </IsAuthenticatingContext.Provider>
    </div>
  );
}

export default App;
