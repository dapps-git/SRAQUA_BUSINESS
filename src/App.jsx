import React from 'react';
import srLogo from './assets/sr_logo.png';
import aquaLogo from './assets/aqua_logo.png';
import srChimney from './assets/sr_chimney.png';
import aquaFilter from './assets/aqua_filter.png';

function App() {
  const handleAction = (business, action) => {
    console.log(`${business} - clicked ${action}`);
  };

  // Facebook — official filled
  const FbIcon = () => (
    <svg viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );

  // WhatsApp — official green
  const WaIcon = () => (
    <svg viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  // Phone — filled
  const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  );

  // Globe — filled
  const GlobeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  );

  // Google Review — Google G colored
  const StarIcon = () => (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  // Instagram — real gradient icon
  const InstaIcon = () => (
    <svg viewBox="0 0 24 24" fill="none">
      <defs>
        <radialGradient id="ig1" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497"/>
          <stop offset="5%" stopColor="#fdf497"/>
          <stop offset="45%" stopColor="#fd5949"/>
          <stop offset="60%" stopColor="#d6249f"/>
          <stop offset="90%" stopColor="#285AEB"/>
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#ig1)"/>
      <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none"/>
      <circle cx="17.2" cy="6.8" r="1.1" fill="white"/>
    </svg>
  );

  // MapPin SVG icon
  const MapPinIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  return (
    <div className="page-wrapper">
      {/* Portal Header */}
      <header className="portal-header">
        <div className="header-badge">Our Businesses</div>
        <h1 className="header-title">SR Flames <span>&amp;</span> AquaPool</h1>
        <p className="header-sub">Quality • Luxury • Reliability</p>
        <div className="header-location">
          <span className="location-icon"><MapPinIcon /></span>
          <span>Kootanad, Palakkad</span>
        </div>
      </header>

      {/* Main Rows Container */}
      <main className="rows-container">

        {/* SR Flames Card */}
        <section className="business-card sr-card">
          <div className="card-image-col">
            <img src={srChimney} alt="SR Flames Chimney" className="card-img" />
            <div className="card-img-overlay sr-overlay"></div>
          </div>
          <div className="card-body">
            <div className="card-brand-row">
              <div className="card-logo-wrap sr-logo-wrap">
                <img src={srLogo} alt="SR Flames Logo" className="card-logo" />
              </div>
              <div className="card-brand-info">
                <h2 className="card-brand-name sr-name">SR Flames</h2>
                <p className="card-brand-tag">Stove &amp; Chimney</p>
              </div>
            </div>

            <div className="card-location">
              <span className="loc-pin"><MapPinIcon /></span>
              <span>Kootanad, Palakkad</span>
            </div>

            <div className="action-row">
              <a href="tel:+919747900014" className="icon-btn btn-phone" title="Call" onClick={() => handleAction('SR Flames', 'Call')}>
                <PhoneIcon />
              </a>
              <a href="https://wa.me/919747900014" target="_blank" rel="noopener noreferrer" className="icon-btn btn-wa" title="WhatsApp" onClick={() => handleAction('SR Flames', 'WhatsApp')}>
                <WaIcon />
              </a>
              <a href="https://www.srflames.com/" target="_blank" rel="noopener noreferrer" className="icon-btn btn-web" title="Website" onClick={() => handleAction('SR Flames', 'Website')}>
                <GlobeIcon />
              </a>
              <a href="https://search.google.com/local/writereview?placeid=ChIJz85MWwDBpzsRCoi06TjWGXg" target="_blank" rel="noopener noreferrer" className="icon-btn btn-review" title="Review" onClick={() => handleAction('SR Flames', 'Review')}>
                <StarIcon />
              </a>
              <a href="https://www.instagram.com/sr_flames__?igsh=MTVjbnptb2gwbWFtMA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="icon-btn btn-insta" title="Instagram" onClick={() => handleAction('SR Flames', 'Instagram')}>
                <InstaIcon />
              </a>
              <a href="https://www.facebook.com/share/1EdphCbHNH/" target="_blank" rel="noopener noreferrer" className="icon-btn btn-fb" title="Facebook" onClick={() => handleAction('SR Flames', 'Facebook')}>
                <FbIcon />
              </a>
            </div>
          </div>
        </section>

        {/* Aqua Pool Card */}
        <section className="business-card aqua-card">
          <div className="card-image-col">
            <img src={aquaFilter} alt="AquaPool Filter" className="card-img" />
            <div className="card-img-overlay aqua-overlay"></div>
          </div>
          <div className="card-body">
            <div className="card-brand-row">
              <div className="card-logo-wrap aqua-logo-wrap">
                <img src={aquaLogo} alt="AquaPool Logo" className="card-logo" />
              </div>
              <div className="card-brand-info">
                <h2 className="card-brand-name aqua-name">AquaPool</h2>
                <p className="card-brand-tag">Water Filtration</p>
              </div>
            </div>

            <div className="card-location">
              <span className="loc-pin"><MapPinIcon /></span>
              <span>Kootanad, Palakkad</span>
            </div>

            <div className="action-row">
              <a href="tel:+919747900014" className="icon-btn btn-phone" title="Call" onClick={() => handleAction('AquaPool', 'Call')}>
                <PhoneIcon />
              </a>
              <a href="https://wa.me/919747900014" target="_blank" rel="noopener noreferrer" className="icon-btn btn-wa" title="WhatsApp" onClick={() => handleAction('AquaPool', 'WhatsApp')}>
                <WaIcon />
              </a>
              <a href="https://www.aquapools.in/" target="_blank" rel="noopener noreferrer" className="icon-btn btn-web" title="Website" onClick={() => handleAction('AquaPool', 'Website')}>
                <GlobeIcon />
              </a>
              <a href="https://search.google.com/local/writereview?placeid=ChIJz85MWwDBpzsRCoi06TjWGXg" target="_blank" rel="noopener noreferrer" className="icon-btn btn-review" title="Review" onClick={() => handleAction('AquaPool', 'Review')}>
                <StarIcon />
              </a>
              <a href="https://www.instagram.com/_aqua_pool_?utm_source=qr" target="_blank" rel="noopener noreferrer" className="icon-btn btn-insta" title="Instagram" onClick={() => handleAction('AquaPool', 'Instagram')}>
                <InstaIcon />
              </a>
              <a href="https://www.facebook.com/share/1Dx3KRnHDp/" target="_blank" rel="noopener noreferrer" className="icon-btn btn-fb" title="Facebook" onClick={() => handleAction('AquaPool', 'Facebook')}>
                <FbIcon />
              </a>
            </div>
          </div>
        </section>

        {/* Water Authority Plans */}
        <section className="plans-strip">
          <div className="plans-strip-left">
            <div className="plans-strip-icon">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="plans-title">Water Authority Plans</h3>
              <p className="plans-sub">Design Submission Services · Palakkad</p>
            </div>
          </div>
          <div className="plans-strip-actions">
            <button className="strip-btn" onClick={() => handleAction('Authority Plans', 'View Plans')}>View Plans</button>
            <button className="strip-btn primary-strip-btn" onClick={() => handleAction('Authority Plans', 'Contact')}>Contact</button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="portal-footer">
        <p className="footer-copy">&copy; {new Date().getFullYear()} SR Flames &amp; AquaPool · Kootanad, Palakkad</p>
      </footer>
    </div>
  );
}

export default App;
