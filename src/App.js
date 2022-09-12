import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Newproject from './components/pages/Newproject';
import Company from './components/pages/Company';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
     <Navbar/>
      <Container customClass="min-height">

        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/Contact" element={<Contact/>} /> 
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Company" element={<Company/>} />
          <Route path="/Newproject" element={<Newproject/>} />
       </Routes>

      </Container>
      <Footer/>
    </Router>

  );
}

export default App;
