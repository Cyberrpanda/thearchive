import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './sass/main.scss';
import Navbar from './components/navbar';
import Home from './components/home';
import Facilities from './components/facilities';
import History from './components/history';
import Services from './components/services';
import Banner from './components/banner';
import Footer from './components/footer';
import Carousel from './components/carousel';
import Signin from './components/signin';
import Signup from './components/signup';

function App() {
  return (
     <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Facilities />
            <History />
            <Services />
            <Banner />
            <Carousel />
            <Footer />
          </>
        } />
        
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </>
  );
}

export default App;