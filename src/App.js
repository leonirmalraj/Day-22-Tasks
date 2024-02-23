import './App.css';
import CallToAction from './components/CallToAction';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';

function App() {
    return (
        <div>
            <img src='' />
            <Header />
            <Features />
            <Showcase />
            <Testimonials />
            <CallToAction />
            <Footer />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="js/scripts.js"></script>
            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        </div>
    );
}

export default App;
