import { Home } from './Pages';
import ScrollToTop from './Components/ScrollToTop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './Pages/Login';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
