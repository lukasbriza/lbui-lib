import gsap, { Power2 } from "gsap";
import { GsapSelector, FadeInConfig, FadeOffConfig, StretchConfig, ShrinkConfig, TurnToConfig } from "./global.model";

//FN FADE IN ANIMATION
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

//FN FADE OFF ANIMATION
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

//FN STRETCH ANIMATION
export const stretch = (selector: GsapSelector, config: StretchConfig = {}) => {
  const conf = {
    duration: config.duration ? config.duration : 1,
    ease: config.ease ? config.ease : Power2.easeOut,
    width: config.width ? config.width : "100%",
  };

  return gsap.to(selector, {
    width: conf.width,
    duration: conf.duration,
    ease: conf.ease,
  });
};

//FN SHRING ANIMATION
export const shrink = (selector: GsapSelector, config: ShrinkConfig = {}) => {
  const conf = {
    duration: config.duration ? config.duration : 1,
    ease: config.ease ? config.ease : Power2.easeOut,
  };

  return gsap.to(selector, {
    width: "0%",
    duration: conf.duration,
    ease: conf.ease,
  });
};

//FN TURN ANIMATION
export const turnTo = (selector: GsapSelector, to: number, config: TurnToConfig = {}) => {
  const conf = {
    to: to,
    duration: config.duration ? config.duration : 1,
    ease: config.ease ? config.ease : "linear",
  };

  return gsap.to(selector, {
    rotate: conf.to,
    duration: conf.duration,
    ease: conf.ease,
  });
};
