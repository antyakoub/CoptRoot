import React, { useState } from 'react';
import '../styles/ECF.css';

// Early Church Fathers Component
const ECF = () => {
  // State for collapsible sections
  const [expandedFather, setExpandedFather] = useState(null);

  // Sample data for Church Fathers
  const churchFathers = [
    {
      id: 1,
      name: 'St. Athanasius',
      title: 'Defender of Orthodoxy',
      bio: 'St. Athanasius was a theologian, Church Father, and staunch defender of Trinitarian theology against Arianism. He is best known for his defense of the divinity of Christ during the Arian controversy of the 4th century.',
    },
    {
      id: 2,
      name: 'St. Cyril of Alexandria',
      title: 'Pillar of Faith',
      bio: 'St. Cyril was the Patriarch of Alexandria from 412 to 444. He was a central figure in the Christological controversies of the 5th century and is known for his defense of the title "Theotokos" (Mother of God) for the Virgin Mary.',
    },
    {
      id: 3,
      name: 'St. Anthony the Great',
      title: 'Father of Monasticism',
      bio: 'St. Anthony is considered the founder of Christian monasticism. He lived in solitude in the Egyptian desert and attracted many followers, establishing a tradition of asceticism that influenced Christian spirituality for centuries.',
    },
    {
      id: 4,
      name: 'St. Pachomius',
      title: 'Founder of Cenobitic Monasticism',
      bio: 'St. Pachomius established the first organized Christian monastery in the 4th century, creating a rule for monks living in community that would influence later monastic traditions throughout Christianity.',
    },
  ];

  // Sample data for resources
  const resources = [
    {
      id: 1,
      title: 'On the Incarnation',
      author: 'St. Athanasius',
      description: 'A classic work on the incarnation of Christ explaining its necessity for human salvation.',
      link: 'https://www.ccel.org/ccel/athanasius/incarnation.html',
    },
    {
      id: 2,
      title: 'Life of St. Anthony',
      author: 'St. Athanasius',
      description: 'An influential biography that spread monastic ideals throughout the Christian world.',
      link: 'https://www.newadvent.org/fathers/2811.htm',
    },
    {
      id: 3,
      title: 'Five Tomes Against Nestorius',
      author: 'St. Cyril of Alexandria',
      description: "A defense of orthodox Christology against Nestorian views that separated Christ's natures.",
      link: 'https://www.newadvent.org/fathers/3810.htm',
    },
  ];

  // Toggle expanded father
  const toggleFather = (id) => {
    setExpandedFather(expandedFather === id ? null : id);
  };

  return (
    <div className="ecf-container">
      

      {/* Main Content Container */}
      <main className="ecf-main">
        {/* Hero Section */}
        <section className="ecf-hero">
          <div className="ecf-section-container">
            <h1 className="ecf-hero-title">
              Discover the Early Church Fathers of Coptic Christianity
            </h1>
            <p className="ecf-hero-subtitle">
              Learn about their lives, teachings, and enduring legacy that shaped the foundation of Christian theology.
            </p>
            <a href="#resources" className="ecf-button-primary">
              Explore Their Works
            </a>
          </div>
        </section>

        {/* Main Content */}
        <section className="ecf-content-section">
          <div className="ecf-section-container">
            <div className="ecf-intro">
              <h2 className="ecf-section-title">The Early Church Fathers</h2>
              <p className="ecf-section-description">
                The Early Church Fathers were influential theologians, bishops, and writers who shaped Christian doctrine and practice in the formative centuries after Christ. In Coptic Christianity, these figures have special importance for their contributions to theology, monasticism, and the preservation of faith during times of persecution.
              </p>
            </div>

            {/* Church Fathers Grid */}
            <div className="ecf-fathers-grid">
              {churchFathers.map((father) => (
                <div key={father.id} className="ecf-father-card">
                  <h3 className="ecf-father-name">
                    {father.name}
                    <span className="ecf-father-title">{father.title}</span>
                  </h3>
                  
                  <div className="ecf-father-bio">
                    <p>{father.bio}</p>
                  </div>
                  
                  <button
                    onClick={() => toggleFather(father.id)}
                    className="ecf-read-more-button"
                  >
                    {expandedFather === father.id ? "Read Less" : "Read More"}
                    <svg 
                      className={`ecf-icon ${expandedFather === father.id ? 'ecf-icon-rotate' : ''}`} 
                      width="16" 
                      height="16" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {expandedFather === father.id && (
                    <div className="ecf-expanded-content">
                      <p>
                        Additional information about {father.name}'s life, works, and theological contributions would appear here, providing deeper context for readers interested in learning more.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Section */}
        <section id="resources" className="ecf-resources-section">
          <div className="ecf-section-container">
            <h2 className="ecf-section-title">Read Their Works</h2>
            <p className="ecf-section-description">
              Explore the writings of the Early Church Fathers through these carefully selected resources, featuring their most influential works and commentaries.
            </p>

            {/* Resources List */}
            <div className="ecf-resources-grid">
              {resources.map((resource) => (
                <div key={resource.id} className="ecf-resource-card">
                  <div className="ecf-resource-header">
                    <svg className="ecf-resource-icon" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div>
                      <h3 className="ecf-resource-title">{resource.title}</h3>
                      <p className="ecf-resource-author">{resource.author}</p>
                    </div>
                  </div>
                  
                  <p className="ecf-resource-description">{resource.description}</p>
                  
                  <a 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ecf-link-with-icon"
                  >
                    Visit Resource
                    <svg className="ecf-icon-small" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

            {/* Preview Example (for selected resource) */}
            <div className="ecf-preview-card">
              <h3 className="ecf-preview-title">Featured Preview: On the Incarnation</h3>
              <div className="ecf-preview-content">
                <p className="ecf-preview-quote">
                  "The Word of the Father, so great and so high, has been made manifest in bodily form. He has not assumed a body as proper to His own nature, far from it, for as the Word He is without body. He has been manifested in a human body for this reason only, out of the love and goodness of His Father, for the salvation of us men."
                </p>
                <p className="ecf-preview-attribution">— St. Athanasius, On the Incarnation</p>
              </div>
              <a 
                href="https://www.ccel.org/ccel/athanasius/incarnation.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ecf-button-primary"
              >
                Read Full Text
              </a>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="ecf-cta-section">
          <div className="ecf-section-container">
            <h2 className="ecf-section-title">Deepen Your Understanding of Coptic Christianity</h2>
            <p className="ecf-section-description">
              Continue your journey through the rich theological heritage of the Early Church Fathers and discover how their teachings shape Coptic Christianity today.
            </p>
            <div className="ecf-cta-buttons">
              <a href="#" className="ecf-button-primary">
                Explore More Resources
              </a>
              <a href="#" className="ecf-button-secondary">
                Join Our Community
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="ecf-footer">
        <div className="ecf-section-container">
          <div className="ecf-footer-grid">
            <div className="ecf-footer-column">
              <h3 className="ecf-footer-title">Coptic Heritage</h3>
              <p className="ecf-footer-text">
                Exploring the rich theological tradition of Coptic Christianity through the writings of the Early Church Fathers.
              </p>
            </div>
            
            <div className="ecf-footer-column">
              <h3 className="ecf-footer-title">Quick Links</h3>
              <ul className="ecf-footer-links">
                <li><a href="#" className="ecf-footer-link">Home</a></li>
                <li><a href="#" className="ecf-footer-link">About</a></li>
                <li><a href="#" className="ecf-footer-link">Resources</a></li>
                <li><a href="#" className="ecf-footer-link">Contact</a></li>
              </ul>
            </div>
            
            <div className="ecf-footer-column">
              <h3 className="ecf-footer-title">Connect</h3>
              <p className="ecf-footer-text">
                Join our community to learn more about the Early Church Fathers and Coptic Christianity.
              </p>
              <div className="ecf-social-links">
                <a href="#" aria-label="Facebook" className="ecf-social-link">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="ecf-social-link">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="ecf-social-link">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="ecf-footer-bottom">
            <p className="ecf-copyright">© 2025 Coptic Heritage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ECF;