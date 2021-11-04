import {
  BrowserRouter as Router,
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home";
import Results from "./components/Results";

function App() {
  return (

    <BrowserRouter>

      <Link to="/"></Link>
      <Link to ="/results/search/id"></Link>

    <Switch>
    <Route path="/results/:search/:id">
          <Results />
      </Route>

      <Route path="/">
          <Home />
      </Route>

    </Switch>
    
    
    
    
    
    
    
    
    </BrowserRouter>
 
  );
}

export default App;
