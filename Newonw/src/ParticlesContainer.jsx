
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export function ParticlesContainer(props) {
  // this customizes the component tsParticles installation
  const customInit = useCallback(async ()) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  });

  const options = {
    /* custom options */
    

 autoPlay: true,
 background: {
   color: {
     value: "#000"
   },
   opacity: 1
 },
 backgroundMask: {
   composite: "destination-out",
   cover: {
     opacity: 1,
     color: {
       value: ""
     }
   },
   enable: false
 },
 detectRetina: true,
 duration: 0,
 fpsLimit: 120,
 interactivity: {
   detectsOn: "window",
   events: {
     onClick: {
       enable: false,
       mode: []
     },
     onDiv: {
       selectors: [],
       enable: false,
       mode: [],
       type: "circle"
     },
     onHover: {
       enable: false,
       mode: [],
       parallax: {
         enable: false,
         force: 2,
         smooth: 10
       }
     },
     resize: {
       delay: 0.5,
       enable: true
     }
   },
   modes: {
     trail: {
       delay: 1,
       pauseOnStop: false,
       quantity: 1
     },
     attract: {
       distance: 200,
       duration: 0.4,
       easing: "ease-out-quad",
       factor: 1,
       maxSpeed: 50,
       speed: 1
     },
     bounce: {
       distance: 200
     },
     bubble: {
       distance: 200,
       duration: 0.4,
       mix: false,
       divs: {
         distance: 200,
         duration: 0.4,
         mix: false,
         selectors: []
       }
     },
     connect: {
       distance: 80,
       links: {
         opacity: 0.5
       },
       radius: 60
     },
     grab: {
       distance: 100,
       links: {
         blink: false,
         consent: false,
         opacity: 1
       }
     },
     push: {
       default: true,
       groups: [],
       quantity: 4
     },
     remove: {
       quantity: 2
     },
     repulse: {
       distance: 200,
       duration: 0.4,
       factor: 100,
       speed: 1,
       maxSpeed: 50,
       easing: "ease-out-quad",
       divs: {
         distance: 200,
         duration: 0.4,
         factor: 100,
         speed: 1,
         maxSpeed: 50,
         easing: "ease-out-quad",
         selectors: []
       }
     },
     slow: {
       factor: 3,
       radius: 200
     }
   }
 },
 particles: {
   bounce: {
     horizontal: { value: 1 },
     vertical: { value: 1 }
   },
   collisions: {
     absorb: { speed: 2 },
     bounce: {
       horizontal: { value: 1 },
       vertical: { value: 1 }
     },
     enable: false,
     maxSpeed: 50,
     mode: "bounce",
     overlap: {
       enable: true,
       retries: 0
     }
   },
   color: {
     value: "#fff"
   },
   move: {
     angle: { offset: 0, value: 90 },
     gravity: {
       acceleration: 15,
       enable: true,
       inverse: true,
       maxSpeed: 100
     },
     speed: { min: 10, max: 20 },
     trail: {
       enable: true,
       length: 10,
       fill: {
         color: {
           value: "#000"
         }
       }
     }
   },
   number: {
     value: 0
   },
   opacity: {
     value: 1
   },
   shape: {
     type: "line"
   },
   size: {
     value: { min: 0.1, max: 50 },
     animation: {
       enable: true,
       speed: 90,
       sync: true,
       mode: "auto",
       startValue: "max",
       destroy: "min"
     }
   }
 },
 emitters: {
   autoPlay: true,
   fill: true,
   life: {
     wait: false,
     count: 0,
     delay: 0.1,
     duration: 0.1
   },
   rate: {
     quantity: 1,
     delay: 0.15
   },
   shape: {
     type: "square"
   },
   size: {
     mode: "percent",
     height: 0,
     width: 100
   },
   direction: "top",
   position: {
     x: 50,
     y: 100
   }
 }
};
return <Particles options={options} init={this.customInit} />;

  };

  