"use strict";

gsap = window.gsap;
gsap.registerPlugin(TextPlugin);

gsap.to(".svg-hero-asap-susu", {
  y: -120,
  duration: 5,
  repeat: -1,
  opacity: 0,
});

gsap.fromTo(
  ".svg-hero-leaf",
  {
    scaleX: 1.1,
  },
  {
    scaleX: 0.9,
    duration: 5,
    repeat: -1,
    yoyo: true,
    transformOrigin: "50% 30%",
  }
);

const books = gsap.utils.toArray(".book-list");

var heroTimeline = gsap.timeline({ defaults: { ease: "none" } });
heroTimeline
  .to(".first-greeting", {
    duration: 2,
    text: {
      value: "Is anybody out there? 😃",
    },
  })
  .to(
    ".first-greeting",
    {
      duration: 2,
      text: {
        value: "",
      },
      opacity: 0,
    },
    ">1"
  )
  .to(
    ".hero-hello",
    {
      duration: 1,
      text: {
        value: "HI!",
      },
    },
    "-=.1"
  )
  .to(".second-greeting", {
    duration: 1.5,
    text: {
      value: "My name is ",
    },
  })
  .to(".hero-name", {
    duration: 1,
    text: {
      value: "Abraham",
    },
  })
  .to(
    ".third-greeting",
    {
      duration: 1.5,
      text: {
        value: "I'm a web developer based in",
      },
    },
    ">1"
  )
  .to(".hero-country", {
    duration: 1,
    text: {
      value: "Indonesia",
    },
  })
  .to(
    ".fourth-greeting",
    {
      duration: 2,
      text: {
        value: "It was nice to meet you!",
      },
    },
    ">.5"
  )
  .from(".book-shelves", {
    opacity: 0,
    x: "110%",
  })
  .from(books, {
    opacity: 0,
    x: "110%",
    stagger: {
      each: 0.2
    },
  });

function deleteTransform() {
  // console.log(this);
  this._targets.forEach((target) => (target.style.transform = ""));
}

var heroHello = gsap.fromTo(
  ".hero-hello",
  {
    rotate: 6,
  },
  {
    rotate: -6,
    transformOrigin: "left",
    repeat: -1,
    yoyo: true,
    duration: 3,
  }
);
