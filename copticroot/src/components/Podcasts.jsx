import { useEffect, useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "../styles/Podcasts.css";

gsap.registerPlugin(ScrollTrigger);

/* eslint-disable react/prop-types */
const PodcastItem = ({ title, host, thumbnail, link }) => {
  return (
    <figure className="column__item">
      <a href={link} target="_blank" rel="noopener noreferrer" className="music-link">
        <div className="column__item-imgwrap">
          <div 
            className="column__item-img" 
            style={{ backgroundImage: `url(${thumbnail.startsWith('/') ? thumbnail : `/${thumbnail}`})` }}
          ></div>
        </div>
        <div className="column__item-info">
          <h2>{title}</h2>
          <h3>{host}</h3>
        </div>
      </a>
    </figure>
  );
};

const PodcastGrid = () => {
  const [podcasts, setPodcasts] = useState([]);
  const gridRef = useRef(null);
  const [columns, setColumns] = useState([[], [], []]);

  useEffect(() => {
    fetch("/assets/podcastAssets/podcasts.json")
      .then((res) => res.json())
      .then((data) => {
        setPodcasts(data);
        // Split podcasts into 3 columns
        const cols = [[], [], []];
        data.forEach((pod, index) => {
          cols[index % 3].push(pod);
        });
        setColumns(cols);
      })
      .catch(console.error);
  }, []);

  useLayoutEffect(() => {
    if (podcasts.length === 0) return;

    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const scrollFn = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);

    const grid = gridRef.current;
    const colElements = Array.from(grid.querySelectorAll('.column'));
    
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: `(min-width: 848px)`,
      isMobile: `(max-width: 847px)`
    }, (context) => {
      let { isDesktop } = context.conditions;

      // Middle column animation
      gsap.to(colElements[1], {
        ease: 'none',
        scrollTrigger: {
          trigger: grid,
          start: 'clamp(top bottom)',
          end: 'clamp(bottom top)',
          scrub: true
        },
        yPercent: isDesktop ? -20 : -10
      });

      // Side columns items animation
      const items = colElements.map((col, pos) => {
        return Array.from(col.querySelectorAll('.column__item')).map(item => ({
          element: item,
          column: pos,
          wrapper: item.querySelector('.music-link'),
        }));
      }).flat();

      items.forEach(item => {
        if (item.column === 1) return;
        
        gsap.to(item.wrapper, {
          ease: 'none',
          startAt: { transformOrigin: item.column === 0 ? '0% 100%' : '100% 100%' },
          scrollTrigger: {
            trigger: item.element,
            start: 'clamp(top bottom)',
            end: 'clamp(bottom top)',
            scrub: true
          },
          rotation: item.column === 0 ? (isDesktop ? -6 : -3) : (isDesktop ? 6 : 3),
          xPercent: item.column === 0 ? (isDesktop ? -10 : -5) : (isDesktop ? 10 : 5)
        });
      });
    });

    return () => {
      lenis.destroy();
      mm.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [podcasts]);

  return (
    <div className="podcast-page">
      <h1 className="podcast-header">Coptic Podcasts</h1>
      <div className="columns" ref={gridRef}>
        {columns.map((colItems, colIndex) => (
          <div key={colIndex} className="column">
            {colItems.map((pod, podIndex) => (
              <PodcastItem
                key={podIndex}
                title={pod.title}
                host={pod.host}
                thumbnail={pod.thumbnail}
                link={pod.link}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastGrid;
