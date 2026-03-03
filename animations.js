// ============================================
// BAKERY WEBSITE - GSAP ANIMATIONS
// Simple Class-Based Approach
// ============================================

// Add these scripts in your HTML <head>:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

gsap.registerPlugin(ScrollTrigger);

// ============================================
// COMMON ANIMATIONS (All Pages)
// ============================================

// Header Animations
gsap.from(".gsap-header-logo", {
  scale: 0,
  rotation: -180,
  duration: 1,
  delay: 0.3,
  ease: "back.out(1.7)"
});

gsap.from(".gsap-header-menu", {
  x: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  delay: 0.5,
  ease: "power2.out"
});

// Footer Animations
gsap.from(".gsap-footer-line", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  },
  scaleX: 0,
  opacity: 0
});

gsap.from(".gsap-footer-logo", {
  scrollTrigger: {
    trigger: ".gsap-footer-logo",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  scale: 0,
  rotation: 360,
  ease: "back.out(1.7)"
});

gsap.from(".gsap-footer-heading", {
  scrollTrigger: {
    trigger: ".gsap-footer-heading",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  },
  y: 100,
  opacity: 0,
  rotation: -5
});

gsap.from(".gsap-footer-cookie", {
  scrollTrigger: {
    trigger: ".gsap-footer-cookie",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  scaleX: 0,
  transformOrigin: "left"
});

gsap.from(".gsap-footer-social", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 0%",
    end: "top -50%",
    scrub: 2,
  },
  scale: 0,
  rotation: 720,
  duration: 0.8,
  stagger: 0.15,
  ease: "elastic.out(1, 0.5)"
});

if(window.innerWidth > 640){
  gsap.from(".gsap-footer-image", {
  scrollTrigger: {
    trigger: ".gsap-footer-image",
    start: "top 90%",
    end: "top 60%",
    scrub: 1
  },
  y: 100,
  scale: 0.8,
  opacity: 0
});
}

// Reviews Section (Common)
gsap.from(".gsap-review-heading", {
  scrollTrigger: {
    trigger: ".gsap-review-heading",
    start: "top 80%",
    end: "top 60%",
    scrub: 1
  },
  x: -100,
  opacity: 0
});

gsap.from(".gsap-review-rating", {
  scrollTrigger: {
    trigger: ".gsap-review-rating",
    start: "top 80%",
    end: "top 60%",
    scrub: 1
  },
  x: 100,
  opacity: 0
});

gsap.from(".gsap-review-card", {
  scrollTrigger: {
    trigger: ".gsap-review-card",
    start: "top 80%"
  },
  rotationY: 180,
  skewX: -10,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "back.out(1.7)"
});

// Banner Section (Common)
gsap.from(".gsap-banner-wrapper", {
  scrollTrigger: {
    trigger: ".gsap-banner-wrapper",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  },
  y: 100,
  opacity: 0
});

gsap.from(".gsap-banner-image", {
  scrollTrigger: {
    trigger: ".gsap-banner-image",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  },
  x: -100,
  scale: 0.5,
  opacity: 0
});

gsap.from(".gsap-banner-form-item", {
  scrollTrigger: {
    trigger: ".gsap-banner-form-item",
    start: "top 80%"
  },
  x: 100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out"
});

gsap.from(".gsap-banner-button", {
  scrollTrigger: {
    trigger: ".gsap-banner-button",
    start: "top 90%"
  },
  scale: 0,
  rotation: 720,
  duration: 1,
  ease: "elastic.out(1, 0.5)"
});

