
// Minimal JS for form submission and small interactions
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // Simple UX: show a thank you and reset
    alert('Thanks! Your message was submitted. (Demo only)');
    form.reset();
  });

  // simple lazy load images (demo)
  document.querySelectorAll('img').forEach(img=>{
    if(!img.src) return;
  });
});
