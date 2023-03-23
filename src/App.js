import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav'
import Home from "./Components/Home";
import MoviesPage from "./Components/MoviesPage";
import PeoplePage from "./Components/PeoplePage";
import Locations from "./Components/Locations";


function App() {


  return (
  <BrowserRouter>
      <div className="app">

      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<MoviesPage/>}/>
          <Route path='/people' element={<PeoplePage/>}/>
          <Route path='/locations' element={<Locations/>}/>


      </Routes>
    </div>
    
  </BrowserRouter>
  );
}

export default App;
