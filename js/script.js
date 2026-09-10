// Basic interactive behaviors: reveal on scroll, smooth nav, mobile toggle
document.addEventListener('DOMContentLoaded', ()=>{
  // Smooth scroll for nav links
  document.querySelectorAll('.site-nav a, .btn.primary, .btn.outline').forEach(el=>{
    el.addEventListener('click', e=>{
      const href = el.getAttribute('href');
      if(href && href.startsWith('#')){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  })

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  toggle && toggle.addEventListener('click', ()=>{
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.style.display = expanded ? '' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '0.6rem';
    nav.style.padding = '0.8rem';
    nav.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))';
    nav.style.borderRadius = '10px';
  })

  // Reveal on scroll (IntersectionObserver)
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('active');
        // keep once revealed
        observer.unobserve(entry.target);
      }
    })
  },{threshold:0.12});

  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  // Tiny hover tilt for project cards
  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${ -y * 4 }deg) rotateY(${ x * 6 }deg) translateY(-8px)`;
    })
    card.addEventListener('mouseleave', ()=>{
      card.style.transform = '';
    })
  })
})
