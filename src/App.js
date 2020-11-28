import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import HeaderPage from './pages/HeaderPage';
import MyProjects from './pages/MyProjects';

function App() {
  return (
    <div className="app-container">
      <Nav/>
      <HeaderPage/>
      <About/>
      <MyProjects/>
    </div>
  );
}

export default App;
