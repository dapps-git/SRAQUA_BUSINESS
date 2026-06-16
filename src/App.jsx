import React from 'react';
import srLogo from './assets/sr_logo.png';
import aquaLogo from './assets/aqua_logo.png';
import srChimney from './assets/sr_chimney.png';
import aquaFilter from './assets/aqua_filter.png';

function App() {
  const handleAction = (business, action) => {
    console.log(`${business} - clicked ${action}`);
  };

  // Facebook SVG icon
  const FbIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.885v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );

  // WhatsApp SVG icon
  const WaIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.012 2c-5.506 0-9.988 4.479-9.988 9.985 0 1.764.459 3.48 1.33 5l-1.354 4.954 5.074-1.331c1.46.797 3.09 1.218 4.751 1.218 5.507 0 9.99-4.479 9.99-9.986 0-5.507-4.483-9.985-9.99-9.985zm0 18.067c-1.494 0-2.961-.4-4.24-1.156l-.304-.18-3.15.826.84-3.073-.197-.314c-.832-1.328-1.272-2.871-1.272-4.469 0-4.528 3.69-8.214 8.225-8.214 4.54 0 8.225 3.686 8.225 8.214 0 4.528-3.69 8.214-8.225 8.214zM15.84 13.567c-.21-.106-1.24-.61-1.433-.68-.192-.07-.333-.105-.473.105-.14.21-.543.68-.666.82-.123.14-.246.158-.456.053-.21-.105-.887-.327-1.69-1.042-.624-.558-1.046-1.247-1.17-1.458-.122-.21-.013-.323.093-.428.095-.095.21-.246.315-.368.105-.123.14-.21.21-.35.07-.14.035-.263-.018-.368-.052-.105-.473-1.14-.648-1.56-.172-.41-.346-.353-.473-.36l-.403-.008c-.14 0-.368.052-.56.262-.193.21-.737.72-.737 1.754s.754 2.034.86 2.175c.105.14 1.482 2.262 3.59 3.17.5.216.892.346 1.196.442.505.16 1.018.137 1.402.08.428-.063 1.24-.508 1.415-.998.176-.49.176-.91.123-.997-.053-.088-.193-.14-.403-.246z" />
    </svg>
  );

  // Phone SVG icon
  const PhoneIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );

  // Globe SVG icon
  const GlobeIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );

  // Star SVG icon
  const StarIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );

  // Instagram SVG icon
  const InstaIcon = () => (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
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
