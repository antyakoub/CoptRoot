import Video from "../assets/coptroot.mp4";
import VideoWebm from "../assets/coptroot.webm";

import LeavesIcon from '../assets/branch-leaves.png'; // Placeholder
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/Home.css'; // Import the CSS for styling

const Home = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const ctaRef = useRef(null);
  const valueSectionRef = useRef(null);

  const features = [
    {
      name: "The Foundation",
      coptic: "ⲚⲒⲒⲰⲦ ⲚⲈⲄⲬⲈⲢⲈ",
      desc: "Wisdom of the Fathers. Explore the foundational texts of the Early Church Fathers that shaped our spiritual heritage.",
      visual: LeavesIcon,
      num: "01"
    },
    {
      name: "The Practice",
      coptic: "Ϯⲁⲅⲡⲓⲁ ⲛⲉⲙ ⲡⲓⲥⲩⲛⲁⲝⲁⲣⲓⲟⲛ",
      desc: "Sacred Rhythm. Access the canonical prayers of the Agpeya and the daily lives of the Saints to nourish your daily walk.",
      visual: LeavesIcon,
      num: "02"
    },
    {
      name: "The Voice",
      coptic: "Ⲡⲓⲥⲙⲏ ⲛ̀ⲱⲛϧ",
      desc: "Living Tradition. Stream curated sermons and podcasts from modern Coptic fathers to bring ancient wisdom into the modern day.",
      visual: LeavesIcon,
      num: "03"
    },
    {
      name: "The Reach",
      coptic: "Ϯⲕⲟⲓⲛⲱⲛⲓⲁ",
      desc: "Global Sanctuary. Connect with the global Coptic family, find your local parish, and access our library of resources.",
      visual: LeavesIcon,
      num: "04"
    }
  ];

  useEffect(() => {
    const lines = [line1Ref.current, line2Ref.current];
    
    // Initial state
    gsap.set(lines, {
      y: '125%',
      rotate: 2.5,
    });
    gsap.set(ctaRef.current, {
      opacity: 0,
      y: 20
    });

    // Animation timeline
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.to(lines, {
      y: '0%',
      rotate: 0,
      duration: 1.5,
      stagger: 0.1,
      delay: 0.5, // Slight delay to let page settle
    })
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    }, '-=0.8');

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToNext = () => {
    if (valueSectionRef.current) {
      valueSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <div className="video-container">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={VideoWebm} type="video/webm" />
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <div className="hero-text-block">
            <div className="line-wrapper">
              <h1 className="line-inner coptic-text white-text" ref={line1Ref}>ⲤⲞⲢⲦⲒⲤ</h1>
            </div>
            <div className="line-wrapper">
              <h1 className="line-inner gold-text" ref={line2Ref}>ⲄⲞⲞⲦ</h1>
            </div>
          </div>
          
          <div 
            className="explore-cta" 
            ref={ctaRef} 
            onClick={scrollToNext}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && scrollToNext()}
          >
            <span>Explore Now</span>
            <div className="cta-arrow">↓</div>
          </div>
        </div>
      </div>
      
      {/* Value Proposition Section */}
      <section className="value-proposition" ref={valueSectionRef}>
        <div className="root-system-container">
          <svg className="root-svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            {/* We'll use a placeholder or simplified root path if needed, 
                but for now we'll keep it as a placeholder as the SVG wasn't provided. */}
            <path 
              className="root-path" 
              d="M500,0 C500,200 400,300 300,500 C200,700 300,800 500,1000" 
              fill="none" 
              stroke="rgba(212, 175, 55, 0.2)" 
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="features-container">
          {features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-number">{feature.num}</div>
              <div className="feature-text">
                <h3 className="feature-name">{feature.name}</h3>
                <span className="coptic-subtitle">{feature.coptic}</span>
                <p className="feature-desc">{feature.desc}</p>
              </div>
              <div className="feature-visual">
                <div className="visual-inner">
                  <img src={feature.visual} alt={feature.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer Frieze Image */}
      <img 
        className="frieze-image" 
        src="/assets/copticFrieze.jpg" 
        alt="Coptic Frieze Footer" 
      />
    </div>
  );
};

export default Home;
