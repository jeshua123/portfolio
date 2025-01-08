import React from 'react'

export default function Home() {
  return (
    <div><div class="about">
    <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
       <span class="icon"></span>
    </a>
    <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
       <span class="icon"></span>
    </a>
    <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
       <span class="icon"></span>
    </a>
    <a class="bg_links logo"></a>
 </div>
 
 <nav class="mainNav">
    <div class="mainNav__logo">Logo</div>
    <div class="mainNav__links">
       <a href="1" class="mainNav__link">01 home</a>
       <a href="2" class="mainNav__link">02 projects</a>
       <a href="3" class="mainNav__link">03 about</a>
       <a href="4" class="mainNav__link"> 04 contacts</a>
    </div>
    <div class="mainNav__icon">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g data-name="Layer 2" fill="#9197AE">
             <g data-name="menu-2">
                <rect
                   width="24"
                   height="24"
                   transform="rotate(180 12 12)"
                   opacity="0"
                />
                <circle cx="4" cy="12" r="1" />
                <rect x="7" y="11" width="14" height="2" rx=".94" ry=".94" />
                <rect x="3" y="16" width="18" height="2" rx=".94" ry=".94" />
                <rect x="3" y="6" width="18" height="2" rx=".94" ry=".94" />
             </g>
          </g>
       </svg>
    </div>
 </nav>
 <header class="mainHeading">
    <div class="mainHeading__content">
       <article class="mainHeading__text">
          <p class="mainHeading__preTitle">Hello,my name is Jeshua Estevez</p>
          <h2 class="mainHeading__title">I make web sites</h2>
          <p class="mainHeading__description">
          I’m a front-end developer
          </p>
       </article>
 

    </div>
 </header>
 </div>
  )
}
