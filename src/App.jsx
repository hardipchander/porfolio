import { Route, Routes} from 'react-router-dom';
import './App.css';

// Import Pages 
import Home from "./pages/Home.jsx";
import Academia from "./pages/Academia.jsx";
import Postgrad from "./pages/Postgrad.jsx";
import Work from "./pages/Work.jsx";
import Projects from "./pages/Projects.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/education" element={<Academia />}/>
      <Route path="/postgrad" element={<Postgrad />}/>
      <Route path="/work" element={<Work />}/>
      <Route path="/projects" element={<Projects />}/>
    </Routes>
  );
}

export default App;