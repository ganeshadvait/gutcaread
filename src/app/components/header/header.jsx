"use client";
import React from 'react';
import './header.css';
import { gsap, TimelineMax, Power2, Power4 } from "gsap";
import { useEffect } from 'react';
import Image from 'next/image'



export default function Header() {

    useEffect(() => {
        const ham = document.querySelector("#hamburger");
const menu = document.querySelector("ul.main-menu");
const links = menu.querySelectorAll("li");

var tl = gsap.timeline({ paused: true });


tl.to(menu, {
  duration: 1,
  opacity: 1,
  height: "100vh",
  ease: "expo.inOut"
});
tl.from(
  links,
  {
    duration: 1,
    opacity: 0,
    y: 20,
    stagger: 0.1,
    ease: "expo.inOut"
  },
  "-=0.5"
);

tl.reverse();

ham.addEventListener("click", () => {
  tl.reversed(!tl.reversed());
});



var gE = function (e) {
  return document.getElementById(e);
};

// Elements
var hamburger = gE("hamburger");
var bar1 = gE("hamburger-bar-1");
var bar2 = gE("hamburger-bar-2");
var bar3 = gE("hamburger-bar-3");

// Open State
var active = false;

//Toggle function
function toggleBtn() {
  if (active === true) {
    open.reverse();
    active = false;
  } else {
    open.restart();
    active = true;
  }
}

var open = new TimelineMax({
  paused: true
})

  .add("join")
  .to(bar1, 0.3, { y: 8, ease: Power2.easeIn }, "join")
  .to(bar3, 0.3, { y: -8, ease: Power2.easeIn }, "join")
  .fromTo(bar2, 0.1, { opacity: 1 }, { opacity: 0 })
  .add("spin", "-=.1")
  .to([bar1, bar2], 0.3, { rotation: 135, ease: Power4.easeOut }, "spin")
  .to(bar3, 0.3, { rotation: 225, ease: Power4.easeOut }, "spin");
// listen for click
hamburger.addEventListener("click", toggleBtn);

      }, []); 
      
    return (
        <>
        <nav>
  <div className="wrapper">

    <a href="#" className="logo">
    <Image src="/images/Gut-Care-Logo-1.webp" alt="logo" width={100} height={100} />
    </a>

    <div id="hamburger" className="hamburger">
      <div id="hamburger-bar-1" className="hamburger-bar"></div>
      <div id="hamburger-bar-2" className="hamburger-bar"></div>
      <div id="hamburger-bar-3" className="hamburger-bar"></div>
    </div>

    <ul className="main-menu">
      <li><a href="#">About</a></li>
      <li><a href="#">Doctors</a></li>
      <li><a href="#">Reviews</a></li>
      <li><a href="#">Faqs</a></li>
    </ul>

  </div>
</nav>
        </>
    )
}