(function () {
  document.documentElement.classList.add("has-js");

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header shadow/border on scroll
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add("isScrolled");
    else header.classList.remove("isScrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileNav = document.getElementById("mobileNav");

  function setMobile(open) {
    if (!burgerBtn || !mobileNav) return;
    burgerBtn.setAttribute("aria-expanded", String(open));
    mobileNav.classList.toggle("isOpen", open);
    mobileNav.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (burgerBtn && mobileNav) {
    burgerBtn.addEventListener("click", () => {
      const open = burgerBtn.getAttribute("aria-expanded") !== "true";
      setMobile(open);
    });

    // Close menu after clicking a link
    mobileNav.addEventListener("click", (e) => {
      const t = e.target;
      if (t && t.matches && t.matches("a")) setMobile(false);
    });

    // Escape closes
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMobile(false);
    });
  }

  // FAQ accordion
  const accordions = document.querySelectorAll("[data-accordion]");
  accordions.forEach((acc) => {
    const questions = acc.querySelectorAll(".faq__q");
    questions.forEach((btn) => {
      btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        // Close others
        questions.forEach((q) => q.setAttribute("aria-expanded", "false"));
        btn.setAttribute("aria-expanded", String(!isOpen));
      });
    });
  });

  // About section reveal sequence (per element on scroll)
  const aboutRevealItems = document.querySelectorAll(".aboutSnap [data-about-reveal]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (aboutRevealItems.length) {
    const revealItem = (el) => el.classList.add("isVisible");

    if (prefersReducedMotion) {
      aboutRevealItems.forEach(revealItem);
    } else if ("IntersectionObserver" in window) {
      const aboutObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            revealItem(entry.target);
            aboutObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
      );
      aboutRevealItems.forEach((item) => aboutObserver.observe(item));
    } else {
      aboutRevealItems.forEach(revealItem);
    }
  }

  // Why section reveal
  const whyCards = document.querySelectorAll("#why .cards .card");
  const whyCardsWrap = document.querySelector("#why .cards");
  const desktopWhySequence = window.matchMedia("(min-width: 981px)").matches;

  if (whyCards.length) {
    whyCards.forEach((card, index) => {
      card.style.setProperty("--why-delay", `${index * 350}ms`);
    });

    const revealWhyCard = (card) => card.classList.add("isVisible");

    if (prefersReducedMotion) {
      whyCards.forEach(revealWhyCard);
    } else if ("IntersectionObserver" in window) {
      if (desktopWhySequence && whyCardsWrap) {
        const whySequenceObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              whyCards.forEach((card, index) => {
                window.setTimeout(() => revealWhyCard(card), index * 150);
              });
              whySequenceObserver.unobserve(entry.target);
            });
          },
          { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
        );
        whySequenceObserver.observe(whyCardsWrap);
      } else {
        const whyObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              revealWhyCard(entry.target);
              whyObserver.unobserve(entry.target);
            });
          },
          { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
        );
        whyCards.forEach((card) => whyObserver.observe(card));
      }
    } else {
      whyCards.forEach(revealWhyCard);
    }
  }

  // Pricing modal (Removed based on client feedback, but leaving code here commented in case he wants to add it back in the future)
  // const pricingModal = document.getElementById("pricingModal");
  // const openPricing = document.getElementById("openPricing");

  // function setModal(open) {
  //   if (!pricingModal) return;
  //   pricingModal.classList.toggle("isOpen", open);
  //   pricingModal.setAttribute("aria-hidden", String(!open));
  //   document.body.style.overflow = open ? "hidden" : "";
  // }

  // if (openPricing && pricingModal) {
  //   openPricing.addEventListener("click", () => setModal(true));
  //   pricingModal.addEventListener("click", (e) => {
  //     const t = e.target;
  //     if (!t) return;
  //     if (t.hasAttribute("data-close")) setModal(false);
  //   });
  //   window.addEventListener("keydown", (e) => {
  //     if (e.key === "Escape") setModal(false);
  //   });
  // }

  // Lead form (front-end only)
  const leadForm = document.getElementById("leadForm");
  const leadEmail = document.getElementById("leadEmail");
  const leadMsg = document.getElementById("leadMsg");

  if (leadForm && leadEmail && leadMsg) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = String(leadEmail.value || "").trim();
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!ok) {
        leadMsg.textContent = "Please enter a valid email address.";
        return;
      }

      leadMsg.textContent = "Thanks! (Demo) Connect this form to your email tool to deliver the checklist.";
      leadForm.reset();
    });
  }

  // Contact form (front-end only)
  const contactForm = document.getElementById("contactForm");
  const contactMsg = document.getElementById("contactMsg");

  if (contactForm && contactMsg) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const goal = String(formData.get("goal") || "").trim();
      const message = String(formData.get("message") || "").trim();

      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk || !goal || !message) {
        contactMsg.textContent = "Please complete all fields with a valid email.";
        return;
      }

      // Demo behavior
      contactMsg.textContent = "Message sent (demo). Hook this to a backend or email service for production.";
      contactForm.reset();
    });
  }
})();
