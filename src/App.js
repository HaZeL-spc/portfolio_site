import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import HeaderPage from './pages/HeaderPage';
import MyProjects from './pages/MyProjects';

function App() {
  return (
    <div className="app-container">
      <Nav/>
      <HeaderPage/>
      <About/>
      <MyProjects/>
      <Contact/>
    </div>
  );
}

export default App;
