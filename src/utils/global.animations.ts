import gsap, { Power2, } from "gsap";
import {
  FadeInConfig,
  FadeOffConfig,
  StretchConfig,
  ShrinkConfig,
  TurnToConfig,
  Directions,
  SlideFromConfig,
  SlideToConfig,
} from "./global.model";

/**
 * fadeIn
 * @param selector - ref.current or string class or id representation
 * @param config - animation config
 * @returns gsap.core.Tween
 */
export const fadeIn = (selector: GSAPTweenTarget, config: FadeInConfig = {}) => {
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

/**
 * fadeOff
 * @param selector - ref.current or string class or id representation
 * @param config - animation config
 * @returns gsap.core.Tween
 */
export const fadeOff = (selector: GSAPTweenTarget, config: FadeOffConfig = {}) => {
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

/**
 * stretch
 * @param selector - ref.current or string class or id representation
 * @param config - animation config
 * @returns gsap.core.Tween
 */
export const stretch = (selector: GSAPTweenTarget, config: StretchConfig = {}) => {
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

/**
 * shrink
 * @param selector - ref.current or string class or id representation
 * @param config - animation config
 * @returns gsap.core.Tween
 */
export const shrink = (selector: GSAPTweenTarget, config: ShrinkConfig = {}) => {
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

/**
 * turnTo
 * @param selector - ref.current or string class or id representation
 * @param config - animation config
 * @returns gsap.core.Tween
 */
export const turnTo = (selector: GSAPTweenTarget, to: number, config: TurnToConfig = {}) => {
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

/**
 * slideFrom
 * @param selector - ref.current or string class or id representation
 * @param config - animation config (duration,ease,fromLocation)
 * @returns gsap.core.Tween
 */
export const slideFrom = (selector: GSAPTweenTarget, from: Directions, config: SlideFromConfig = {}) => {
  const conf = {
    duration: config.duration ? config.duration : 0.75,
    ease: config.ease ? config.ease : Power2.easeOut,
    fromLocation: config.fromLocation,
  };

  switch (from) {
    case "up":
      return gsap.fromTo(
        selector,
        { y: conf.fromLocation ?? "-70%" },
        { y: "0%", duration: conf.duration, ease: conf.ease }
      );
    case "bottom":
      return gsap.fromTo(
        selector,
        { y: conf.fromLocation ?? "70%" },
        { y: "0%", duration: conf.duration, ease: conf.ease }
      );
    case "left":
      return gsap.fromTo(
        selector,
        { x: conf.fromLocation ?? "-70%" },
        { x: "0%", duration: conf.duration, ease: conf.ease }
      );
    case "right":
      return gsap.fromTo(
        selector,
        { x: conf.fromLocation ?? "70%" },
        { x: "0%", duration: conf.duration, ease: conf.ease }
      );
  }
};

/**
 * slideTo
 * @param selector - ref.current or string class or id representation
 * @param config - animation config (duration,ease,toLocation)
 * @returns gsap.core.Tween
 */
export const slideTo = (selector: GSAPTweenTarget, to: Directions, config: SlideToConfig = {}) => {
  const conf = {
    duration: config.duration ? config.duration : 0.75,
    ease: config.ease ? config.ease : Power2.easeIn,
    toLocation: config.toLocation,
  };

  switch (to) {
    case "up":
      return gsap.to(selector, {
        duration: conf.duration,
        y: conf.toLocation ?? "-70%",
        ease: config.ease,
      });
    case "bottom":
      return gsap.to(selector, {
        duration: conf.duration,
        y: conf.toLocation ?? "70%",
        ease: config.ease,
      });
    case "left":
      return gsap.to(selector, {
        duration: conf.duration,
        x: conf.toLocation ?? "-70%",
        ease: config.ease,
      });
    case "right":
      return gsap.to(selector, {
        duration: conf.duration,
        x: conf.toLocation ?? "70%",
        ease: config.ease,
      });
  }
};
