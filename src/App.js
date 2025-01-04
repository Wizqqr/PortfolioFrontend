import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Main } from './pages/Main';
import AnimatedScrollComponent from './components/AnimatedScrollComponent';
function App() {
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      education: educationRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
    };
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <AnimatedScrollComponent>
      <div className="App">
        <div className="container">
          <Header scrollToSection={scrollToSection} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  refs={{
                    homeRef,
                    educationRef,
                    skillsRef,
                    projectsRef,
                    contactRef,
                  }}
                />
              }
            />
         
          </Routes>
          <Footer />
        </div>
      </div>
      </AnimatedScrollComponent>
    </Router>
  );
}

export default App;
