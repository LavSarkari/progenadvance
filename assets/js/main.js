/**
 * ProGen Advance Insilico Solutions LLP
 * Main Interactive Script — Vanilla ES6+
 * No external dependencies required.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  setActiveNavLink();
  initScrollAnimations();
  initContactForm();
  initCopyButtons();
  initFigureModal();
});

/* --- Header Scroll Effect --- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --- Mobile Navigation Drawer --- */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  const toggleNav = (open) => {
    const isOpen = open !== undefined ? open : !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen.toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => toggleNav());

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      toggleNav(false);
      toggle.focus();
    }
  });

  // Close when clicking outside or clicking a nav link
  nav.querySelectorAll('.nav-link, .btn').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        toggleNav(false);
      }
    });
  });
}

/* --- Set Active Navigation Link based on current pathname --- */
function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkFile = href.split('/').pop();
    
    // Check match for root or specific filename
    if (linkFile === currentPath || (currentPath === '' && linkFile === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/* --- Subtle Scroll Reveal (Respects prefers-reduced-motion) --- */
function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const animElements = document.querySelectorAll('.card, .research-card, .pipeline-step, .principle-item');
  if (!animElements.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  });

  animElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    observer.observe(el);
  });
}

/* --- Contact Form Handling with Honest State Reporting --- */
function initContactForm() {
  const form = document.getElementById('consultation-form');
  const banner = document.getElementById('form-status-banner');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Basic client-side validation
    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const orgInput = form.querySelector('[name="organization"]');
    const projectInput = form.querySelector('[name="project"]');
    const consentInput = form.querySelector('[name="consent"]');

    if (!nameInput?.value.trim() || !emailInput?.value.trim() || !projectInput?.value.trim()) {
      showStatusBanner('Please complete all required fields (Name, Email, and Project Description).', 'error');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showStatusBanner('Please provide a valid work email address.', 'error');
      return;
    }

    if (consentInput && !consentInput.checked) {
      showStatusBanner('Please confirm your consent for data processing under our scientific confidentiality policy.', 'error');
      return;
    }

    const actionUrl = form.getAttribute('action') || '';
    const isPlaceholder = !actionUrl || actionUrl.includes('YOUR_FORM_ID') || actionUrl.includes('example.com') || actionUrl === '#' || actionUrl === '';

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : 'Send Inquiry';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Processing...';
    }

    if (isPlaceholder) {
      // HONEST DISCLOSURE: Form endpoint is not yet connected
      setTimeout(() => {
        showStatusBanner(
          `Form endpoint is pending production configuration in your Formspree/backend account. To ensure your inquiry reaches us immediately, we have prepared a direct email link below, or you can email us directly at contact@progenadvance.com.`,
          'notice'
        );
        
        // Prepare mailto link as instant fallback
        const subject = encodeURIComponent(`In Silico Research Inquiry from ${nameInput.value.trim()} (${orgInput?.value.trim() || 'Organization'})`);
        const body = encodeURIComponent(
          `Dear ProGen Advance Team,\n\n` +
          `Name: ${nameInput.value.trim()}\n` +
          `Email: ${emailInput.value.trim()}\n` +
          `Organization: ${orgInput?.value.trim() || 'N/A'}\n` +
          `Area of Interest: ${form.querySelector('[name="interest"]')?.value || 'General'}\n\n` +
          `Project Scope:\n${projectInput.value.trim()}\n\n` +
          `Sent via progenadvance.com consultation request.`
        );
        
        window.location.href = `mailto:contact@progenadvance.com?cc=progenadvance@gmail.com&subject=${subject}&body=${body}`;

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 400);
      return;
    }

    // If configured with a real external endpoint, perform real fetch
    try {
      const formData = new FormData(form);
      const response = await fetch(actionUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        showStatusBanner('Thank you! Your research inquiry has been successfully transmitted to the ProGen scientific team. We will review your project requirements and respond within 24-48 business hours.', 'success');
        form.reset();
      } else {
        const errorData = await response.json().catch(() => ({}));
        showStatusBanner(errorData.error || 'Submission could not be completed at this time. Please email us directly at contact@progenadvance.com.', 'error');
      }
    } catch (err) {
      showStatusBanner('Network error transmitting your inquiry. Please reach out to contact@progenadvance.com directly.', 'error');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    }
  });

  function showStatusBanner(message, type) {
    if (!banner) return;
    banner.className = `form-status-banner is-active ${type}`;
    banner.innerHTML = `
      <div class="banner-content">
        <p>${message}</p>
      </div>
    `;
    banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/* --- Copy To Clipboard Button with Toast --- */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('[data-copy-text]');
  let toastTimeout = null;

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy-text');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied to clipboard: ${textToCopy}`);
      } catch (err) {
        showToast(`Email: ${textToCopy}`);
      }
    });
  });

  function showToast(msg) {
    let toast = document.querySelector('.toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('is-visible');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 3500);
  }
}

/* --- Lightweight Figure Modal for Scientific Inspection --- */
function initFigureModal() {
  const figures = document.querySelectorAll('.research-figure-img');
  if (!figures.length) return;

  let modal = document.getElementById('scientific-figure-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'scientific-figure-modal';
    modal.style.cssText = `
      position: fixed; inset: 0; background: rgba(3, 6, 15, 0.92); backdrop-filter: blur(8px);
      display: none; align-items: center; justify-content: center; z-index: 10000; padding: 20px;
    `;
    modal.innerHTML = `
      <div style="position: relative; max-width: 90vw; max-height: 90vh;">
        <button id="close-figure-modal" aria-label="Close image" style="
          position: absolute; top: -45px; right: 0; background: none; border: none; color: #fff;
          font-size: 2rem; cursor: pointer; line-height: 1; padding: 5px;
        ">&times;</button>
        <img id="modal-figure-img" src="" alt="Enlarged Scientific Figure" style="
          max-width: 100%; max-height: 85vh; object-fit: contain; border-radius: 8px;
          border: 1px solid rgba(56, 189, 248, 0.3); box-shadow: 0 10px 40px rgba(0,0,0,0.8);
        ">
        <div id="modal-figure-caption" style="
          color: #94a3b8; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;
          margin-top: 10px; text-align: center;
        "></div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = document.getElementById('close-figure-modal');
    closeBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
      }
    });
  }

  figures.forEach(fig => {
    fig.style.cursor = 'zoom-in';
    fig.title = 'Click to inspect scientific figure';
    fig.addEventListener('click', () => {
      const modalImg = document.getElementById('modal-figure-img');
      const caption = document.getElementById('modal-figure-caption');
      modalImg.src = fig.src;
      modalImg.alt = fig.alt || 'Scientific Figure';
      caption.textContent = fig.alt || 'ProGen Advance Insilico Research Figure';
      modal.style.display = 'flex';
    });
  });
}
