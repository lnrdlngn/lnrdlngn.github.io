document.addEventListener('DOMContentLoaded', () => {
  // Testimonial slider
  const testimonials = document.querySelectorAll('.testimonial');
  let index = 0;

  function showTestimonial(i) {
    testimonials.forEach((t, idx) => {
      t.classList.toggle('active', idx === i);
    });
  }

  function nextTestimonial() {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }

  setInterval(nextTestimonial, 5000);
  showTestimonial(index);

  // Pricing toggle
  const toggle = document.getElementById('billing-toggle');
  const amounts = document.querySelectorAll('.pricing-card .amount');

  toggle.addEventListener('change', () => {
    const yearly = toggle.checked;
    amounts.forEach((el) => {
      el.textContent = yearly ? el.dataset.yearly : el.dataset.monthly;
    });
  });
});
