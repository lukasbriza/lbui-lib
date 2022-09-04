import gsap, { Power2 } from "gsap";
import { GsapSelector, FadeInConfig, FadeOffConfig } from "./global.model";

export const fadeIn = (selector: GsapSelector, config: FadeInConfig = {}) => {
  const conf = {
    duration: config.duration ? config.duration : 0.5,
    ease: config.ease ? config.ease : Power2.easeIn,
    position: config.position ? config.position : 0,
  };

  let tl = gsap.timeline();
  tl.fromTo(
    selector,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: conf.duration,
      ease: conf.ease,
    },
    conf.position
  );

  return tl;
};

export const fadeOff = (selector: GsapSelector, config: FadeOffConfig = {}) => {
  const conf = {
    duration: config.duration ? config.duration : 0.5,
    ease: config.ease ? config.ease : Power2.easeOut,
    position: config.position ? config.position : 0,
  };

  let tl = gsap.timeline();
  tl.fromTo(
    selector,
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: conf.duration,
      ease: conf.ease,
    },
    conf.position
  );

  return tl;
};
