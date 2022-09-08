import gsap, { Power2 } from "gsap";
import { GsapSelector, FadeInConfig, FadeOffConfig } from "./global.model";

export const fadeIn = (selector: GsapSelector, config: FadeInConfig = {}) => {
  const conf = {
    duration: config.duration ? config.duration : 0.5,
    ease: config.ease ? config.ease : Power2.easeIn,
    delay: config.delay ? config.delay : 0,
  };

  return gsap.to(selector, {
    opacity: 1,
    duration: conf.duration,
    ease: conf.ease,
    delay: conf.delay,
  });
};

export const fadeOff = (selector: GsapSelector, config: FadeOffConfig = {}) => {
  const conf = {
    duration: config.duration ? config.duration : 0.5,
    ease: config.ease ? config.ease : Power2.easeOut,
    delay: config.delay ? config.delay : 0,
  };

  return gsap.to(selector, {
    opacity: 0,
    delay: conf.delay,
    duration: conf.duration,
    ease: conf.ease,
  });
};
