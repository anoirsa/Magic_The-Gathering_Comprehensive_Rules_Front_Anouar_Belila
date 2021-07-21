import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main--class">
    <Router>
      <Navbar />
      <Home />
      <Footer /> 
    </Router>
    </div>
  );
}

export default App;
