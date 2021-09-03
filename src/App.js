
import {BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MyFooter from './components/MyFooter';
import MyNavbar from './components/MyNavbar';
import VerticalNavbar from './components/VerticalNavbar';
import album from './components/album';

function App() {
  return (
    <div className="App">
      <Router>
      <MyNavbar />
      <VerticalNavbar />
      <Route path='/' exact component={Home} />
      <Route path='/album/:id' exact component={album} />
      <MyFooter />
      </Router>
    </div>
  );
}

export default App;
