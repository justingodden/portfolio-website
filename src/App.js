import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  const [projects, setProjects] = useState(false)

  return (
    <div className="app">
      <Navbar projects={projects} setProjects={setProjects}/>
      {
        projects ? <Projects projects={projects} setProjects={setProjects}/> : <About projects={projects} setProjects={setProjects}/>
      }
    </div>
  );
}

export default App;
