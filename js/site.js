/* Evergreen Co — public site */
(function () {
  "use strict";

  function $(id) { return document.getElementById(id); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function bindHeader() {
    var header = $("siteHeader");
    function updateSticky() {
      var sticky = $("stickyCta");
      if (!sticky) return;
      sticky.classList.toggle("on", window.scrollY > window.innerHeight * 0.7);
    }
    var onScroll = function () {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
      updateSticky();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function bindSwitchers() {
    var buttons = qsa("[data-faq-cat]");
    if (!buttons.length) return;
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-faq-cat");
        var already = btn.classList.contains("on");
        buttons.forEach(function (b) {
          var on = !already && b === btn;
          b.classList.toggle("on", on);
          b.setAttribute("aria-expanded", on ? "true" : "false");
        });
        qsa(".faq-group").forEach(function (p) {
          var show = !already && p.getAttribute("data-faq-group") === id;
          p.classList.toggle("on", show);
          if (show) p.removeAttribute("hidden");
          else p.setAttribute("hidden", "");
          qsa("details", p).forEach(function (d) { d.open = false; });
        });
      });
    });
  }

  function bindFaq() {
    qsa(".faq-group").forEach(function (group) {
      qsa("details", group).forEach(function (d) {
        d.addEventListener("toggle", function () {
          if (!d.open) return;
          qsa("details", group).forEach(function (other) {
            if (other !== d) other.open = false;
          });
        });
      });
    });
  }

  function bindCarousels() {
    qsa("[data-carousel]").forEach(function (root) {
      var track = root.querySelector(".carousel-track");
      var slides = root.querySelectorAll(".carousel-slide");
      var dotsWrap = root.querySelector(".carousel-dots");
      var label = root.querySelector("[data-carousel-label]");
      var prev = root.querySelector("[data-carousel-prev]");
      var next = root.querySelector("[data-carousel-next]");
      if (!track || slides.length < 2) return;
      var n = slides.length;
      var i = 0;
      var startX = 0;
      var dragging = false;

      function pad(num) {
        return (num < 10 ? "0" : "") + num;
      }

      if (dotsWrap) {
        dotsWrap.innerHTML = "";
        for (var d = 0; d < n; d++) {
          var dot = document.createElement("button");
          dot.type = "button";
          dot.className = "carousel-dot" + (d === 0 ? " on" : "");
          dot.setAttribute("aria-label", "Slide " + (d + 1));
          dot.setAttribute("data-i", String(d));
          dotsWrap.appendChild(dot);
        }
      }

      function go(to) {
        i = (to + n) % n;
        track.style.transform = "translateX(" + (-i * 100) + "%)";
        slides.forEach(function (s, idx) {
          s.classList.toggle("is-active", idx === i);
        });
        if (dotsWrap) {
          qsa(".carousel-dot", dotsWrap).forEach(function (dot, idx) {
            dot.classList.toggle("on", idx === i);
          });
        }
        if (label) label.textContent = pad(i + 1) + " / " + pad(n);
      }

      if (prev) prev.addEventListener("click", function (e) { e.stopPropagation(); go(i - 1); });
      if (next) next.addEventListener("click", function (e) { e.stopPropagation(); go(i + 1); });
      if (dotsWrap) {
        dotsWrap.addEventListener("click", function (e) {
          var dot = e.target.closest("[data-i]");
          if (dot) {
            e.stopPropagation();
            go(parseInt(dot.getAttribute("data-i"), 10));
          }
        });
      }

      var viewport = root.querySelector(".carousel-viewport");
      if (viewport) {
        var moved = false;
        viewport.addEventListener("pointerdown", function (e) {
          if (e.target.closest("button, a")) {
            dragging = false;
            moved = false;
            return;
          }
          dragging = true;
          moved = false;
          startX = e.clientX;
        });
        viewport.addEventListener("pointerup", function (e) {
          if (!dragging) return;
          dragging = false;
          var dx = e.clientX - startX;
          if (dx > 40) { moved = true; go(i - 1); }
          else if (dx < -40) { moved = true; go(i + 1); }
        });
        viewport.addEventListener("pointerleave", function () { dragging = false; });
        viewport.addEventListener("click", function (e) {
          if (moved) { moved = false; return; }
          if (e.target.closest("button, a")) return;
          go(i === 0 ? 1 : 0);
        });
      }

      go(0);
    });
  }

  function bindReveal() {
    var nodes = qsa(".reveal");
    if (!nodes.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach(function (n) { n.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  bindHeader();
  bindSwitchers();
  bindFaq();
  bindCarousels();
  bindReveal();
})();
