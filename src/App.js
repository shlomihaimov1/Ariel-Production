import React, { useEffect } from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Font awesome
import './assets/library/fontawesome/css/all.min.css';

// Linea icons
import './assets/library/linea/arrows/styles.css';
import './assets/library/linea/basic/styles.css';
import './assets/library/linea/ecommerce/styles.css';
import './assets/library/linea/software/styles.css';
import './assets/library/linea/weather/styles.css';

// Animate
import './assets/library/animate/animate.css';

// Stylesheet
import './assets/css/style.css';
import './assets/css/media.css';
import './App.css';

// Pages
import Index from './pages/index.js';
import NotFound from './pages/notFound.js'

// CSS
import './css/home.css';

// Functions
function index() {
  return <Index />;
}

function notFound() {
  return <NotFound />;
}

function App() {

  // Scroll
  useEffect(() => {
      let unmounted = false;

      if (!unmounted) {      

        // Activate pop up
        setTimeout(() =>{
          document.getElementById('contact-popup').style.display = 'block';
          document.getElementById('contact-popup').style.animation = 'fadeInContact 0.5s';
        }, 1000);

        // Scroll spy    
        if (window.location.pathname === '/') {
            const sections = document.querySelectorAll('section[id]');
            
            window.addEventListener('scroll', function() {
              const pos = window.scrollY;            
              
              sections.forEach(el => {
                
                if (el.offsetTop - 150 <= pos && el.offsetTop + el.clientHeight >= pos) {
                  
                  const getId = el.getAttribute('id');
                  
                  document.querySelectorAll('.nav-item a[href^="/#"]').forEach(link => {
                    const activeLink = document.querySelector(`.nav-item a[href^="/#${getId}"]`);
                    
                    if (activeLink) {
                      link.classList.remove('active');
                      
                      activeLink.classList.add('active');
                    }
                  });
                }
              });
            });
        } 
        else {
          window.addEventListener('scroll', function() {
            document.querySelectorAll('.nav-item a[href^="/#"]').forEach(link => {
              link.classList.remove('active');
            });
          });
        }

      }

      return () => (unmounted = true);
  });

  return (
    <div className='outer-wrapper'>
        <div className='wrapper'>
          <Router>
            <Routes>
              <Route excat path="/" element={ index() }/>
              <Route path="*" element={ notFound() } /> 
            </Routes>
          </Router>
        </div>
    </div>
  );
}

export default App;