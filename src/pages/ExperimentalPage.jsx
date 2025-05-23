import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import OptimizedVideo from "../components/OptimizedVideo";
import "../styles/ExperimentalPage.css";
import "../styles/ExperimentalPageMobile.css";
import "../styles/MobileMenu.css";

const Header = () => {
  return (
    <motion.header 
      className="site-header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-logo">
        <Link to="/">
          <OptimizedImage src="/circleheaderlogo.png" alt="ACYL Logo" className="circle-header-logo" />
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="nav-links">
          <li><Link to="/tv">TV</Link></li>
          <li><Link to="/film">Film</Link></li>
          <li><Link to="/radio">Radio</Link></li>
          <li><Link to="/stream">Stream</Link></li>
          <li className="more-dropdown">
            <Link to="#">More <span className="dropdown-arrow">▼</span></Link>
            <div className="dropdown-menu">
              <Link to="/contribute" className="dropdown-item">Contribute</Link>
              <Link to="/discover" className="dropdown-item">Discover</Link>
              <Link to="/events" className="dropdown-item">Events</Link>
              <Link to="/podplayr" className="dropdown-item">PODPLAYR</Link>
            </div>
          </li>
        </ul>
      </nav>
      <LoginComponent />
      <MobileMenu />
    </motion.header>
  );
};

// Mobile-specific content component with animations
const MobileExperimentalContent = () => {
  return (
    <motion.div 
      className="mobile-experimental-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="mobile-experimental-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        NYC Experimental Showcase
      </motion.h1>
      
      <motion.div
        className="mobile-experimental-secondary-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/experimental/nycmobile1.webp" 
          alt="NYC Experimental Showcase Image 1" 
          className="mobile-nycmobile1-image"
        />
      </motion.div>
      
      <motion.div 
        className="mobile-experimental-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Hosted at the iconic Angelika Theater in SoHo, The NYC Experimental Showcase was an evening dedicated to the bold,
          the strange, and the beautifully independent. Following an open call that drew over 100 submissions from around the
          world, curators William Ojeda and Jamee Cornelia handpicked a genre-spanning lineup. From raw
          documentaries and surreal animations to AI-driven experiments and unconventional narratives. Every frame challenged
          expectations. Every story pushed boundaries. It was a cinematic glimpse into the future of independent film.
        </p>
      </motion.div>
      
      <motion.div
        className="mobile-experimental-tertiary-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <OptimizedImage 
          src="/images/experimental/nycmobile2.webp" 
          alt="NYC Experimental Showcase Image 2" 
          className="mobile-nycmobile2-image"
        />
      </motion.div>
    </motion.div>
  );
};

// Desktop content component
const ExperimentalContent = () => {
  return (
    <motion.div 
      className="experimental-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div 
        className="experimental-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h1>NYC Experimental Showcase</h1>
      </motion.div>
      
      <motion.div 
        className="experimental-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          Hosted at the iconic Angelika Theater in SoHo, The NYC Experimental Showcase was an evening dedicated to the bold,
          the strange, and the beautifully independent. Following an open call that drew over 100 submissions from around the
          world, curators William Ojeda and Jamee Cornelia handpicked a genre-spanning lineup. From raw
          documentaries and surreal animations to AI-driven experiments and unconventional narratives. Every frame challenged
          expectations. Every story pushed boundaries. It was a cinematic glimpse into the future of independent film.
        </p>
      </motion.div>
      
      <div className="experimental-video-container" style={{ marginTop: '40px', maxWidth: '800px', margin: '0 auto' }}>
        {(() => {
          const [isMuted, setIsMuted] = React.useState(true);
          
          return (
            <>
              <OptimizedVideo
                src="/images/experimental/2025 ACYL LIVE SCREENING.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                keepPlaying={true}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
                }}
              />
              
              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '1.5rem',
                    padding: '0.6rem 1.2rem',
                    backgroundColor: 'rgba(50, 50, 50, 0.8)',
                    color: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(100, 100, 100, 0.5)',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(60, 60, 60, 0.9)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(50, 50, 50, 0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {isMuted ? '🔇 Unmute Video' : '🔊 Mute Video'}
                </button>
              </div>
            </>
          );
        })()}
      </div>
    </motion.div>
  );
};

// Main page component
const ExperimentalPage = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <PrivyProvider
      appId="cm9wa9olg004yl70mwjt9n1x9"
      config={{
        loginMethods: ['email', 'wallet', 'google', 'sms', 'farcaster'],
        appearance: {
          theme: 'light',
          accentColor: '#0f62fe',
          showWalletLoginFirst: false,
          layout: 'modal',
          defaultView: 'login',
          logo: '/acylprivylogo.png',
          backgroundColor: '#fff',
        },
        embeddedWallets: {
          createOnLogin: 'all-users',
          noPromptOnSignature: false,
        },
      }}
    >
      <motion.div 
        className="experimental-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        {isMobile ? <MobileExperimentalContent /> : <ExperimentalContent />}
      </motion.div>
    </PrivyProvider>
  );
};

export default ExperimentalPage;
