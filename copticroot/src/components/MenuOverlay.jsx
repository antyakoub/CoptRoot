import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import '../styles/MenuOverlay.css';

const MenuOverlay = ({ isOpen, onClose }) => {
  const [currentView, setCurrentView] = useState('main'); // 'main' or 'pray', 'learn', 'discover'
  const overlayRef = useRef(null);
  const menuWrapperRef = useRef(null);
  const mainViewRef = useRef(null);
  const subViewRef = useRef(null);

  const menuData = {
    main: [
      { title: 'Home', path: '/' },
      { title: 'Pray', sub: 'pray' },
      { title: 'Learn', sub: 'learn' },
      { title: 'Discover', sub: 'discover' },
      { title: 'Find A Church', path: '/dioceses' },
      { title: 'Contact', path: '/contact' },
    ],
    pray: [
      { title: 'Agpeya', path: '/agpeya' },
      { title: 'Hymns', path: '#' },
    ],
    learn: [
      { title: 'Synaxarium', path: '/Synaxarium' },
      { title: 'Sermons', path: '/sermons' },
      { title: 'Podcasts', path: '/podcasts' },
      { title: 'Early Church Fathers', path: '/ecf' },
      { title: 'Desert Fathers', path: '#' },
    ],
    discover: [
      { title: 'Icons', path: '/icons' },
      { title: 'Dioceses', path: '/dioceses' },
      { title: 'Resources', path: '#' },
      { title: 'Magazines', path: '#' },
    ]
  };

  useEffect(() => {
    if (isOpen) {
      // Fade in overlay
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        visibility: 'visible'
      });
      // Slide up menu block
      gsap.fromTo(menuWrapperRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
    } else {
      // Fade out overlay
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.set(overlayRef.current, { visibility: 'hidden' });
          setCurrentView('main');
        }
      });
    }
  }, [isOpen]);

  const navigateToSub = (sub) => {
    const tl = gsap.timeline();
    tl.to(mainViewRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentView(sub);
      }
    });
    // The new view will be animated in via a separate useEffect or the render transition
  };

  const navigateBack = () => {
    const tl = gsap.timeline();
    tl.to(subViewRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentView('main');
      }
    });
  };

  // Animate in the new view
  useEffect(() => {
    if (currentView === 'main' && isOpen) {
        gsap.fromTo(mainViewRef.current, 
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
    } else if (currentView !== 'main' && isOpen) {
        gsap.fromTo(subViewRef.current, 
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
    }
  }, [currentView]);

  const handleItemClick = (item) => {
    if (item.sub) {
      navigateToSub(item.sub);
    } else {
      onClose();
    }
  };

  return (
    <div className={`menu-overlay ${isOpen ? 'active' : ''}`} ref={overlayRef}>
      <div className="menu-container-wrapper" ref={menuWrapperRef}>
        {currentView === 'main' ? (
          <div className="menu-view" ref={mainViewRef}>
            {menuData.main.map((item, idx) => (
              item.path ? (
                <Link 
                  key={idx} 
                  to={item.path} 
                  className="menu-item-large"
                  onClick={() => handleItemClick(item)}
                >
                  {item.title}
                </Link>
              ) : (
                <div 
                  key={idx} 
                  className="menu-item-large has-sub"
                  onClick={() => handleItemClick(item)}
                >
                  {item.title}
                </div>
              )
            ))}
          </div>
        ) : (
          <div className="menu-view" ref={subViewRef}>
            <div className="back-button" onClick={navigateBack}>
              ← Back
            </div>
            {menuData[currentView].map((item, idx) => (
              <Link 
                key={idx} 
                to={item.path} 
                className="menu-item-large"
                onClick={onClose}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuOverlay;
