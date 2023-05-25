import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Series from "./Pages/Series";
import Comics from "./Pages/Comics";
import Error404 from "./Pages/Error404";
import Header from "./Components/Header";
import useFetch from "./Hooks/useFetch";

function App() {
  const marvelApi=useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=bd082365ed550574ef2a6975fb47974c&hash=cf429065f3d7cb4b5ce59908e010184d')
  console.log(marvelApi);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/inicio" exact component={() => <Home />} />
          <Route path="/series" exact component={() => <Series />} />
          <Route path="/comics" exact component={() => <Comics />} />
          <Route component={() => <Error404 />} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;