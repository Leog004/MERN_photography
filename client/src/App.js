import { Home } from './Pages';
import ScrollToTop from './Components/ScrollToTop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
