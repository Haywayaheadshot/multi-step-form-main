import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import './styles/App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        {/* <section className="App-main"> */}
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route exact path="/secondPage" element={<SecondPage />} />
          <Route exact path="/thirdPage" element={<ThirdPage />} />
          <Route exact path="/fourthPage" element={<FourthPage />} />
        </Routes>
        {/* </section> */}
      </div>
    </Router>
  );
}

export default App;
