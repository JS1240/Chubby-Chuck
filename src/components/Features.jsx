import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    })

    animateWithGsap('#features_title', { y:0, opacity:1})
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    animateWithGsap(
      '.g_text',
      {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    )
  }, []);

  return (
    <section id='features' className="h-full common-padding bg-white relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Smash It Your Way</h1>
        </div>
        
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24 text-blue">
            <h2 className="text-5xl lg:text-7xl font-semibold">Sizzle & Serve: </h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">Watch the Magic</h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef}>
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore2Img} alt="titanium 2" className="feature-video g_grow" />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                  Simplicity at its finest – our {' '}
                    <span className="text-blue">
                    Classic Smash Burger is all about the essentials, done right. 
                    </span>
                    A perfectly smashed, seared-to-crisp beef patty, layered with melty American cheese, 
                    crisp lettuce, ripe tomato, and tangy house-made smash sauce, all hugged by a soft, 
                    toasted brioche bun. Every bite is pure comfort, every moment a flavor-packed delight.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                  Turn up the heat with our  {' '}
                    <span className="text-blue">
                    Spicy Smash Stack!
                    </span>
                    Double smashed beef patties, dripping with gooey pepper jack cheese, 
                    topped with fiery jalapeños, crispy fried onions, and a bold chipotle aioli. 
                    All of this flavor explosion is served on a toasted sesame bun that holds the 
                    spice – and your appetite – perfectly in place. Not for the faint of heart, 
                    but definitely for the flavor-chasers!
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features