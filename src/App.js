import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

import Nav from './components/templates/nav/nav';
import Footer from './components/templates/footer'
import Routes from './components/routing';
function App() {
 
  return (
    <Router>
      <Nav />
        <Routes/>
      <Footer/>
    </Router>
  );
}

export default App;
