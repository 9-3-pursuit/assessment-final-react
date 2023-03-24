import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, NavBar, Films, People, Locations } from "./components";

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Films />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
        <h1>Welcome to GhibliApp</h1>
      </Router>
    </div>
  );
};

export default App;