// Floating Animation
gsap.to(".gsap-float", {
  y: 40,
  duration: 3,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

// ============================================
// HOME PAGE ANIMATIONS
// ============================================

// Section 1
gsap.from(".gsap-home-s1-text1", {
  y: -100,
  opacity: 0
});

gsap.from(".gsap-home-s1-bakery", {

  scaleX: 0,
  transformOrigin: "left"
});

gsap.from(".gsap-home-s1-chip", {
  scrollTrigger: {
    trigger: ".gsap-home-s1-chip",
    start: "top 85%"
  },
  scale: 0,
  duration: 0.8,
  ease: "back.out(1.7)"
});

gsap.to(".gsap-home-s1-chip", {
  rotation: "+=5",
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

gsap.from(".gsap-home-s1-heading", {
  scrollTrigger: {
    trigger: ".gsap-home-s1-heading",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  x: -100,
  opacity: 0
});

gsap.from(".gsap-home-s1-chip2", {
  scrollTrigger: {
    trigger: ".gsap-home-s1-chip2",
    start: "top 85%"
  },
  scale: 0,
  duration: 0.6,
  ease: "elastic.out(1, 0.5)"
});

gsap.from(".gsap-home-s1-para", {
  scrollTrigger: {
    trigger: ".gsap-home-s1-para",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  x: 100,
  opacity: 0
});

gsap.from(".gsap-home-s1-btn", {
  scrollTrigger: {
    trigger: ".gsap-home-s1-btn",
    start: "top 90%"
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "back.out(1.7)"
});

gsap.from(".gsap-home-s1-image", {
  scrollTrigger: {
    trigger: ".gsap-home-s1-image",
    start: "top 80%",
    end: "top 40%",
    scrub: 1
  },
  scale: 0,
  opacity: 0,
  x: 100
});

// Section 2
gsap.from(".gsap-home-s2-left-image", {
  scrollTrigger: {
    trigger: ".gsap-home-s2-left-image",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  },
  x: -100,
  scale: 0.5,
  opacity: 0
});

gsap.from(".gsap-home-s2-heading", {
  scrollTrigger: {
    trigger: ".gsap-home-s2-heading",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  y: -50,
  opacity: 0
});

gsap.from(".gsap-home-s2-para", {
  scrollTrigger: {
    trigger: ".gsap-home-s2-para",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  x: 100,
  opacity: 0,
  stagger: 0.2
});

// Section 3
gsap.from(".gsap-home-s3-heading", {
  scrollTrigger: {
    trigger: ".gsap-home-s3-heading",
    start: "top 80%",
    end: "top 60%",
    scrub: 1
  },
  y: -80,
  opacity: 0
});

gsap.from(".gsap-home-s3-chip", {
  scrollTrigger: {
    trigger: ".gsap-home-s3-chip",
    start: "top 80%",
    scrub: 3,
  },
  x: -150,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "elastic.out(1, 0.8)"
});

gsap.from(".gsap-home-s3-image", {
  scrollTrigger: {
    trigger: ".gsap-home-s3-image",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  },
  scale: 0,
  opacity: 0,
  rotation: 360
});

// Section 4
gsap.from(".gsap-home-s4-card", {
  scrollTrigger: {
    trigger: ".gsap-home-s4-card",
    start: "top 80%"
  },
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  ease: "bounce.out"
});

// ============================================
// ABOUT PAGE ANIMATIONS
// ============================================

gsap.from(".gsap-about-s1-heading", {
  y: -80,
  opacity: 0
});

gsap.from(".gsap-about-s1-para", {
  x: -100,
  opacity: 0
});

gsap.from(".gsap-about-s1-btn", {
  scrollTrigger: {
    trigger: ".gsap-about-s1-btn",
    start: "top 90%"
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "back.out(1.7)"
});

gsap.from(".gsap-about-s1-image", {
  scrollTrigger: {
    trigger: ".gsap-about-s1-image",
    start: "top 80%",
    end: "top 40%",
    scrub: 1
  },
  x: 200,
  rotation: 720,
  scale: 0.5,
  opacity: 0
});

// Section 2
gsap.from(".gsap-about-s2-image", {
  scrollTrigger: {
    trigger: ".gsap-about-s2-image",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  },
  x: -80,
  scale: 0,
  opacity: 0
});

gsap.from(".gsap-about-s2-heading", {
  scrollTrigger: {
    trigger: ".gsap-about-s2-heading",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  y: -60,
  opacity: 0
});

gsap.from(".gsap-about-s2-para", {
  scrollTrigger: {
    trigger: ".gsap-about-s2-para",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  x: 100,
  opacity: 0,
  stagger: 0.2
});

gsap.to(".gsap-about-s2-chip", {
  rotation: "+=8",
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

// Section 3
gsap.from(".gsap-about-s3-image", {
  scrollTrigger: {
    trigger: ".speacialSection2",
    start: "top 50%",
    end: "top 30%",
    scrub: 1,
  },
  y: 100,
  scale: 0,
  opacity: 0
});

gsap.from(".gsap-about-s3-heading", {
  scrollTrigger: {
    trigger: ".gsap-about-s3-heading",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  y: -60,
  opacity: 0
});

gsap.from(".gsap-about-s3-para", {
  scrollTrigger: {
    trigger: ".gsap-about-s3-para",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  x: 100,
  opacity: 0,
  stagger: 0.2
});

// ============================================
// GUATEMALAN PASTRIES PAGE
// ============================================

gsap.from(".gsap-pastry-s1-heading", {
  y: -80,
  opacity: 0
});

gsap.from(".gsap-pastry-s1-para", {

  x: -100,
  opacity: 0
});

gsap.from(".gsap-pastry-s1-btn", {
  scrollTrigger: {
    trigger: ".gsap-pastry-s1-btn",
    start: "top 90%"
  },
  y: 50,
  opacity: 0,
  duration: 0.8
});

gsap.from(".gsap-pastry-s1-image", {
  scrollTrigger: {
    trigger: ".gsap-pastry-s1-image",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  },
  scale: 0,
  opacity: 0
});

// Section 2
gsap.from(".gsap-pastry-s2-left-image", {
  scrollTrigger: {
    trigger: ".gsap-pastry-s2-left-image",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  },
  scale: 0,
  opacity: 0
});

gsap.from(".gsap-pastry-s2-text", {
  scrollTrigger: {
    trigger: ".gsap-pastry-s2-text",
    start: "top 75%",
    end: "top 50%",
    scrub: 1
  },
  y: -50,
  opacity: 0
});

gsap.from(".gsap-pastry-s2-bullet", {
  scrollTrigger: {
    trigger: ".gsap-pastry-s2-bullet",
    start: "top 80%"
  },
  x: -100,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  ease: "back.out(1.2)"
});

gsap.from(".gsap-pastry-s2-para", {
  scrollTrigger: {
    trigger: ".gsap-pastry-s2-para",
    start: "top 85%",
    end: "top 65%",
    scrub: 1
  },
  y: 50,
  opacity: 0
});

// ============================================
// GUATEMALAN BREAD PAGE
// ============================================

gsap.from(".gsap-bread-s1-heading", {
  y: -80,
  opacity: 0
});

gsap.from(".gsap-bread-s1-para", {
  x: -100,
  opacity: 0
});

gsap.from(".gsap-bread-s1-btn", {
  scrollTrigger: {
    trigger: ".gsap-bread-s1-btn",
    start: "top 90%"
  },
  y: 50,
  opacity: 0,
  duration: 0.8
});

gsap.from(".gsap-bread-s1-image", {
  scrollTrigger: {
    trigger: ".sectionSpeacilty",
    start: "top 30%",
    end: "top 0%",
    scrub: 1
  },
  scale: 0.3,
  opacity: 0,
  x: 200,
  y: -150
});

// Section 2
gsap.from(".gsap-bread-s2-image", {
  scrollTrigger: {
    trigger: ".gsap-bread-s2-image",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  },
  scale: 0,
  opacity: 0
});

gsap.from(".gsap-bread-s2-heading", {
  scrollTrigger: {
    trigger: ".gsap-bread-s2-heading",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  y: -60,
  opacity: 0
});

gsap.from(".gsap-bread-s2-para", {
  scrollTrigger: {
    trigger: ".gsap-bread-s2-para",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  x: 100,
  opacity: 0
});

gsap.from(".gsap-bread-s2-btn", {
  scrollTrigger: {
    trigger: ".gsap-bread-s2-btn",
    start: "top 90%"
  },
  y: 50,
  opacity: 0,
  duration: 0.8
});

gsap.to(".gsap-bread-s2-chip", {
  rotation: "+=8",
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

// Section 3
gsap.from(".gsap-bread-s3-image", {
  scrollTrigger: {
    trigger: ".gsap-bread-s3-image",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  },
  scale: 0,
  opacity: 0
});

gsap.from(".gsap-bread-s3-heading", {
  scrollTrigger: {
    trigger: ".gsap-bread-s3-heading",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  y: -60,
  opacity: 0
});

gsap.from(".gsap-bread-s3-para", {
  scrollTrigger: {
    trigger: ".gsap-bread-s3-para",
    start: "top 85%",
    end: "top 60%",
    scrub: 1
  },
  x: -100,
  opacity: 0
});

gsap.to(".gsap-bread-s3-chip", {
  rotation: "-=8",
  duration: 2,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

// ============================================
// GALLERY PAGE
// ============================================

gsap.from(".gsap-gallery-s1-heading", {
  y: -80,
  opacity: 0
});

gsap.from(".gsap-gallery-s1-para", {
  x: -100,
  opacity: 0
});

gsap.from(".gsap-gallery-s1-btn", {
  scrollTrigger: {
    trigger: ".gsap-gallery-s1-btn",
    start: "top 90%"
  },
  y: 50,
  opacity: 0,
  duration: 0.8
});

gsap.from(".gsap-gallery-s1-image", {
  scrollTrigger: {
    trigger: ".gsap-gallery-s1-image",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  },
  y: 100,
  scale: 0.7,
  opacity: 0
});

gsap.from(".gsap-gallery-s2-heading", {
  scrollTrigger: {
    trigger: ".gsap-gallery-s2-heading",
    start: "top 80%",
    end: "top 60%",
    scrub: 1
  },
  y: 50,
  opacity: 0
});

gsap.from(".gsap-gallery-s2-section", {
  scrollTrigger: {
    trigger: ".gsap-gallery-s2-section",
    start: "top 80%"
  },
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// ============================================
// CONTACT PAGE
// ============================================

gsap.from(".gsap-contact-s1-heading", {
  scrollTrigger: {
    trigger: ".gsap-contact-s1-heading",
    start: "top 80%",
    end: "top 50%",
    scrub: 1
  },
  x: -150,
  opacity: 0
});

gsap.from(".gsap-contact-s1-item", {
  scrollTrigger: {
    trigger: ".gsap-contact-s1-item",
    start: "top 80%"
  },
  x: -100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out"
});

gsap.from(".gsap-contact-form-item", {
  scrollTrigger: {
    trigger: ".gsap-contact-form-item",
    start: "top 80%"
  },
  x: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
  ease: "power2.out"
});

gsap.from(".gsap-contact-form-btn", {
  scrollTrigger: {
    trigger: ".gsap-contact-form-btn",
    start: "top 90%"
  },
  scale: 0,
  rotation: 360,
  duration: 1,
  ease: "elastic.out(1, 0.5)"
});

// ============================================
// REFRESH ON RESIZE
// ============================================
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});