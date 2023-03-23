import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Movies />} />
          <Route path="/" element={<People />} />
          <Route path="/" element={<Locations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
