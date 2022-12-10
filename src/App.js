import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import ThirdPageYearly from './pages/ThirdPageYearly';
import FourthPageYearly from './pages/FourthPageYearly';
import FourthPage from './pages/FourthPage';
import './styles/App.css';
import NavBar from './components/NavBar';
import ThankYou from './pages/ThankYou';

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
          <Route exact path="/thirdPageYearly" element={<ThirdPageYearly />} />
          <Route exact path="/fourthPage" element={<FourthPage />} />
          <Route exact path="/fourthPageYearly" element={<FourthPageYearly />} />
          <Route exact path="/thankYou" element={<ThankYou />} />
        </Routes>
        {/* </section> */}
      </div>
    </Router>
  );
}

export default App;
