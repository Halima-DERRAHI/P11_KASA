import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Logement from '../../pages/Logement';
import ErrorPage from '../../pages/ErrorPage';
import Header from '../Header';
import Footer from '../Footer';

function RouterIndex () {
    return (
        <Router>
            <Header />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Logement/:id" element={<Logement />} />
            <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default RouterIndex