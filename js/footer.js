const button = document.querySelector('a.button-ft-tel');
const button2 = document.querySelector('a.button-ft-em');

button.addEventListener('mousemove', function(evt) {
    const rect = this.getBoundingClientRect();
    const movX = evt.clientX - rect.x;
    const movY = evt.clientY - rect.y;
    gsap.to(".button__spotlight", { x: movX, y: movY, scale: 22, duration: 0.4,delay:.1 });
  });
  
  button.addEventListener('mouseleave', function(evt) {
    const rect = this.getBoundingClientRect();
    const movX = evt.clientX - rect.x;
    const movY = evt.clientY - rect.y;
    gsap.to(".button__spotlight", { x: movX, y: movY, scale: 0, duration: 0.4,delay:.1 });
  });
  
  button2.addEventListener('mousemove', function(evt) {
    const rect = this.getBoundingClientRect();
    const movX = evt.clientX - rect.x;
    const movY = evt.clientY - rect.y;
    gsap.to(".button__spotlight2", { x: movX, y: movY, scale: 22, duration: 0.4,delay:.1 });
  });
  
  button2.addEventListener('mouseleave', function(evt) {
    const rect = this.getBoundingClientRect();
    const movX = evt.clientX - rect.x;
    const movY = evt.clientY - rect.y;
    gsap.to(".button__spotlight2", { x: movX, y: movY, scale: 0, duration: 0.4,delay:.1 });
  });

  gsap.fromTo(".ft__span1",{top:"calc(var(--index)*3.33)"},{top:"calc(var(--index)*0)",duration:.4,scrollTrigger: {trigger: "footer", start: "top 500vh"}});
  gsap.fromTo(".ft__span2",{top:"calc(var(--index)*3.33)"},{top:"calc(var(--index)*0)",duration:.4,delay:.1,scrollTrigger: {trigger: "footer", start: "top 500vh"}});

  const free_divs = document.querySelectorAll('.free_div');

  free_divs.forEach(free_div => {
    const followCursor = ({ clientX, clientY }) => {
      const { left, top, width, height } = free_div.getBoundingClientRect();
      const scale = 0.5;
      gsap.to(free_div, {
        x: (clientX - left - width / 2) * scale,
        y: (clientY - top - height / 2) * scale,
        duration: 0.45,
        ease: 'power2.out'
      });
    };
  
    free_div.addEventListener('mouseenter', () => {
      document.addEventListener('mousemove', followCursor);
    });
  
    free_div.addEventListener('mouseleave', () => {
      document.removeEventListener('mousemove', followCursor);
      gsap.to(free_div, { x: 0, y: 0, duration: 0.6, ease: 'power2.out' });
    });
  });
  