import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import { Route, Switch } from 'react-router-dom'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
