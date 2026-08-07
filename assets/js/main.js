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

  // Wewnętrzny czat dla pracowników biura — ukryta zakładka przy dolnej
  // krawędzi strony. To wyłącznie makieta front-endowa do celów
  // demonstracyjnych: wiadomości trzymane są lokalnie w przeglądarce
  // (sessionStorage) i nie są nigdzie wysyłane. Prawdziwy czat
  // wymagałby backendu / zewnętrznej usługi (patrz README).
  var staffToggle = document.querySelector("[data-staff-chat-toggle]");
  var staffPanel = document.querySelector("[data-staff-chat-panel]");
  if (staffToggle && staffPanel) {
    var staffLog = staffPanel.querySelector("[data-staff-chat-log]");
    var staffForm = staffPanel.querySelector("[data-staff-chat-form]");
    var staffInput = staffPanel.querySelector("[data-staff-chat-input]");
    var STAFF_KEY = "osl_staff_chat_demo";

    var seedMessages = [
      { author: "Biuro Zarządu", time: "09:12", text: "Dzień dobry! Przypominam o dzisiejszym spotkaniu Zarządu o 14:00." },
      { author: "Dział szkoleń", time: "09:20", text: "Lista uczestników konferencji wrześniowej zamknięta na 320 osób." },
      { author: "Ty", time: "09:24", text: "Dzięki, wysyłam potwierdzenia do prelegentów jeszcze dziś." }
    ];

    function loadMessages() {
      try {
        var raw = sessionStorage.getItem(STAFF_KEY);
        return raw ? JSON.parse(raw) : seedMessages.slice();
      } catch (e) {
        return seedMessages.slice();
      }
    }

    function saveMessages(list) {
      try {
        sessionStorage.setItem(STAFF_KEY, JSON.stringify(list));
      } catch (e) {
        /* sessionStorage niedostępny — wiadomości nie zostaną zapamiętane */
      }
    }

    function renderMessages(list) {
      staffLog.innerHTML = "";
      list.forEach(function (msg) {
        var row = document.createElement("div");
        row.className = "staff-chat__msg" + (msg.author === "Ty" ? " staff-chat__msg--me" : "");
        var meta = document.createElement("div");
        meta.className = "staff-chat__meta";
        meta.textContent = msg.author + " · " + msg.time;
        var bubble = document.createElement("div");
        bubble.className = "staff-chat__bubble";
        bubble.textContent = msg.text;
        row.appendChild(meta);
        row.appendChild(bubble);
        staffLog.appendChild(row);
      });
      staffLog.scrollTop = staffLog.scrollHeight;
    }

    var messages = loadMessages();
    renderMessages(messages);

    staffToggle.addEventListener("click", function () {
      var isOpen = staffPanel.classList.toggle("is-open");
      staffToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (isOpen && staffInput) staffInput.focus();
    });

    if (staffForm) {
      staffForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var text = (staffInput.value || "").trim();
        if (!text) return;
        var now = new Date();
        var hh = String(now.getHours()).padStart(2, "0");
        var mm = String(now.getMinutes()).padStart(2, "0");
        messages.push({ author: "Ty", time: hh + ":" + mm, text: text });
        saveMessages(messages);
        renderMessages(messages);
        staffInput.value = "";
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
