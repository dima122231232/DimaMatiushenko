gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
let vh = window.innerHeight / 100;let vw = window.innerWidth / 100;


        /*HEADER*/
const burgers = document.querySelectorAll('.burger');
const burger = document.querySelector('.burger');
let prov =0;

const isMobile = () => window.matchMedia("(max-width: 600px)").matches || "ontouchstart" in window;
window.addEventListener("load", () => {
    if (!isMobile()) {
    burgers.forEach(burger => {
        const followCursor = ({ clientX, clientY }) => {
        const { left, top, width, height } = burger.getBoundingClientRect();
        gsap.to(burger, {x: clientX - left - width / 2,y: clientY - top - height / 2,duration: 0.45,ease: 'power2.out'});};
        burger.addEventListener('mouseenter', () => {document.addEventListener('mousemove', followCursor);});

        burger.addEventListener('mouseleave', () => {
        document.removeEventListener('mousemove', followCursor);
        gsap.to(burger, { x: 0, y: 0, duration: 0.6, ease: 'power2.out' });
        });
    });
    }

    gsap.to(burger,{opacity:1,duration:.2,delay:.5})
    gsap.fromTo(burger,{scale:.5},{scale:1,duration:.75,delay:.3,ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1")})
    gsap.to(".header_button",{left:"0px",duration:1,delay:.1,ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1")})
    gsap.to(".hd_button2",{backgroundColor:"#00E200",duration:1,delay:1.5})
});
const mediaQuery = window.matchMedia("(min-width: 840px)");

function headerClick() {
    if (!prov) {
      if (mediaQuery.matches) {
        gsap.timeline()
          .to(burger.children[1], { opacity: 0, duration: 0.1 })
          .to(burger.children[0], { margin: "0px 0", duration: 0.4 }, 0)
          .to(burger.children[2], { margin: "0px 0", duration: 0.4 }, 0)
          .to(burger.children[0], { rotate: -45, top: "4.75px", duration: 0.4 })
          .to(burger.children[2], { rotate: 45, bottom: "4.75px", duration: 0.4 }, 0.4)
          .to(".burger-str", { width: "0vw", duration: 1, delay: 0.2, ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1") }, 0);
        gsap.to(".str", { right: "-80vw", duration: 1.2, ease: "strong.inOut" });
        gsap.to(".fr", { right: "20vw", duration: 1.2, ease: "strong.inOut" });
      } else {
        gsap.timeline()
          .to(burger.children[1], { opacity: 0, duration: 0.1 })
          .to(burger.children[0], { margin: "0px 0", duration: 0.2 }, 0)
          .to(burger.children[2], { margin: "0px 0", duration: 0.2 }, 0)
          .to(burger.children[0], { rotate: -45, top: "3px", duration: 0.2 })
          .to(burger.children[2], { rotate: 45, bottom: "4.75px", duration: 0.2 }, 0.2)
          .to(".burger-str", { width: "0vw", duration: .8, delay: 0.2, ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1") }, 0);
        gsap.to(".str", { right: "0vw", duration: 1, ease: "strong.inOut" });
        gsap.to(".fr", { right: "100vw", duration: 1, ease: "strong.inOut" });
      }
      prov = 1;
    } else {
      gsap.timeline()
        .to(burger.children[0], { rotate: 0, top: "0px", duration: 0.2 })
        .to(burger.children[2], { rotate: 0, bottom: "0px", duration: 0.2 }, 0)
        .to(burger.children[0], { margin: "3.5px 0", duration: 0.2 }, 0.2)
        .to(burger.children[2], { margin: "3.5px 0", duration: 0.2 }, 0.2)
        .to(burger.children[1], { opacity: 1, duration: 0.1 }, 0.2)
        .to(".str", { right: "-120vw", duration: 1, ease: "strong.inOut" }, 0)
        .to(".fr", { right: "-20vw", duration: 1, ease: "strong.inOut" }, 0)
        .to(".burger-str", { width: "6vw", duration: .8, delay: 0.1, ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1") }, 0);
      prov = 0;
    }
  }




        /*SECTION1*/
const isAppleDevice = /iPhone|iPad|Macintosh/.test(navigator.userAgent);

// if (!isAppleDevice) {
// gsap.timeline()
//     .fromTo(".sec_photo1", {y:"100vh",x:"calc(var(--index)*-3)",scale:.3},{y:"0vh",x:"0px",scale:1.1,duration:.9,delay:1.5,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")})
//     .to(".sec_photo6",{rotate:0,duration:.35},3.6)
//     .to(".main_photo",{opacity:1,duration:.15},.9)
//     .fromTo(".sec_photo2", {y:"100vh",x:"calc(var(--index)*5)",scale:.3},{y:"0vh",x:"calc(var(--index)*8.2)",scale:1,duration:.9,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")},1.7)
//     .fromTo(".sec_photo4", {y:"100vh",x:"calc(var(--index)*-14.5)",scale:.3},{y:"0vh",x:"calc(var(--index)*-10.5)",scale:1,duration:.9,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")},1.9)
//     .fromTo(".sec_photo3", {y:"100vh",x:"calc(var(--index)*7)",scale:.3},{y:"0vh",x:"calc(var(--index)*10.5)",scale:1,duration:.9,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")},2.1)
//     .fromTo(".sec_photo7", {y:"100vh",x:"calc(var(--index)*2.8)",scale:.3},{y:"0vh",x:"calc(var(--index)*3.8)",scale:1,duration:.9,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")},2.3)
//     .fromTo(".sec_photo5", {x:"120",scale:.9,rotate:"15deg"},{x:"calc(var(--index)*-12.1)",rotate:"0deg",scale:1,duration:.9,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")},2.9)
//     .fromTo(".sec_photo5",{opacity:0},{opacity:1,duration:.1},2.8)
//     .fromTo(".sec_photo6", {y:"100vh",x:"calc(var(--index)*-11.5)",scale:.3,rotate:90},{y:"-100vh",x:"calc(var(--index)*-10.75)",scale:1,duration:.9,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")},2.7)
//     .fromTo(".sec_photo2",{x:"calc(var(--index)*8.2)"},{x:"calc(var(--index)*12.2)",duration:.2},3.5)
//     .to(".sec_photo1",{scale:1,duration:.5},3.7)
//     .to(".marquee-content",{top:"0px",duration:3,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")},1.7);  
// }
// else{
window.addEventListener("load", () => {
    gsap.timeline()
    .fromTo(".sec_photo1", { transform: "translate(0, 100vh)" }, { transform: "translate(0, 0)", duration: 1.2,ease: "power3.out" })
    .to(".sec_photo6", { transform: "rotate(0deg)", duration: 0.5 }, 1.9)
    .to(".main_photo", { opacity: 1, duration: 0.2 }, .2)
    .fromTo(".sec_photo2", { transform: "translate(calc(var(--index)*-2), 0)" }, { transform: "translate(calc(var(--index)*0), 0)", duration: 0.4 }, 2)
    .fromTo(".sec_photo2", { transform: "translate(calc(var(--index)*-3), 100vh)" }, { transform: "translate(calc(var(--index)*-2), 0)", duration: 1, ease: "power3.out" }, .3)
    .fromTo(".sec_photo4", { transform: "translate(calc(var(--index)*-4), 100vh)" }, { transform: "translate(calc(var(--index)*-0), 0)", duration: 1, ease: "power3.out" }, .5)
    .fromTo(".sec_photo3", { transform: "translate(calc(var(--index)*-3), 100vh)" }, { transform: "translate(calc(var(--index)*0), 0)", duration: 1, ease: "power3.out" }, .7)
    .fromTo(".sec_photo7", { transform: "translate(calc(var(--index)*-1), 100vh)" }, { transform: "translate(calc(var(--index)*0), 0)", duration: 1, ease: "power3.out" }, .9)
    .fromTo(".sec_photo5", { transform: "translate(calc(var(--index)*4), 0) rotate(15deg)" }, { transform: "translate(calc(var(--index)*0), 0) rotate(0deg)", duration: 1.2, ease: "power3.out" }, 1.5)
    .fromTo(".sec_photo5", { opacity: 0 }, { opacity: 1, duration: 0.2 }, 1.3)
    .fromTo(".sec_photo6", { transform: "translate(calc(var(--index)*-1.5), 100vh) rotate(90deg)" }, { transform: "translate(calc(var(--index)*0), 0vh) rotate(90deg)", duration: 1.2, ease: "power3.out" }, 1.2)
    .to(".sec_photo1", { transform: "scale(1)", duration: 0.6 }, 2.3);
    gsap.to(".marquee-content",{transform: "translateX(-50%) translateY(0px)",duration:3,delay:.2,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")});  
});
// }


// gsap.timeline()
//     .fromTo(".sec_photo1", {y:"0vh",x:"calc(var(--index)*-3)",scale:.9},{y:"0vh",x:"0px",duration:.9,delay:1.5,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")})
//     .to(".sec_photo6",{rotate:0,duration:.35},3.6)
//     .to(".main_photo",{opacity:1,duration:.15},.9)
//     .fromTo(".sec_photo4", {y:"0vh",x:"calc(var(--index)*-14.5)"},{y:"0vh",x:"calc(var(--index)*-10.5)",duration:.9,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")},1.9)
//     .fromTo(".sec_photo3", {y:"0vh",x:"calc(var(--index)*7)"},{y:"0vh",x:"calc(var(--index)*10.5)",duration:.9,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")},2.1)
//     .fromTo(".sec_photo7", {y:"0vh",x:"calc(var(--index)*2.8)"},{y:"0vh",x:"calc(var(--index)*3.8)",duration:.9,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")},2.3)
//     .fromTo(".sec_photo5", {marginLeft:"calc(var(--index)*0)",rotate:"15deg"},{marginLeft:"calc(var(--index)*-12.1)",rotate:"0deg",scrollTrigger: {trigger: ".section1", start: "top top",end:"+="+25*vh, scrub: true}})
//     .fromTo(".sec_photo6", {y:"0vh",x:"calc(var(--index)*-11.5)",rotate:90},{y:"-100vh",x:"calc(var(--index)*-10.75)",duration:.9,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")},2.7)
//     .fromTo(".sec_photo2",{marginLeft:"calc(var(--index)*0)"},{marginLeft:"calc(var(--index)*12.2)",scrollTrigger: {trigger: ".section1", start: "top top",end:"+="+25*vh, scrub: true}})
//     .to(".sec_photo1",{scale:1,duration:.5},3.7)
//     .to(".marquee-content",{top:"0px",duration:3,ease:CustomEase.create("custom","M0,0 C.7,0 .3,1 1,1")},1.7);

if (mediaQuery.matches) {gsap.fromTo(".rounded-div-wrap",{height:"10vh"},{height:"0vh",scrollTrigger: {trigger: ".section1", start:50*vh,end:130*vh, scrub: true,}});}
else{gsap.fromTo(".rounded-div-wrap",{height:"5vh"},{height:"0vh",scrollTrigger: {trigger: ".section1", start:30*vh,end:110*vh, scrub: true}});}


const marqueeContent = document.querySelector('.marquee-content');
const text = "CREATOR · DEVELOPER · DESIGNER · PROGRAMISTICC · ";
const modifiedText = text.replace(/ · /g, '<span class="dot"> · </span>');
const repeatCount = mediaQuery.matches ? 30 : 100;
marqueeContent.innerHTML = modifiedText.repeat(repeatCount);
window.addEventListener("load", () => {
    function animateDesktop() {gsap.to(".marquee-content", {x:"100%",duration: 250,ease: "none",repeat: -1,});window.addEventListener("scroll", () => {const scrollDirection = window.scrollY > (this.lastScroll || 0) ? 1 : -1;this.lastScroll = window.scrollY;gsap.to(".marquee-content", {x: scrollDirection === 1 ? "-100%" : "100%",duration: 250,ease: "none",repeat: -1,});});}
    function animateMobile() {gsap.to(".marquee-content", {x: "100%",duration: 500,ease: "none",repeat: -1,});}
    if (!mediaQuery.matches) {animateMobile();} else {animateDesktop();}
});

        /*SECTION2*/

    gsap.to(".section2", {scrollTrigger: {trigger: ".section2",start: "top top",end:500*vh,pin: true,pinSpacing: true,scrub: 2,anticipatePin: 1}});

    // if (mediaQuery.matches) {
        function splitTextToChars(selector, className) {
            document.querySelectorAll(selector).forEach(el => {
                el.innerHTML = el.textContent.trim().split("").map(char => 
                    `<span class="${className}">${char === " " ? "&nbsp;" : char}</span>`
                ).join("");
            });
        }
    // }
    // else{
    //     function splitTextToChars(selector, className) {
    //         document.querySelectorAll(selector).forEach(el => {
    //             el.innerHTML = el.textContent.trim().split(" ").map(word => 
    //                 `<span class="${className}">${word}</span>`
    //             ).join(" ");
    //         });
    //     }
    // }

    splitTextToChars(".anim1", "char");
    splitTextToChars(".anim1-fake", "char2");
    splitTextToChars(".anim11", "char5");

    // if (mediaQuery.matches) {

        gsap.fromTo(".macro__polosa-set2",{width:"0px"},{width:"162px",scrollTrigger: {trigger: ".section2", start: "top top",end:500*vh, scrub: true,},});

        gsap.fromTo(".char",{opacity: .4},{opacity: 1,duration: 1,stagger: 0.03,scrollTrigger: {trigger: ".section2", start: "top top",end:190*vh, scrub: true,},});
        gsap.fromTo(".char2",{opacity: 1},{opacity: 1,duration: 1,stagger: 0.001,duration:.01});
        gsap.fromTo(".b_t2",{opacity:0},{opacity:1,scrollTrigger: {trigger: ".section2", start:250*vh,end:300*vh, scrub: true,},});
        gsap.fromTo(".am2",{opacity:0},{opacity:1,scrollTrigger: {trigger: ".section2", start:250*vh,end:300*vh, scrub: true,},});
        gsap.fromTo(".b_t3",{opacity:0},{opacity:1,scrollTrigger: {trigger: ".section2", start:350*vh,end:400*vh, scrub: true,},});
        gsap.fromTo(".am3",{opacity:0},{opacity:1,scrollTrigger: {trigger: ".section2", start:350*vh,end:400*vh, scrub: true,},});
        gsap.fromTo(".b_t4",{opacity:0},{opacity:1,scrollTrigger: {trigger: ".section2", start:450*vh,end:500*vh, scrub: true,},});
        gsap.fromTo(".am4",{opacity:0},{opacity:1,scrollTrigger: {trigger: ".section2", start:450*vh,end:500*vh, scrub: true,},});

        gsap.fromTo(".b_t1,.b_t1-fake",{transform: "translate(-50%, -50%) scale(1)",opacity:1,filter: "blur(0px)"},{transform: "translate(-50%, -50%)  scale(1.5)",opacity:0,filter: "blur(7px)",scrollTrigger: {trigger: ".section2", start:200*vh,end:250*vh, scrub: true,},});
        gsap.fromTo(".b_t2",{transform: "translate(-50%, -50%) scale(1)",opacity:1,filter: "blur(0px)"},{transform: "translate(-50%, -50%)  scale(1.5)",opacity:0,filter: "blur(7px)",scrollTrigger: {trigger: ".section2", start:300*vh,end:350*vh, scrub: true,},});
        gsap.fromTo(".b_t3",{transform: "translate(-50%, -50%) scale(1)",opacity:1,filter: "blur(0px)"},{transform: "translate(-50%, -50%)  scale(1.5)",opacity:0,filter: "blur(7px)",scrollTrigger: {trigger: ".section2", start:400*vh,end:450*vh, scrub: true,},});
    // }
    // else{
        
    //     gsap.fromTo(".char5",{opacity: .1},{opacity: 1,duration: 1,stagger: 0.03,scrollTrigger: {trigger: ".section2", start: "top top",end:160*vh, scrub: true,},});
    //     gsap.fromTo(".b_t11",{transform: "translate(-50%, -50%) ",opacity:.85},{transform: "translate(-50%, -50%) ",duration: .5,opacity:0,scrollTrigger: {trigger: ".section2", start:189*vh,end:180*vh,toggleActions: "play none none reverse"}});

    //     gsap.fromTo(".macro__polosa-set2",{width:"0px"},{width:"120px",scrollTrigger: {trigger: ".section2", start: "top top",end:500*vh, scrub: true,},});

    //     gsap.fromTo(".char",{opacity: .4},{opacity: 1,duration: 1,stagger: 0.03,scrollTrigger: {trigger: ".section2", start: "top top",end:200*vh, scrub: true,},});
    //     gsap.fromTo(".char2",{opacity: 1},{opacity: 1,duration: 1,stagger: 0.001,duration:.01});

        
    //     gsap.fromTo(".b_t1,.b_t1-fake",{transform: "translate(-50%, -50%) ",opacity:1},{transform: "translate(-50%, -50%) ",duration: .35,opacity:0,scrollTrigger: {trigger: ".section2", start:180*vh,end:181*vh,toggleActions: "play none none reverse"}});
    //     gsap.fromTo(".b_t1,.b_t1-fake",{transform: "translate(-50%, -50%) ",opacity:0},{transform: "translate(-50%, -50%) ",duration: .35,opacity:1,scrollTrigger: {trigger: ".section2", start:100*vh,end:101*vh,toggleActions: "play none none reverse"}});
    //     gsap.fromTo(".b_t2",{transform: "translate(-50%, -50%) ",opacity:1},{transform: "translate(-50%, -50%) ",duration: .35,opacity:0,scrollTrigger: {trigger: ".section2", start:280*vh,end:281*vh,toggleActions: "play none none reverse"}});
    //     gsap.fromTo(".b_t2",{transform: "translate(-50%, -50%) ",opacity:0},{transform: "translate(-50%, -50%) ",duration: .35,opacity:1,scrollTrigger: {trigger: ".section2", start:201*vh,end:202*vh,toggleActions: "play none none reverse"}});
    //     gsap.fromTo(".b_t3",{transform: "translate(-50%, -50%) ",opacity:1},{transform: "translate(-50%, -50%) ",duration: .35,opacity:0,scrollTrigger: {trigger: ".section2", start:379*vh,end:380*vh,toggleActions: "play none none reverse"}});
    //     gsap.fromTo(".b_t3",{transform: "translate(-50%, -50%) ",opacity:0},{transform: "translate(-50%, -50%) ",duration: .35,opacity:1,scrollTrigger: {trigger: ".section2", start:301*vh,end:302*vh,toggleActions: "play none none reverse"}});
    //     // gsap.fromTo(".b_t4",{transform: "translate(-50%, -50%) ",opacity:1},{transform: "translate(-50%, -50%) ",duration: .35,opacity:0,scrollTrigger: {trigger: ".section2", start:499*vh,end:500*vh,toggleActions: "play none none reverse"}});
    //     gsap.fromTo(".b_t4",{transform: "translate(-50%, -50%) ",opacity:0},{transform: "translate(-50%, -50%) ",duration: .35,opacity:1,scrollTrigger: {trigger: ".section2", start:401*vh,end:402*vh,toggleActions: "play none none reverse"}});
        
    // }

