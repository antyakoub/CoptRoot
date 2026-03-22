import Video from "../assets/coptroot.mp4";
import VideoWebm from "../assets/coptroot.webm";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/Home.css'; // Import the CSS for styling

const Home = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const ctaRef = useRef(null);
  const nextSectionRef = useRef(null);

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
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
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
      
      {/* Content section */}
      <img 
        className="frieze-image" 
        src="/assets/copticFrieze.jpg" 
        alt="frieze" 
        ref={nextSectionRef}
      />
      <div className="content">
        <section className="content-section">
          <h2>Why Coptic Root?</h2>
          <p>In my experience many Coptic resources are fragmented and difficult to find, so a single platform would increase accessibility and community engagement.</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
