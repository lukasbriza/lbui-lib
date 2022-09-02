import gsap from "gsap";
import { ref, confOn, confOff } from "./types/model";

export const crossOn = (line1: ref, line2: ref, line3: ref, config: confOn = {}) => {
  let on = gsap.timeline();
  return on
    .addLabel("start")
    .to(
      line1.current,
      {
        position: "relative",
        transform: "rotate(45deg)",
        transformOrigin: "center",
        top: "8px",
        ease: config.ease ? config.ease : "linear",
        duration: config.duration ? config.duration : 0.3,
        delay: config.delay ? config.delay : 0.1,
      },
      "start"
    )
    .to(
      line3.current,
      {
        position: "relative",
        transform: "rotate(-45deg)",
        transformOrigin: "center",
        bottom: "8px",
        ease: config.ease ? config.ease : "linear",
        duration: config.duration ? config.duration : 0.3,
        delay: config.delay ? config.delay : 0.1,
      },
      "start"
    )
    .to(
      line2.current,
      {
        position: "relative",
        height: "0px",
        duration: config.middleDuration ? config.middleDuration : 0.2,
        ease: config.ease ? config.ease : "linear",
      },
      "start"
    );
};

export const crossOff = (line1: ref, line2: ref, line3: ref, config: confOff = {}) => {
  let off = gsap.timeline();
  return off
    .addLabel("start")
    .to(
      line1.current,
      {
        position: "relative",
        transform: "rotate(0deg)",
        transformOrigin: "center",
        top: "0px",
        ease: config.ease ? config.ease : "linear",
        duration: config.duration ? config.duration : 0.3,
        delay: config.delay ? config.delay : 0,
      },
      "start"
    )
    .to(
      line3.current,
      {
        position: "relative",
        transform: "rotate(0deg)",
        transformOrigin: "center",
        bottom: "0px",
        ease: config.ease ? config.ease : "linear",
        duration: config.duration ? config.duration : 0.3,
        delay: config.delay ? config.delay : 0,
      },
      "start"
    )
    .to(
      line2.current,
      {
        position: "relative",
        height: "4px",
        duration: config.middleDuration ? config.middleDuration : 0.2,
        ease: config.ease ? config.ease : "linear",
        delay: config.middleDelay ? config.middleDelay : 0.3,
      },
      "start"
    );
};
