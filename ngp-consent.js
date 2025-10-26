// NGP Hub Privacy Notice
// Add this script to every page

(function() {
  // Check if user already made a choice
  if (localStorage.getItem('ngp_privacy_choice')) {
    return;
  }

  // Create notice HTML
  const noticeHTML = `
    <div id="ngp-notice" style="
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
        #ngp-notice-content {
          max-width: 1024px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        #ngp-notice-text {
          flex: 1;
          min-width: 250px;
          color: #ececf1;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        #ngp-notice-text a {
          color: #6aafff;
          text-decoration: none;
        }
        #ngp-notice-text a:hover {
          text-decoration: underline;
        }
        #ngp-notice-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .ngp-btn {
          padding: 10px 20px;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          font-size: 0.95rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ngp-btn:hover {
          transform: translateY(-2px);
        }
        .ngp-btn-accept {
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: white;
          box-shadow: 0 4px 15px rgba(37,117,252,.3);
        }
        .ngp-btn-accept:hover {
          box-shadow: 0 6px 20px rgba(37,117,252,.4);
        }
        .ngp-btn-decline {
          background: rgba(255,255,255,.05);
          color: #b5b7c3;
          border: 1px solid rgba(255,255,255,.1);
        }
        @media (max-width: 600px) {
          #ngp-notice-content {
            flex-direction: column;
            align-items: stretch;
          }
          #ngp-notice-buttons {
            width: 100%;
          }
          .ngp-btn {
            flex: 1;
          }
        }
      </style>
      <div id="ngp-notice-content">
        <div id="ngp-notice-text">
          🍪 We use necessary features to improve your experience. 
          By continuing to use NGP Hub, you accept our practices. 
          <a href="/privacy" target="_blank">Learn more</a>
        </div>
        <div id="ngp-notice-buttons">
          <button class="ngp-btn ngp-btn-decline" onclick="ngpDecline()">Decline</button>
          <button class="ngp-btn ngp-btn-accept" onclick="ngpAccept()">Accept</button>
        </div>
      </div>
    </div>
  `;

  // Insert notice into page
  document.body.insertAdjacentHTML('beforeend', noticeHTML);

  // Accept function
  window.ngpAccept = function() {
    localStorage.setItem('ngp_privacy_choice', 'accepted');
    localStorage.setItem('ngp_privacy_date', new Date().toISOString());
    closeNotice();
  };

  // Decline function
  window.ngpDecline = function() {
    localStorage.setItem('ngp_privacy_choice', 'declined');
    localStorage.setItem('ngp_privacy_date', new Date().toISOString());
    closeNotice();
  };

  // Close notice with animation
  function closeNotice() {
    const notice = document.getElementById('ngp-notice');
    if (notice) {
      notice.style.animation = 'slideDown 0.3s ease-out';
      notice.style.animationFillMode = 'forwards';
      setTimeout(() => notice.remove(), 300);
    }
  }

  // Add slide down animation
  const style = document.createElement('style');
  style.textContent = '@keyframes slideDown { from { transform: translateY(0); } to { transform: translateY(100%); } }';
  document.head.appendChild(style);
})();
