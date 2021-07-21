import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Glossary from './components/pages/Glossary';

function App() {
  return (
    <div className="main--class">
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/glossary" component={Glossary} exact/>
      </Switch>
     <Footer />   
    </Router>
    </div>
  );
}

export default App;
