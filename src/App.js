import ".App.css";
import Home from '.components/Home';
import People from "./components/people";
import { Location } from "react-router-dom";
import Movie from "./components/movie";
import {BrowerRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
 
      <Routes>
      <Route exact path='/' element={ <Home/> }/>
        <Route path='/movies' element={ <Movies/> }/>
        <Route path='/people' element={ <People/> }/>
        <Route path='/locations' element={ <Locations/> }/>
      </Routes> 

    </Router>
  );
}

export default App;
