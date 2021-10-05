import "./App.css";
import About from "./component/Home/About/About";
import Footer from "./component/Home/Footer/Footer";
import OurService from "./component/Home/OurServic/OurService";
import Header from "./component/Home/Header/Header";
import Teacher from "./component/Home/Teacher/Teacher";
import Home from "./component/Home/Home";

import Error from "./component/Home/Error/Error";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Contact from "./component/Home/Contact/Contact";



function App() {

  return (
    <div className="App">


      <Router>

        <Header></Header>
        <Switch>




          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/OurService">
            <OurService></OurService>
          </Route>

          {/* <Route path="/Ourmainervice">
            <Ourmainservice></Ourmainservice>
          </Route> */}

          <Route path="/teacher">
            <Teacher></Teacher>
          </Route>

          <Route path="/">
            <Home />
          </Route>

          <Route exact path="*">
            <Error></Error>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>



    </div>
  )
}

export default App;
