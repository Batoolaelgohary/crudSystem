import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css';
import Display from './Components/display/Display';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Display />
      <Footer/>
    </div>
  );
}

export default App;
