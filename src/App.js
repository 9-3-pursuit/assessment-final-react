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
          <Route path='/' element={<MoviesPage/>}/>
          <Route path='/' element={<PeoplePage/>}/>
          <Route path='/' element={<Locations/>}/>


      </Routes>
    </div>
    
  </BrowserRouter>
  );
}

export default App;
