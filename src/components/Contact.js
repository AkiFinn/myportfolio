const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-content">
        <h1>Get In Touch</h1>
        <p>
          Have a project in mind or want to discuss opportunities? I'd love to
          hear from you. Let's create something amazing together.
        </p>
        <div className="parent">
          <div className="contact-item">
            <div className="icon-container">
              <span className="contact-icon" style={{ background: "#f3f4f6", borderRadius: "10px", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, marginBottom: 12 }}>
                {/* Email SVG */}
                <svg width="28" height="28" fill="none" stroke="#11182f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="4" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
            </div>
            <h3>Email</h3>
            <p>juneltimon17@gmail.comn</p>
          </div>
          <div className="contact-item">
            <div className="icon-container">
              <span className="contact-icon" style={{ background: "#f3f4f6", borderRadius: "10px", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, marginBottom: 12 }}>
                {/* Phone SVG */}
                <svg width="28" height="28" fill="none" stroke="#11182f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72l.7 5.11a2 2 0 0 1-1.1 2.11l-2.2 1.1a16 16 0 0 0 6.29 6.29l1.1-2.2a2 2 0 0 1 2.11-1.1l5.11.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
            </div>
            <h3>Phone</h3>
            <p>+64 991 274 1359</p>
          </div>
          <div className="contact-item">
            <div className="icon-container">
              <span className="contact-icon" style={{ background: "#f3f4f6", borderRadius: "10px", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, marginBottom: 12 }}>
                {/* Location SVG */}
                <svg width="28" height="28" fill="none" stroke="#11182f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
            </div>
            <h3>Location</h3>
            <p>Angeles City, Pampanga</p>
          </div>
        </div>
        <div className="form">
          <form action="POST" className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <button type="submit" className="cta-button primary1">
              <span clas="message-holder"
                style={{
                  marginRight: "8px",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                {/* Send SVG */}
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </span>
              <span style={{ fontWeight: "bold" }}>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;