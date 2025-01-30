gsap.registerPlugin(ScrollToPlugin);
const homeButton = document.querySelector('.burger__home-but');
const contactButton = document.querySelector('.burger__contact-but');

homeButton.addEventListener('click', () => {
  if (!mediaQuery.matches){
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
    gsap.to(window, {duration: 2,delay:.5,scrollTo: ".section1",ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1"),overwrite: "auto"});}
  else{
    ScrollSmoother.get().scrollTo(".section1", true);
  }
});

contactButton.addEventListener('click', () => {
    if (!mediaQuery.matches){
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
        gsap.to(window, {duration: 2,daly:.5, scrollTo: "footer",ease: CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1")});
    }
    else{
        ScrollSmoother.get().scrollTo("footer", true);
    }
});
