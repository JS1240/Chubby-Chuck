import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

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
      <div className="h-3.9/5 w-full flex-center flex-col">
        <p
          id="hero"
          className="hero-title mb-6 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Chubby Chuck Smash Burgers
        </p>
        <div className="md:w-10/12 w-9/12 max-w-screen-lg mx-auto">
          <video
            className="pointer-events-none rounded-2xl shadow-2xl"
            autoPlay
            muted
            playsInline
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
        <a id="cta-button" href="#features" className="btn" onClick={scrollToCTA}>
          Menu
        </a>
        <p id="cta" className="hiw-title text-xl text-gray">
          Where Burgers Meet Perfection
        </p>
      </div>
    </section>
  );
};

export default Hero;
