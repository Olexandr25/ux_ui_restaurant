import React, { useMemo, useState } from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Testimonials } from './container';
import { Navbar } from './components';
import './App.css';

const DESKTOP_CAPTURE_ENDPOINT = 'http://localhost:5055/capture-desktop';
const MOBILE_CAPTURE_ENDPOINT = 'http://localhost:5055/capture-mobile';

const App = () => {
  const [captureStatus, setCaptureStatus] = useState('');
  const [captureType, setCaptureType] = useState('');

  const showCaptureButton = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return process.env.NODE_ENV !== 'production' || window.location.hostname === 'localhost';
  }, []);

  const handleCapture = async (type) => {
    const isDesktop = type === 'desktop';
    const endpoint = isDesktop ? DESKTOP_CAPTURE_ENDPOINT : MOBILE_CAPTURE_ENDPOINT;
    const filename = isDesktop ? '11-full-landing-desktop.png' : '13-full-landing-mobile.png';

    setCaptureType(type);
    setCaptureStatus(`Capturing ${type} full page...`);

    try {
      const response = await fetch(endpoint, { method: 'POST' });
      const payload = await response.json();

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || 'Capture failed');
      }

      setCaptureStatus(`Done: ${filename} updated`);
    } catch (error) {
      setCaptureStatus('Capture server is not running on localhost:5055');
    } finally {
      setCaptureType('');
    }
  };

  return (
    <div>
      <a className='skip-link' href='#main-content'>
        Skip to main content
      </a>
      {showCaptureButton && (
        <div className='capture-desktop-tools'>
          <button
            className='capture-desktop-button'
            type='button'
            onClick={() => handleCapture('desktop')}
            disabled={captureType !== ''}
          >
            {captureType === 'desktop' ? 'Capturing Desktop...' : 'Capture Full Desktop'}
          </button>
          <button
            className='capture-desktop-button'
            type='button'
            onClick={() => handleCapture('mobile')}
            disabled={captureType !== ''}
          >
            {captureType === 'mobile' ? 'Capturing Mobile...' : 'Capture Full Mobile'}
          </button>
          {captureStatus && <p className='capture-desktop-status'>{captureStatus}</p>}
        </div>
      )}
      <Navbar />
      <main id='main-content'>
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Testimonials />
        <Gallery />
        <FindUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
