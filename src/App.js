import './App.css';
import Carausel from './components/Carausel';
import Fiturrumah from './components/Fiturrumah';
import Footer from './components/footer';
import Hero from './components/Hero';
import Konsultasi from './components/Konsultasi';
import Layanan from './components/Layanan';
import Navbars from './components/Navbar';
import Rekomendasi from './components/Rekomendasi';
import Temukan from './components/Temukan';

function App() {
  return (
    <div className="App">
     <>
     <Navbars/>
     <Hero/>
     <Layanan/>
     <Temukan/>
     <Rekomendasi/>
     <Carausel/>
     {/* <Fiturrumah/> */}
     <Konsultasi/>
     </>
    </div>
  );
}

export default App;
