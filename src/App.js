import {
  Routes, Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import IntractiveMap from './components/IntractiveMap';
import Bulletine from './components/Bulletine';
import Spatial from './components/Spatial';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/intractive' element={<IntractiveMap />} />
        <Route path='/bulletine' element={<Bulletine />} />
        <Route path='/spatial' element={<Spatial />} />
      </Routes>
    </>
  );
}

export default App;
