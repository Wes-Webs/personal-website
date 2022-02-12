
import './App.css';
import './components/styles.css'
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Portfolio from './components/Portfolio';
//import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
