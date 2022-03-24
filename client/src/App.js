import { Home } from './Pages';
import ScrollToTop from './Components/ScrollToTop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Login from './Pages/Login';
import { useSelector } from 'react-redux';

const App = () => {

  const user = useSelector((state) => state.user.currentUser);


  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={ user ? <Navigate to="/" /> : <Login/>} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
