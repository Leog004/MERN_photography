import { Home } from './Pages';
import ScrollToTop from './Components/ScrollToTop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './Pages/Login';
import Gallery from './Pages/Gallery';
import { useSelector } from 'react-redux';
import Services from './Pages/Services';
import Booking from './Pages/Booking';
import Signup from './Pages/Signup';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
