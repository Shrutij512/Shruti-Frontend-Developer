import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Products from './Components/Products';
import Token from './Components/Token';
import Roadmap from './Components/Roadmap';
import HeroSection from './Components/HeroSection';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';

function App() {
    return (
        // <BrowserRouter>
        <div className="App">
            <Navbar />
            <HeroSection />
            <About />
            <Products />
            <Token />
            <Roadmap />
            <Footer />
        </div>
        // </BrowserRouter>
    );
}

export default App;
