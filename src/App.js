import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Router>
      <div className="container">
        <Nav/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
      
      </Router>
        
    </div>
  );
}

export default App;
