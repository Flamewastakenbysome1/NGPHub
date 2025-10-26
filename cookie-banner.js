// NGP Hub Cookie Banner
// Add this script to every page that uses cookies

(function() {
  // Check if user already accepted cookies
  if (localStorage.getItem('ngp_cookies_accepted')) {
    return; // Don't show banner if already accepted
  }

  // Create banner HTML
  const bannerHTML = `
    <div id="cookie-banner" style="
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(135deg, #15151b, #1a1a22);
      border-top: 1px solid rgba(255,255,255,.1);
      padding: 20px;
      z-index: 9999;
      box-shadow: 0 -10px 30px rgba(0,0,0,.5);
      animation: slideUp 0.3s ease-out;
    ">
      <style>
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        #cookie-banner-content {
          max-width: 1024px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        #cookie-banner-text {
          flex: 1;
          min-width: 250px;
          color: #ececf1;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        #cookie-banner-text a {
          color: #6aafff;
          text-decoration: none;
        }
        #cookie-banner-text a:hover {
          text-decoration: underline;
        }
        #cookie-banner-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .cookie-btn {
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          font-size: 0.95rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cookie-btn:hover {
          transform: translateY(-2px);
        }
        .cookie-btn-accept {
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: white;
          box-shadow: 0 4px 15px rgba(37,117,252,.3);
        }
        .cookie-btn-accept:hover {
          box-shadow: 0 6px 20px rgba(37,117,252,.4);
        }
        .cookie-btn-decline {
          background: rgba(255,255,255,.05);
          color: #b5b7c3;
          border: 1px solid rgba(255,255,255,.1);
        }
        @media (max-width: 600px) {
          #cookie-banner-content {
            flex-direction: column;
            align-items: stretch;
          }
          #cookie-banner-buttons {
            width: 100%;
          }
          .cookie-btn {
            flex: 1;
          }
        }
      </style>
      <div id="cookie-banner-content">
        <div id="cookie-banner-text">
          🍪 We use cookies to improve your experience and analyze site usage. 
          By continuing to use NGP Hub, you accept our use of cookies. 
          <a href="/privacy" target="_blank">Learn more</a>
        </div>
        <div id="cookie-banner-buttons">
          <button class="cookie-btn cookie-btn-decline" onclick="declineCookies()">Decline</button>
          <button class="cookie-btn cookie-btn-accept" onclick="acceptCookies()">Accept</button>
        </div>
      </div>
    </div>
  `;

  // Insert banner into page
  document.body.insertAdjacentHTML('beforeend', bannerHTML);

  // Accept cookies function
  window.acceptCookies = function() {
    localStorage.setItem('ngp_cookies_accepted', 'true');
    localStorage.setItem('ngp_cookies_date', new Date().toISOString());
    closeBanner();
  };

  // Decline cookies function
  window.declineCookies = function() {
    localStorage.setItem('ngp_cookies_accepted', 'false');
    localStorage.setItem('ngp_cookies_date', new Date().toISOString());
    closeBanner();
    // You could also disable analytics here if you have any
  };

  // Close banner with animation
  function closeBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.style.animation = 'slideDown 0.3s ease-out';
      banner.style.animationFillMode = 'forwards';
      setTimeout(() => banner.remove(), 300);
    }
  }

  // Add slide down animation
  const style = document.createElement('style');
  style.textContent = '@keyframes slideDown { from { transform: translateY(0); } to { transform: translateY(100%); } }';
  document.head.appendChild(style);
})();
