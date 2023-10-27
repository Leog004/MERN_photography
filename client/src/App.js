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
import Account from './Pages/Account';
import AHome from './Pages/Admin/AHome';
import AGallery from './Pages/Admin/AGallery';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route
            path="/account"
            element={user ? <Account /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/login/:userId"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />

          {/* Admin */}

          <Route
            path="/admin"
            element={
              user && user?.data?.user?.role === 'admin' ? (
                <AHome/>
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/admin/gallery"
            element={
              user && user?.data?.user?.role === 'admin' ? (
                <AGallery/>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
