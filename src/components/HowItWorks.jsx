import React, { useRef } from 'react'
import { chubbyImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding bg-slate-100">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chubbyImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
          It’s here.
            <br /> The biggest reinvention in the history of burgers.
          </h2>

          <p className="hiw-subtitle">
            Smash’d like never before. Order today on Wolt.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Wolt: Chubby Chuck</p>
          </div>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                  The smash burger experience you love, now just a tap away.  {' '}
                    <span className="text-blue">
                    We’re proud to partner with Wolt App to bring you our best flavors faster than ever.
                    </span>
                  </p>

                  <p className="hiw-text g_fadeIn">
                  Crispy edges, juicy centers, and bold toppings {' '}
                    <span className="text-blue">
                    all delivered right to your door. 
                    </span>
                    Your next bite of burger perfection is waiting!
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">Available</p>
                <p className="hiw-bigtext">TODAY</p>
                <p className="hiw-text">From 11 a.m. To 11 p.m.</p>
              </div>
              </div>
            </div>
    </section>
  )
}

export default HowItWorks