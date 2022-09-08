import gsap, { Power1 } from "gsap";
import { fadeIn, fadeOff } from "../../../utils/global.animations";
import { GsapSelector } from "../../../utils/global.model";

//FADE
export const badgeFadeIn = (defaultNode: GsapSelector, hoverNode: GsapSelector) => {
  let tl = gsap.timeline();
  tl.add(fadeOff(defaultNode), 0);
  tl.add(fadeIn(hoverNode), 0.2);
  return tl;
};

export const badgeFadeOff = (defaultNode: GsapSelector, hoverNode: GsapSelector) => {
  let tl = gsap.timeline();
  tl.add(fadeOff(hoverNode), 0);
  tl.add(fadeIn(defaultNode), 0.2).to([hoverNode, defaultNode], {
    onComplete: () => {
      gsap.set(defaultNode, { clearProps: "all" });
      gsap.set(hoverNode, { clearProps: "all" });
    },
  });
  return tl;
};

//SLIDE TOP
export const slideTopIn = (defaultNode: GsapSelector, hoverNode: GsapSelector, duration?: number) => {
  let tl = gsap.timeline();
  tl.to(
    hoverNode,
    {
      top: "0px",
      left: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
    },
    0
  ).to(
    defaultNode,
    {
      top: "-100%",
      left: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
    },
    0
  );
};

export const slideTopOff = (defaultNode: GsapSelector, hoverNode: GsapSelector, duration?: number) => {
  let tl = gsap.timeline();
  tl.to(
    hoverNode,
    {
      top: "100%",
      left: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
      onComplete: () => {
        gsap.set(hoverNode, { clearProps: "all" });
      },
    },
    0
  ).to(
    defaultNode,
    {
      top: "0px",
      left: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
      onComplete: () => {
        gsap.set(defaultNode, { clearProps: "all" });
      },
    },
    0
  );
  return tl;
};

//SLIDE DOWN
export const slideDownIn = (defaultNode: GsapSelector, hoverNode: GsapSelector, duration?: number) => {
  let tl = gsap.timeline();
  tl.to(
    hoverNode,
    {
      left: "0px",
      top: "0%",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
    },
    0
  ).to(
    defaultNode,
    {
      left: "0px",
      top: "100%",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
    },
    0
  );
  return tl;
};

export const slideDownOff = (defaultNode: GsapSelector, hoverNode: GsapSelector, duration?: number) => {
  let tl = gsap.timeline();
  tl.to(
    hoverNode,
    {
      top: "-100%",
      left: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
      onComplete: () => {
        gsap.set(hoverNode, { clearProps: "all" });
      },
    },
    0
  ).to(
    defaultNode,
    {
      top: "0px",
      left: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
      onComplete: () => {
        gsap.set(defaultNode, { clearProps: "all" });
      },
    },
    0
  );
  return tl;
};

//SLIDE LEFT
export const slideLeftIn = (defaultNode: GsapSelector, hoverNode: GsapSelector, duration?: number) => {
  let tl = gsap.timeline();
  tl.to(
    hoverNode,
    {
      left: "0px",
      top: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
    },
    0
  ).to(
    defaultNode,
    {
      left: "-100%",
      top: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
    },
    0
  );
  return tl;
};

export const slideLeftOff = (defaultNode: GsapSelector, hoverNode: GsapSelector, duration?: number) => {
  let tl = gsap.timeline();
  tl.to(
    hoverNode,
    {
      left: "100%",
      top: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
      onComplete: () => {
        gsap.set(hoverNode, { clearProps: "all" });
      },
    },
    0
  ).to(
    defaultNode,
    {
      left: "0px",
      top: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
      onComplete: () => {
        gsap.set(defaultNode, { clearProps: "all" });
      },
    },
    0
  );
  return tl;
};

//SLIDE RIGHT
export const slideRightIn = (defaultNode: GsapSelector, hoverNode: GsapSelector, duration?: number) => {
  let tl = gsap.timeline();
  tl.to(
    hoverNode,
    {
      left: "0px",
      top: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
    },
    0
  ).to(
    defaultNode,
    {
      left: "100%",
      top: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
    },
    0
  );
  return tl;
};

export const slideRightOff = (defaultNode: GsapSelector, hoverNode: GsapSelector, duration?: number) => {
  let tl = gsap.timeline();
  tl.to(
    hoverNode,
    {
      left: "-100%",
      top: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
      onComplete: () => {
        gsap.set(hoverNode, { clearProps: "all" });
      },
    },
    0
  ).to(
    defaultNode,
    {
      left: "0px",
      top: "0px",
      duration: duration ? duration : 0.75,
      ease: Power1.easeOut,
      onComplete: () => {
        gsap.set(defaultNode, { clearProps: "all" });
      },
    },
    0
  );
  return tl;
};
