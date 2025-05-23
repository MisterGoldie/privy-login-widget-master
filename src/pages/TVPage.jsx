import React from "react";
import { motion } from "framer-motion";
import { PrivyProvider } from "@privy-io/react-auth";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import MobileMenu from "../components/MobileMenu";
import OptimizedImage from "../components/OptimizedImage";
import "../styles/TVPage.css";
import "../styles/MobileMenu.css";
import "../styles/TVPageMobile.css"; // Mobile-specific fixes for TV page

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
          <li><Link to="/tv" className="active">TV</Link></li>
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

const TVContent = () => {
  return (
    <motion.div 
      className="tv-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.h1 
        className="tv-headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        A Network by Creators, for Creators
      </motion.h1>
      
      <motion.div 
        className="tv-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          At Any Colour You Like we're redefining television as a space where creativity 
          knows no bounds. Built by creators, for creators, we are a platform that celebrates 
          bold ideas, diverse perspectives, and groundbreaking stories.
        </p>
        <p>
          Here, content isn't dictated by formulas or trends. It's driven by passion and 
          innovation. We empower creators to share their vision with audiences who crave 
          fresh, authentic perspectives. From compelling dramas and laugh-out-loud 
          comedies to thought-provoking documentaries and experimental formats, we're 
          giving creators the freedom to make the stories they want to tell.
        </p>
        <p>
          This isn't just a network, it's a creative community. Join us as we revolutionize 
          television, amplify independent voices, and bring creator-driven content to the 
          forefront.
        </p>
      </motion.div>
      
      <motion.div 
        className="coming-soon"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2>Coming Soon</h2>
        {/* Arthouse image removed */}
        <OptimizedImage 
          src="/images/tv/afuerafont.png" 
          alt="Afuera Font Logo" 
          className="tv-feature-image"
          style={{
            display: 'block',
            margin: '2.5rem auto 0 auto',
            maxWidth: '700px',
            width: '100%'
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const TVPage = () => {
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
        className="tv-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{ 
          minHeight: '100vh', 
          height: '100%',
          backgroundImage: 'url("/images/tv/tvbg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <Header />
        <TVContent />
      </motion.div>
    </PrivyProvider>
  );
};

export default TVPage;
