import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import ContactMe from './components/contactMe/ContactMe';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LiveChat from './components/liveChat/LiveChat';
import MySkills from './components/mySkills/MySkills';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Testimonies from './components/testimonies/Testimonies';

function App() {
  return (
    <div className="bee">
      <Header />
      <AboutMe />
      <MySkills />
      <Services />
      <Projects />
      <Testimonies/>
      <ContactMe />
      <LiveChat/>
      <Footer />

    </div>
  );
}

export default App;
