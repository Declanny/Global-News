import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/header/Navbar'; // Import the Navbar component

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar /> {/* Place the Navbar here */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home */}
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
