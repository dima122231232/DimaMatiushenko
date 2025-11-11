const Comments = document.querySelector('.Comments-h2');
const blockComments  = document.querySelector('.block__comments');
const historyComments1 = document.querySelector('.history__comm1');historyComments2 = document.querySelector('.history__comm2');historyComments3 = document.querySelector('.history__comm3');

gsap.timeline({scrollTrigger: {trigger: ".section3",start: "top center"}})
.fromTo(blockComments.children[0], { top: "20vh"}, { top: "0vh",duration:.5,ease:"power1.out"})
.fromTo(blockComments.children[1], { top: "20vh" }, { top: "0vh",duration:.5,ease:"power1.out"},.1)
.fromTo(blockComments.children[2], { top: "20vh" }, { top: "0vh",duration:.5,ease:"power1.out"},.2)
.to(".comments__items-img", {opacity:1,duration:.25},0);

if (mediaQuery.matches) {gsap.fromTo(".seek-container", { width: "calc(var(--index)*0)" }, { width: "calc(var(--index)*3.5)",duration:.5, scrollTrigger: {trigger: ".section3",start: "end",}});}
else{gsap.fromTo(".seek-container", { width: "calc(var(--index)*0)" }, { width: "calc(var(--index)*7)",duration:.5, scrollTrigger: {trigger: ".section3",start: "end",}});}
if (mediaQuery.matches) {   

    gsap.timeline({scrollTrigger: {trigger: ".section3",start: "top center", end: "bottom center",toggleActions: "play none none none",}})
    .fromTo([...Comments.children].map(child => child.querySelector('span')), {top: "calc(var(--index)*1.73)"},{top: "calc(var(--index)*0)",duration: .5,stagger:.1});

    gsap.fromTo(".bk_new1", { top: "calc(var(--index)*.8)" }, { top: "calc(var(--index)*0)",duration:.5, scrollTrigger: {trigger: ".section3",start: "center-=220vh center ",}});
    gsap.fromTo(".bk_new2", { top: "calc(var(--index)*.8)" }, { top: "calc(var(--index)*0)",duration:.5,delay:.2, scrollTrigger: {trigger: ".section3",start: "center-=220vh center ",}});
    gsap.fromTo(".bk_new3", { top: "calc(var(--index)*.8)" }, { top: "calc(var(--index)*0)",duration:.5,delay:.4, scrollTrigger: {trigger: ".section3",start: "center-=220vh center ",}});

    gsap.timeline({scrollTrigger: {trigger: ".section3",start: "center-=220vh center ",toggleActions: "play none none none",}})
    .fromTo([...historyComments1.children].map(child => child.querySelector('span')), {top: "calc(var(--index)*.75)"},{top: "calc(var(--index)*0)",duration: .4,stagger:.1,delay:.2});
    gsap.timeline({scrollTrigger: {trigger: ".section3",start: "center-=220vh center ",toggleActions: "play none none none",}})
    .fromTo([...historyComments2.children].map(child => child.querySelector('span')), {top: "calc(var(--index)*.75)"},{top: "calc(var(--index)*0)",duration: .4,stagger:.1,delay:.4});
    gsap.timeline({scrollTrigger: {trigger: ".section3",start: "center-=220vh center ",toggleActions: "play none none none",}})
    .fromTo([...historyComments3.children].map(child => child.querySelector('span')), {top: "calc(var(--index)*.75)"},{top: "calc(var(--index)*0)",duration: .4,stagger:.1,delay:.6});
}
else{
    gsap.timeline({scrollTrigger: {trigger: ".section3",start: "top center", end: "bottom center",toggleActions: "play none none none",}})
    .fromTo([...Comments.children].map(child => child.querySelector('span')), {top: "calc(var(--index)*3)"},{top: "calc(var(--index)*0)",duration: .5,stagger:.1});

    gsap.fromTo(".bk_new1", { top: "calc(var(--index)*1.6)" }, { top: "calc(var(--index)*0)",duration:.5, scrollTrigger: {trigger: ".section3",start: "center-=220vh center "}});
    gsap.fromTo(".bk_new2", { top: "calc(var(--index)*1.6)" }, { top: "calc(var(--index)*0)",duration:.5,delay:.2, scrollTrigger: {trigger: ".section3",start: "center-=220vh center "}});
    gsap.fromTo(".bk_new3", { top: "calc(var(--index)*1.6)" }, { top: "calc(var(--index)*0)",duration:.5,delay:.4, scrollTrigger: {trigger: ".section3",start: "center-=220vh center "}});

    gsap.timeline({scrollTrigger: {trigger: ".section3",start: "center-=220vh center ",toggleActions: "play none none none",}})
    .fromTo([...historyComments1.children].map(child => child.querySelector('span')), {top: "calc(var(--index)*1.2)"},{top: "calc(var(--index)*0)",duration: .4,stagger:.1,delay:.2});
    gsap.timeline({scrollTrigger: {trigger: ".section3",start: "center-=220vh center ",toggleActions: "play none none none",}})
    .fromTo([...historyComments2.children].map(child => child.querySelector('span')), {top: "calc(var(--index)*1.2)"},{top: "calc(var(--index)*0)",duration: .4,stagger:.1,delay:.4});
    gsap.timeline({scrollTrigger: {trigger: ".section3",start: "center-=220vh center ",toggleActions: "play none none none",}})
    .fromTo([...historyComments3.children].map(child => child.querySelector('span')), {top: "calc(var(--index)*1.2)"},{top: "calc(var(--index)*0)",duration: .4,stagger:.1,delay:.6});
}