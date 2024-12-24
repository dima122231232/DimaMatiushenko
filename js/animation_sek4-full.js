
function splitTextToWords(selector, className) {
    document.querySelectorAll(selector).forEach(el => {
        el.innerHTML = el.textContent.trim().split(" ").map(word => 
            `<span class="${className}">${word}</span>`
        ).join(" ");
    });
}

splitTextToWords(".section4__div-text", "char3");

gsap.fromTo(".char3",{opacity: .05},{opacity: 1,duration: 1,stagger: 0.03,scrollTrigger: {trigger: ".section4", start: "center-125vh center",end:"+="+65*vh, scrub: true}});
gsap.fromTo(".sek4-1",{marginTop:"calc(var(--index)*1.8)", marginLeft:"calc(var(--index)*-20)"},{marginTop:"calc(var(--index)*-5)", marginLeft:"calc(var(--index)*-20)",scrollTrigger: {trigger: ".section4", start: "top 750vh",end:"+=750vh", scrub: true}});
gsap.fromTo(".sek4-2",{marginTop:"calc(var(--index)*2)", marginLeft:"calc(var(--index)*-21.5)"},{marginTop:"calc(var(--index)*-3)", marginLeft:"calc(var(--index)*-23.5)",scrollTrigger: {trigger: ".section4", start: "top 750vh",end:"+=1000", scrub: true}});
gsap.fromTo(".sek4-3",{rotate:15},{rotate:0,scrollTrigger: {trigger: ".section4", start: "top 750vh",end:"+=1000", scrub: true}});
gsap.fromTo(".sek4-4",{marginTop:"calc(var(--index)*-1)", marginLeft:"calc(var(--index)*22)"},{marginTop:"calc(var(--index)*-3)", marginLeft:"calc(var(--index)*20)",scrollTrigger: {trigger: ".section4", start: "top 650vh",end:"+=750vh", scrub: true}});
gsap.fromTo(".sek4-5",{marginTop:"calc(var(--index)*-1)", marginLeft:"calc(var(--index)*23)"},{marginTop:"calc(var(--index)*-3)", marginLeft:"calc(var(--index)*25)",scrollTrigger: {trigger: ".section4", start: "top 650vh",end:"+=750vh", scrub: true}});
gsap.fromTo(".sek4-6",{marginTop:"calc(var(--index)*.5)", marginLeft:"calc(var(--index)*21)"},{marginTop:"calc(var(--index)*2.5)", marginLeft:"calc(var(--index)*19)",scrollTrigger: {trigger: ".section4", start: "top 650vh",end:"+=750vh", scrub: true}});
gsap.fromTo(".sek4-7",{marginTop:"calc(var(--index)*0)", marginLeft:"calc(var(--index)*23)"},{marginTop:"calc(var(--index)*2)", marginLeft:"calc(var(--index)*25)",scrollTrigger: {trigger: ".section4", start: "top 650vh",end:"+=750vh", scrub: true}});

if (!mediaQuery.matches) {
    gsap.fromTo(".sek4__2-3",{marginTop:"calc(var(--index)*3.4)", marginLeft:"calc(var(--index)*-5)"},{marginTop:"calc(var(--index)*3)", marginLeft:"calc(var(--index)*-10)",scrollTrigger: {trigger: ".section4", start: "top 250vh",end:"+=500vh", scrub: true}});
    gsap.fromTo(".sek4__2-4",{marginTop:"calc(var(--index)*3)", marginLeft:"calc(var(--index)*1)"},{marginTop:"calc(var(--index)*6)", marginLeft:"calc(var(--index)*0)",scrollTrigger: {trigger: ".section4", start: "top 250vh",end:"+=500vh", scrub: true}});
    gsap.fromTo(".sek4__2-5",{marginTop:"calc(var(--index)*0)", marginLeft:"calc(var(--index)*1)"},{marginTop:"calc(var(--index)*1)", marginLeft:"calc(var(--index)*3)",scrollTrigger: {trigger: ".section4", start: "top 250vh",end:"+=500vh", scrub: true}});
    gsap.fromTo(".sek4__2-1",{marginTop:"calc(var(--index)*2)", marginLeft:"calc(var(--index)*-1)"},{marginTop:"calc(var(--index)*0)", marginLeft:"calc(var(--index)*-4)",scrollTrigger: {trigger: ".section4", start: "top 250vh",end:"+=500vh", scrub: true}});
    gsap.fromTo(".sek4__2-7",{marginTop:"calc(var(--index)*5)", marginLeft:"calc(var(--index)*3.5)"},{marginTop:"calc(var(--index)*6)", marginLeft:"calc(var(--index)*8.5)",scrollTrigger: {trigger: ".section4", start: "top 250vh",end:"+=500vh", scrub: true}});
}