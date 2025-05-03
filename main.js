// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  

  /* Implementing Counter */

  const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});


/* Testimonials */
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

document.getElementById('next').addEventListener('click', () => {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  testimonials[currentTestimonial].classList.add('active');
});
