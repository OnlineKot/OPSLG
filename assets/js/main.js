(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // RODO / cookies consent banner
  var CONSENT_KEY = "osl_cookie_consent";
  var banner = document.querySelector("[data-cookie-banner]");

  function getConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (e) {
      /* localStorage niedostępny — baner pokaże się ponownie */
    }
  }

  if (banner) {
    if (!getConsent()) {
      banner.classList.add("is-visible");
    }
    var acceptBtn = banner.querySelector("[data-cookie-accept]");
    var rejectBtn = banner.querySelector("[data-cookie-reject]");
    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        setConsent("accepted");
        banner.classList.remove("is-visible");
      });
    }
    if (rejectBtn) {
      rejectBtn.addEventListener("click", function () {
        setConsent("rejected");
        banner.classList.remove("is-visible");
      });
    }
  }

  // Contact / membership form: front-end guard so a consent checkbox
  // must be checked before the form can be submitted (server-side
  // validation of consent is still required — this is only a UX aid).
  var forms = document.querySelectorAll("[data-requires-consent]");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      var consentInput = form.querySelector("[data-consent-required]");
      if (consentInput && !consentInput.checked) {
        event.preventDefault();
        consentInput.focus();
        var msg = form.querySelector("[data-consent-error]");
        if (msg) msg.hidden = false;
      }
    });
  });
})();
