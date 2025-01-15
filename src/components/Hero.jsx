import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
  const underlineRef = useRef(null);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      underlineRef.current,
      { scaleX: 0, transformOrigin: 'left' },
      { scaleX: 1, duration: 1, ease: 'power2.out' }
    );
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    gsap.to('#cta', { opacity: 1, y: 0, duration: 1, delay: 1.5, stagger: 0.25 });
  }, []);

  const scrollToCTA = (event) => {
    event.preventDefault();
    document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full nav-height bg-white relative">
      <div className="h-4/5 w-full flex-center flex-col">
        <p
          id="hero"
          className="hero-title mb-6 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Chubby Chuck  
          <span ref={underlineRef} className="underline underline-offset-3 decoration-8 decoration-blue dark:decoration-blue-600 transform scale-x-0 inline-block"> Smash Burgers</span>
        </p>
        <div className="md:w-10/12 w-9/12 max-w-screen-xl mx-auto">
          <video
            className="pointer-events-none rounded-2xl shadow-2xl"
            autoPlay
            muted
            playsInline
            loop
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 mb-12"
      >
        <a id="cta-button" href="#features" className="btn-menu" onClick={scrollToCTA}>
          Menu
        </a>
        
      </div>
      <p id="cta" className="hiw-title text-xl text-gray">
          Where Burgers Meet Perfection
        </p>
    </section>
  );
};

export default Hero;
