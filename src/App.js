import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
