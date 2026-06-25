// Country List Data (ISO Codes, Flags, Names, and Dial Codes)
const countries = [
  { name: "Afghanistan", code: "AF", dial: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "AL", dial: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "DZ", dial: "+213", flag: "🇩🇿" },
  { name: "Andorra", code: "AD", dial: "+376", flag: "🇦🇩" },
  { name: "Angola", code: "AO", dial: "+244", flag: "🇦🇴" },
  { name: "Argentina", code: "AR", dial: "+54", flag: "🇦🇷" },
  { name: "Armenia", code: "AM", dial: "+374", flag: "🇦🇲" },
  { name: "Australia", code: "AU", dial: "+61", flag: "🇦🇺" },
  { name: "Austria", code: "AT", dial: "+43", flag: "🇦🇹" },
  { name: "Azerbaijan", code: "AZ", dial: "+994", flag: "🇦🇿" },
  { name: "Bahrain", code: "BH", dial: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", code: "BD", dial: "+880", flag: "🇧🇩" },
  { name: "Belarus", code: "BY", dial: "+375", flag: "🇧🇾" },
  { name: "Belgium", code: "BE", dial: "+32", flag: "🇧🇪" },
  { name: "Bolivia", code: "BO", dial: "+591", flag: "🇧🇴" },
  { name: "Bosnia & Herzegovina", code: "BA", dial: "+387", flag: "🇧🇦" },
  { name: "Brazil", code: "BR", dial: "+55", flag: "🇧🇷" },
  { name: "Brunei", code: "BN", dial: "+673", flag: "🇧🇳" },
  { name: "Bulgaria", code: "BG", dial: "+359", flag: "🇧🇬" },
  { name: "Cambodia", code: "KH", dial: "+855", flag: "🇰🇭" },
  { name: "Cameroon", code: "CM", dial: "+237", flag: "🇨🇲" },
  { name: "Canada", code: "CA", dial: "+1", flag: "🇨🇦" },
  { name: "Chile", code: "CL", dial: "+56", flag: "🇨🇱" },
  { name: "China", code: "CN", dial: "+86", flag: "🇨🇳" },
  { name: "Colombia", code: "CO", dial: "+57", flag: "🇨🇴" },
  { name: "Costa Rica", code: "CR", dial: "+506", flag: "🇨🇷" },
  { name: "Croatia", code: "HR", dial: "+385", flag: "🇭🇷" },
  { name: "Cyprus", code: "CY", dial: "+357", flag: "🇨🇾" },
  { name: "Czech Republic", code: "CZ", dial: "+420", flag: "🇨🇿" },
  { name: "Denmark", code: "DK", dial: "+45", flag: "🇩🇰" },
  { name: "Dominican Republic", code: "DO", dial: "+1", flag: "🇩🇴" },
  { name: "Ecuador", code: "EC", dial: "+593", flag: "🇪🇨" },
  { name: "Egypt", code: "EG", dial: "+20", flag: "🇪🇬" },
  { name: "El Salvador", code: "SV", dial: "+503", flag: "🇸🇻" },
  { name: "Estonia", code: "EE", dial: "+372", flag: "🇪🇪" },
  { name: "Ethiopia", code: "ET", dial: "+251", flag: "🇪🇹" },
  { name: "Finland", code: "FI", dial: "+358", flag: "🇫🇮" },
  { name: "France", code: "FR", dial: "+33", flag: "🇫🇷" },
  { name: "Georgia", code: "GE", dial: "+995", flag: "🇬🇪" },
  { name: "Germany", code: "DE", dial: "+49", flag: "🇩🇪" },
  { name: "Ghana", code: "GH", dial: "+233", flag: "🇬🇭" },
  { name: "Greece", code: "GR", dial: "+30", flag: "🇬🇷" },
  { name: "Guatemala", code: "GT", dial: "+502", flag: "🇬🇹" },
  { name: "Honduras", code: "HN", dial: "+504", flag: "🇭🇳" },
  { name: "Hong Kong", code: "HK", dial: "+852", flag: "🇭🇰" },
  { name: "Hungary", code: "HU", dial: "+36", flag: "🇭🇺" },
  { name: "Iceland", code: "IS", dial: "+354", flag: "🇮🇸" },
  { name: "India", code: "IN", dial: "+91", flag: "🇮🇳" },
  { name: "Indonesia", code: "ID", dial: "+62", flag: "🇮🇩" },
  { name: "Iran", code: "IR", dial: "+98", flag: "🇮🇷" },
  { name: "Iraq", code: "IQ", dial: "+964", flag: "🇮🇶" },
  { name: "Ireland", code: "IE", dial: "+353", flag: "🇮🇪" },
  { name: "Israel", code: "IL", dial: "+972", flag: "🇮🇱" },
  { name: "Italy", code: "IT", dial: "+39", flag: "🇮🇹" },
  { name: "Jamaica", code: "JM", dial: "+1", flag: "🇯🇲" },
  { name: "Japan", code: "JP", dial: "+81", flag: "🇯🇵" },
  { name: "Jordan", code: "JO", dial: "+962", flag: "🇯🇴" },
  { name: "Kazakhstan", code: "KZ", dial: "+7", flag: "🇰🇿" },
  { name: "Kenya", code: "KE", dial: "+254", flag: "🇰🇪" },
  { name: "Kuwait", code: "KW", dial: "+965", flag: "🇰🇼" },
  { name: "Latvia", code: "LV", dial: "+371", flag: "🇱🇻" },
  { name: "Lebanon", code: "LB", dial: "+961", flag: "🇱🇧" },
  { name: "Libya", code: "LY", dial: "+218", flag: "🇱🇾" },
  { name: "Lithuania", code: "LT", dial: "+370", flag: "🇱🇹" },
  { name: "Luxembourg", code: "LU", dial: "+352", flag: "🇱🇺" },
  { name: "Macau", code: "MO", dial: "+853", flag: "🇲🇴" },
  { name: "Malaysia", code: "MY", dial: "+60", flag: "🇲🇾" },
  { name: "Maldives", code: "MV", dial: "+960", flag: "🇲🇻" },
  { name: "Malta", code: "MT", dial: "+356", flag: "🇲🇹" },
  { name: "Mexico", code: "MX", dial: "+52", flag: "🇲🇽" },
  { name: "Moldova", code: "MD", dial: "+373", flag: "🇲🇩" },
  { name: "Monaco", code: "MC", dial: "+377", flag: "🇲🇨" },
  { name: "Mongolia", code: "MN", dial: "+976", flag: "🇲🇳" },
  { name: "Montenegro", code: "ME", dial: "+382", flag: "🇲🇪" },
  { name: "Morocco", code: "MA", dial: "+212", flag: "🇲🇦" },
  { name: "Myanmar", code: "MM", dial: "+95", flag: "🇲🇲" },
  { name: "Nepal", code: "NP", dial: "+977", flag: "🇳🇵" },
  { name: "Netherlands", code: "NL", dial: "+31", flag: "🇳🇱" },
  { name: "New Zealand", code: "NZ", dial: "+64", flag: "🇳🇿" },
  { name: "Nicaragua", code: "NI", dial: "+505", flag: "🇳🇮" },
  { name: "Nigeria", code: "NG", dial: "+234", flag: "🇳🇬" },
  { name: "Norway", code: "NO", dial: "+47", flag: "🇳🇴" },
  { name: "Oman", code: "OM", dial: "+968", flag: "🇴🇲" },
  { name: "Pakistan", code: "PK", dial: "+92", flag: "🇵🇰" },
  { name: "Panama", code: "PA", dial: "+507", flag: "🇵🇦" },
  { name: "Paraguay", code: "PY", dial: "+595", flag: "🇵🇾" },
  { name: "Peru", code: "PE", dial: "+51", flag: "🇵🇪" },
  { name: "Philippines", code: "PH", dial: "+63", flag: "🇵🇭" },
  { name: "Poland", code: "PL", dial: "+48", flag: "🇵🇱" },
  { name: "Portugal", code: "PT", dial: "+351", flag: "🇵🇹" },
  { name: "Qatar", code: "QA", dial: "+974", flag: "🇶🇦" },
  { name: "Romania", code: "RO", dial: "+40", flag: "🇷🇴" },
  { name: "Russia", code: "RU", dial: "+7", flag: "🇷🇺" },
  { name: "Saudi Arabia", code: "SA", dial: "+966", flag: "🇸🇦" },
  { name: "Serbia", code: "RS", dial: "+381", flag: "🇷🇸" },
  { name: "Singapore", code: "SG", dial: "+65", flag: "🇸🇬" },
  { name: "Slovakia", code: "SK", dial: "+421", flag: "🇸🇰" },
  { name: "Slovenia", code: "SI", dial: "+386", flag: "🇸🇮" },
  { name: "South Africa", code: "ZA", dial: "+27", flag: "🇿🇦" },
  { name: "South Korea", code: "KR", dial: "+82", flag: "🇰🇷" },
  { name: "Spain", code: "ES", dial: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "LK", dial: "+94", flag: "🇱🇰" },
  { name: "Sweden", code: "SE", dial: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "CH", dial: "+41", flag: "🇨🇭" },
  { name: "Taiwan", code: "TW", dial: "+886", flag: "🇹🇼" },
  { name: "Thailand", code: "TH", dial: "+66", flag: "🇹🇭" },
  { name: "Tunisia", code: "TN", dial: "+216", flag: "🇹🇳" },
  { name: "Turkey", code: "TR", dial: "+90", flag: "🇹🇷" },
  { name: "Ukraine", code: "UA", dial: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "AE", dial: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "GB", dial: "+44", flag: "🇬🇧" },
  { name: "United States", code: "US", dial: "+1", flag: "🇺🇸" },
  { name: "Uruguay", code: "UY", dial: "+598", flag: "🇺🇾" },
  { name: "Uzbekistan", code: "UZ", dial: "+998", flag: "🇺🇿" },
  { name: "Venezuela", code: "VE", dial: "+58", flag: "🇻🇪" },
  { name: "Vietnam", code: "VN", dial: "+84", flag: "🇻🇳" },
  { name: "Yemen", code: "YE", dial: "+967", flag: "🇾🇪" },
  { name: "Zimbabwe", code: "ZW", dial: "+263", flag: "🇿🇼" }
];

// App State Variables
let currentCountry = countries.find(c => c.code === "IN") || countries[0];
let qrInstance = null;

// DOM Elements
const htmlEl = document.documentElement;
const themeToggleBtn = document.getElementById("theme-toggle");
const chatForm = document.getElementById("chat-form");
const phoneInput = document.getElementById("phone-input");
const countrySelectBtn = document.getElementById("country-select-btn");
const selectedFlag = document.getElementById("selected-country-flag");
const selectedCode = document.getElementById("selected-country-code");
const countryDropdown = document.getElementById("country-dropdown");
const countrySearchInput = document.getElementById("country-search-input");
const countryList = document.getElementById("country-list");
const validationMsg = document.getElementById("validation-msg");
const messageToggleBtn = document.getElementById("message-toggle-btn");
const messageWrapper = document.getElementById("message-wrapper");
const messageInput = document.getElementById("message-input");
const charCounter = document.getElementById("char-counter");

const copyBtn = document.getElementById("copy-btn");
const qrBtn = document.getElementById("qr-btn");
const qrCard = document.getElementById("qr-card");
const qrCloseBtn = document.getElementById("qr-close-btn");
const qrOverlay = document.getElementById("qr-overlay");
const qrContainer = document.getElementById("qr-container");
const qrLinkText = document.getElementById("qr-link-text");
const downloadQrBtn = document.getElementById("download-qr-btn");
const statsInfoBar = document.getElementById("stats-info-bar");
const historyCard = document.getElementById("history-card");

const historyEmpty = document.getElementById("history-empty");
const recentChatsList = document.getElementById("recent-chats-list");
const clearHistoryBtn = document.getElementById("clear-history-btn");
const toast = document.getElementById("toast");

/* ==========================================================================
   Initialization
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderCountryList(countries);
  initHistory();
  setupEventListeners();
  updateCountryButton();
  handleUrlParameters();
  
  // Register Service Worker for PWA with auto-update reload logic
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
      .then((reg) => {
        console.log("Service Worker registered");
        
        // If there is already a waiting service worker on load, skip waiting
        if (reg.waiting) {
          console.log("Waiting service worker found, activating...");
          reg.waiting.postMessage("skipWaiting");
        }

        // Listen for new service worker installs and skip waiting immediately
        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                console.log("New service worker installed, activating...");
                newWorker.postMessage("skipWaiting");
              }
            });
          }
        });
      })
      .catch((err) => console.log("Service Worker registration failed", err));

    // Listen for controlling service worker changing (e.g. after skipWaiting()) and reload
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!refreshing) {
        refreshing = true;
        console.log("Service worker updated, reloading page...");
        window.location.reload();
      }
    });
  }
  
  // Initialize PWA mobile installation prompts
  initPWAInstall();
  
  // Setup Privacy & Terms Modals
  setupModals();
  
  // Initialize Live Stats
  initStats();
});

/* ==========================================================================
   Theme Logic (Light / Dark)
   ========================================================================== */

function initTheme() {
  const savedTheme = localStorage.getItem("wa_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme) {
    htmlEl.setAttribute("data-theme", savedTheme);
  } else if (prefersDark) {
    htmlEl.setAttribute("data-theme", "dark");
  } else {
    htmlEl.setAttribute("data-theme", "light");
  }
}

function toggleTheme() {
  const currentTheme = htmlEl.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  htmlEl.setAttribute("data-theme", newTheme);
  localStorage.setItem("wa_theme", newTheme);
}

/* ==========================================================================
   Country Selector Logic
   ========================================================================== */

function updateCountryButton() {
  selectedFlag.textContent = currentCountry.flag;
  selectedCode.textContent = currentCountry.dial;
}

function renderCountryList(list) {
  countryList.innerHTML = "";
  
  list.forEach(country => {
    const li = document.createElement("li");
    li.className = "country-item";
    li.setAttribute("role", "option");
    li.setAttribute("data-dial", country.dial);
    
    li.innerHTML = `
      <div class="country-details">
        <span class="flag">${country.flag}</span>
        <span class="country-name">${country.name}</span>
      </div>
      <span class="dial-code-item">${country.dial}</span>
    `;
    
    li.addEventListener("click", () => {
      currentCountry = country;
      updateCountryButton();
      toggleDropdown(false);
      phoneInput.focus();
      validatePhoneNumber();
    });
    
    countryList.appendChild(li);
  });
}

function toggleDropdown(show) {
  const isExpanded = show !== undefined ? show : countryDropdown.classList.contains("hidden");
  
  if (isExpanded) {
    countryDropdown.classList.remove("hidden");
    countrySelectBtn.setAttribute("aria-expanded", "true");
    countrySearchInput.focus();
    countrySearchInput.value = "";
    renderCountryList(countries); // Reset filter
  } else {
    countryDropdown.classList.add("hidden");
    countrySelectBtn.setAttribute("aria-expanded", "false");
  }
}

// Filter countries on typing
countrySearchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  const filtered = countries.filter(country => 
    country.name.toLowerCase().includes(query) || 
    country.dial.includes(query) ||
    country.code.toLowerCase().includes(query)
  );
  renderCountryList(filtered);
});

/* ==========================================================================
   Validation & Helper Functions
   ========================================================================== */

function cleanPhoneNumber(val) {
  // Strip everything except digits
  return val.replace(/\D/g, "");
}

function detectAndExtractCountryCode(value) {
  let rawValue = value.trim();
  if (!rawValue) return null;

  let hasExplicitPrefix = false;
  let cleanValue = rawValue;

  // 1. Check for + or 00 prefix
  if (cleanValue.startsWith("+")) {
    cleanValue = cleanValue.substring(1);
    hasExplicitPrefix = true;
  } else if (cleanValue.startsWith("00")) {
    cleanValue = cleanValue.substring(2);
    hasExplicitPrefix = true;
  }

  // Remove any non-digits for parsing
  let digitsOnly = cleanValue.replace(/\D/g, "");
  if (digitsOnly.length < 6) return null; // Too short to have a valid dial code + number

  // Sort countries by dial code length descending to match longest code first
  const sortedCountries = [...countries].sort((a, b) => b.dial.length - a.dial.length);
  
  for (const country of sortedCountries) {
    const cleanDial = country.dial.replace("+", "");
    
    if (digitsOnly.startsWith(cleanDial)) {
      const expectedMinLength = cleanDial.length + 7;
      
      if (hasExplicitPrefix || digitsOnly.length >= expectedMinLength) {
        return {
          country: country,
          phoneNumber: digitsOnly.substring(cleanDial.length)
        };
      }
    }
  }

  return null;
}


function validatePhoneNumber() {
  const rawVal = phoneInput.value;
  const cleanVal = cleanPhoneNumber(rawVal);
  
  if (!rawVal.trim()) {
    validationMsg.textContent = "";
    validationMsg.className = "validation-msg";
    return false;
  }
  
  // Most international numbers are between 7 and 15 digits
  if (cleanVal.length < 6) {
    validationMsg.textContent = "Number is too short";
    validationMsg.className = "validation-msg";
    return false;
  } else if (cleanVal.length > 15) {
    validationMsg.textContent = "Number is too long";
    validationMsg.className = "validation-msg";
    return false;
  } else {
    validationMsg.textContent = "Valid phone number structure";
    validationMsg.className = "validation-msg success";
    return true;
  }
}

function getFullWhatsAppUrl() {
  const cleanNumber = cleanPhoneNumber(phoneInput.value);
  if (!cleanNumber) return "";
  
  const dialCode = cleanCountryDialCode(currentCountry.dial);
  const fullNumber = dialCode + cleanNumber;
  
  let url = `https://wa.me/${fullNumber}`;
  const msgText = messageInput.value.trim();
  
  if (msgText && !messageWrapper.classList.contains("hidden")) {
    url += `?text=${encodeURIComponent(msgText)}`;
  }
  
  return url;
}

function cleanCountryDialCode(dial) {
  return dial.replace("+", "");
}

/* ==========================================================================
   QR Code Generator
   ========================================================================== */

function generateQRCode(url) {
  // Clear previous canvas
  qrContainer.innerHTML = "";
  
  if (!url) return;
  
  const canvas = document.createElement("canvas");
  qrContainer.appendChild(canvas);
  
  // Initialize QRious
  qrInstance = new QRious({
    element: canvas,
    value: url,
    size: 180,
    background: "#ffffff",
    foreground: "#111b21", // Uses a dark color matching light/dark theme aesthetics
    level: "H" // High correction level for easy scanning
  });
  
  qrLinkText.textContent = url.replace("https://", "");
}

function downloadQRCode() {
  const canvas = qrContainer.querySelector("canvas");
  if (!canvas) return;
  
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  
  const cleanNum = cleanPhoneNumber(phoneInput.value);
  const fileName = `nosavewa-qr-${currentCountry.dial}-${cleanNum || "link"}.png`;
  
  link.download = fileName;
  link.href = image;
  link.click();
}

/* ==========================================================================
   Clipboard & Toast
   ========================================================================== */

function triggerToast(message) {
  toast.textContent = message || "Copied to clipboard!";
  toast.classList.remove("hidden");
  toast.classList.add("show");
  
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 300);
  }, 2500);
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => triggerToast("WhatsApp link copied!"))
      .catch(() => fallbackCopyToClipboard(text));
  } else {
    fallbackCopyToClipboard(text);
  }
}

function fallbackCopyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand("copy");
    triggerToast("WhatsApp link copied!");
  } catch (err) {
    triggerToast("Failed to copy link.");
  }
  document.body.removeChild(textArea);
}

/* ==========================================================================
   Chat History Management (Local Storage)
   ========================================================================== */

function getHistory() {
  const data = localStorage.getItem("wa_recent_chats");
  return data ? JSON.parse(data) : [];
}

function saveHistory(history) {
  localStorage.setItem("wa_recent_chats", JSON.stringify(history));
}

function initHistory() {
  const history = getHistory();
  renderHistory(history);
}

function addToHistory(phone, dialCode, flag) {
  let history = getHistory();
  const id = `${dialCode}${phone}`;
  
  // Check if item already exists, remove it to place on top
  history = history.filter(item => item.id !== id);
  
  // Add new item to front of array
  const newItem = {
    id: id,
    phone: phone,
    dialCode: dialCode,
    flag: flag,
    note: "",
    timestamp: Date.now()
  };
  
  history.unshift(newItem);
  
  // Limit history items to 15
  if (history.length > 15) {
    history.pop();
  }
  
  saveHistory(history);
  renderHistory(history);
}

function deleteHistoryItem(id) {
  let history = getHistory();
  history = history.filter(item => item.id !== id);
  saveHistory(history);
  renderHistory(history);
}

function updateHistoryItemNote(id, note) {
  const history = getHistory();
  const item = history.find(item => item.id === id);
  if (item) {
    item.note = note;
    saveHistory(history);
  }
}

function clearAllHistory() {
  saveHistory([]);
  renderHistory([]);
}

function formatPhoneNumberDisplay(dialCode, phone) {
  // Return formatted display string (e.g. +91 98765 43210)
  return `${dialCode} ${phone}`;
}

function renderHistory(history) {
  recentChatsList.innerHTML = "";
  
  if (history.length === 0) {
    historyEmpty.classList.remove("hidden");
    recentChatsList.classList.add("hidden");
    clearHistoryBtn.classList.add("hidden");
    return;
  }
  
  historyEmpty.classList.add("hidden");
  recentChatsList.classList.remove("hidden");
  clearHistoryBtn.classList.remove("hidden");
  
  history.forEach(item => {
    const li = document.createElement("li");
    li.className = "history-item";
    
    // Get initials or flag for avatar
    const initials = item.note ? item.note.substring(0, 2).toUpperCase() : item.flag;
    const cleanNum = cleanPhoneNumber(item.phone);
    const destinationUrl = `https://wa.me/${cleanCountryDialCode(item.dialCode)}${cleanNum}`;
    
    li.innerHTML = `
      <div class="history-item-details">
        <div class="history-avatar">${item.flag}</div>
        <div class="history-item-info">
          <div class="history-num-row">
            <span class="history-phone">${formatPhoneNumberDisplay(item.dialCode, item.phone)}</span>
          </div>
          <input type="text" class="history-note-input" value="${item.note || ''}" placeholder="Add contact name/note..." data-id="${item.id}">
        </div>
      </div>
      <div class="history-actions">
        <a href="${destinationUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn icon-btn-chat" title="Chat now" aria-label="Chat now">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </a>
        <button class="icon-btn icon-btn-delete" data-id="${item.id}" title="Remove history entry" aria-label="Remove history entry">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
    `;
    
    // Add Listener for Note input
    const noteInput = li.querySelector(".history-note-input");
    noteInput.addEventListener("input", (e) => {
      updateHistoryItemNote(item.id, e.target.value);
    });
    
    // Add Listener for delete button
    const deleteBtn = li.querySelector(".icon-btn-delete");
    deleteBtn.addEventListener("click", () => {
      deleteHistoryItem(item.id);
    });
    
    recentChatsList.appendChild(li);
  });
}

/* ==========================================================================
   Event Listeners Setup
   ========================================================================== */

function setupEventListeners() {
  // Theme Toggle
  themeToggleBtn.addEventListener("click", toggleTheme);
  
  // Country Selector Open/Close
  countrySelectBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown();
  });
  
  // Document Click (Close Dropdown when clicking outside)
  document.addEventListener("click", (e) => {
    if (!countryDropdown.classList.contains("hidden") && 
        !countrySelectBtn.contains(e.target) && 
        !countryDropdown.contains(e.target)) {
      toggleDropdown(false);
    }
  });
  
  // Prevent dropdown closing when searching
  countryDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  
  // Dynamic Phone Validation
  phoneInput.addEventListener("input", () => {
    const parsed = detectAndExtractCountryCode(phoneInput.value);
    if (parsed) {
      currentCountry = parsed.country;
      updateCountryButton();
      phoneInput.value = parsed.phoneNumber;
    }

    validatePhoneNumber();
    // Auto-update QR and Link if active
    if (!qrCard.classList.contains("hidden")) {
      const url = getFullWhatsAppUrl();
      generateQRCode(url);
    }
  });
  
  // Message Expandable Panel
  messageToggleBtn.addEventListener("click", () => {
    messageWrapper.classList.toggle("hidden");
    const isHidden = messageWrapper.classList.contains("hidden");
    
    if (!isHidden) {
      messageInput.focus();
      messageToggleBtn.querySelector("span").textContent = "Remove pre-filled message";
    } else {
      messageInput.value = "";
      charCounter.textContent = "0 / 500 characters";
      messageToggleBtn.querySelector("span").textContent = "Add pre-filled message (optional)";
    }
    
    // Update QR if visible
    if (!qrCard.classList.contains("hidden")) {
      const url = getFullWhatsAppUrl();
      generateQRCode(url);
    }
  });
  
  // Character counter for message input
  messageInput.addEventListener("input", (e) => {
    const length = e.target.value.length;
    charCounter.textContent = `${length} / 500 characters`;
    
    // Update QR if visible
    if (!qrCard.classList.contains("hidden")) {
      const url = getFullWhatsAppUrl();
      generateQRCode(url);
    }
  });
  
  // Form Submission
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const isValid = validatePhoneNumber();
    if (!isValid) {
      phoneInput.focus();
      return;
    }
    
    const url = getFullWhatsAppUrl();
    const cleanNum = cleanPhoneNumber(phoneInput.value);
    
    // Add to history
    addToHistory(cleanNum, currentCountry.dial, currentCountry.flag);
    
    // Open in WhatsApp
    window.open(url, "_blank", "noopener,noreferrer");
  });
  
  // Copy Link Button
  copyBtn.addEventListener("click", () => {
    const isValid = validatePhoneNumber();
    if (!isValid) {
      phoneInput.focus();
      triggerToast("Please enter a valid phone number first.");
      return;
    }
    
    const url = getFullWhatsAppUrl();
    copyToClipboard(url);
    
    // Highlight check icon briefly
    const copyIcon = copyBtn.querySelector(".copy-icon");
    const checkIcon = copyBtn.querySelector(".check-icon");
    copyIcon.classList.add("hidden");
    checkIcon.classList.remove("hidden");
    
    setTimeout(() => {
      copyIcon.classList.remove("hidden");
      checkIcon.classList.add("hidden");
    }, 1800);
  });
  
  // Helper to open QR Card Modal
  function openQRCard() {
    qrCard.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Prevent background scroll
    const url = getFullWhatsAppUrl();
    generateQRCode(url);
  }

  // Helper to close QR Card Modal
  function closeQRCard() {
    qrCard.classList.add("hidden");
    document.body.style.overflow = ""; // Restore background scroll
  }

  // QR Toggle Button
  qrBtn.addEventListener("click", () => {
    const isValid = validatePhoneNumber();
    if (!isValid) {
      phoneInput.focus();
      triggerToast("Please enter a valid phone number first.");
      return;
    }
    
    const isHidden = qrCard.classList.contains("hidden");
    if (isHidden) {
      openQRCard();
    } else {
      closeQRCard();
    }
  });

  // QR Close Button (top-right of card)
  qrCloseBtn.addEventListener("click", closeQRCard);

  // QR Overlay Click to Close
  if (qrOverlay) {
    qrOverlay.addEventListener("click", closeQRCard);
  }

  // Escape key to close QR Modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !qrCard.classList.contains("hidden")) {
      closeQRCard();
    }
  });
  
  // Download QR Code Button
  downloadQrBtn.addEventListener("click", downloadQRCode);
  
  // Clear All History Button
  clearHistoryBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear your direct chat history?")) {
      clearAllHistory();
    }
  });
}

/* ==========================================================================
   URL Parameter & Direct Catch Handling
   ========================================================================== */

function handleUrlParameters() {
  const path = window.location.pathname.substring(1);
  const urlParams = new URLSearchParams(window.location.search);
  
  let phone = urlParams.get("phone") || urlParams.get("p") || "";
  let message = urlParams.get("text") || urlParams.get("t") || urlParams.get("message") || "";
  
  if (!phone && path) {
    const decodedPath = decodeURIComponent(path).trim();
    const cleanedPath = cleanPhoneNumber(decodedPath);
    if (cleanedPath.length >= 6) {
      phone = decodedPath;
    }
  }
  
  if (phone) {
    let cleanPhone = cleanPhoneNumber(phone);
    
    // Sort countries by dial code length descending to match longest code first
    const sortedCountries = [...countries].sort((a, b) => b.dial.length - a.dial.length);
    let match = null;
    
    for (const c of sortedCountries) {
      const cleanDial = cleanCountryDialCode(c.dial);
      if (cleanPhone.startsWith(cleanDial) && cleanPhone.length > cleanDial.length) {
        match = c;
        break;
      }
    }
    
    if (match) {
      currentCountry = match;
      const cleanDial = cleanCountryDialCode(match.dial);
      phoneInput.value = cleanPhone.substring(cleanDial.length);
    } else {
      phoneInput.value = cleanPhone;
    }
    
    updateCountryButton();
    validatePhoneNumber();
    
    if (message) {
      messageWrapper.classList.remove("hidden");
      messageInput.value = message;
      charCounter.textContent = `${message.length} / 500 characters`;
      messageToggleBtn.querySelector("span").textContent = "Remove pre-filled message";
    }
    
    const chatBtn = document.getElementById("chat-btn");
    const originalBtnText = chatBtn.innerHTML;
    
    chatBtn.innerHTML = `
      <svg class="animate-spin" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2.5" style="opacity: 0.2"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path>
      </svg>
      <span>Opening WhatsApp...</span>
    `;
    chatBtn.disabled = true;
    
    setTimeout(() => {
      const url = getFullWhatsAppUrl();
      const cleanNum = cleanPhoneNumber(phoneInput.value);
      addToHistory(cleanNum, currentCountry.dial, currentCountry.flag);
      
      chatBtn.innerHTML = originalBtnText;
      chatBtn.disabled = false;
      
      window.location.href = url;
    }, 1200);
  }
}

/* ==========================================================================
   PWA Installation Prompts (Mobile Browser Support)
   ========================================================================== */

let deferredPrompt = null;

function initPWAInstall() {
  const pwaBanner = document.getElementById("pwa-install-banner");
  const pwaInstallBtn = document.getElementById("pwa-install-btn");
  const pwaCancelBtn = document.getElementById("pwa-cancel-btn");
  const pwaDesc = document.getElementById("pwa-banner-desc");
  const headerInstallBtn = document.getElementById("header-install-btn");
  
  if (!pwaBanner || !pwaInstallBtn || !pwaCancelBtn || !pwaDesc || !headerInstallBtn) return;

  // Check if running in standalone mode (already installed)
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  if (isStandalone) {
    headerInstallBtn.classList.add("hidden");
    pwaBanner.classList.add("hidden");
    return;
  }

  // Detect iOS Safari / iPad / iPhone
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  // Detect macOS Safari
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isMacSafari = isMac && isSafari;

  // Detect Samsung Internet Browser (known for outdated WebAPK compilation on Android 14+)
  const isSamsungBrowser = navigator.userAgent.indexOf("SamsungBrowser") > -1;

  // Detect Android (to show Play Protect troubleshooting tip)
  const isAndroid = /Android/i.test(navigator.userAgent);

  // Detect Desktop (Windows/Mac)
  const isDesktop = !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Toggle Android Play Protect warning tip in the install banner
  const androidTip = document.getElementById("pwa-android-tip");
  if (androidTip) {
    if (isAndroid) {
      androidTip.classList.remove("hidden");
      if (isSamsungBrowser) {
        androidTip.innerHTML = `<strong>Samsung Internet detected:</strong> Google Play Protect will warn you that this app was built for an older version of Android. This is a false positive caused by Samsung's WebAPK minting server. Tap <strong>"More details"</strong> &rarr; <strong>"Install anyway"</strong> to proceed, or open this site in <strong>Google Chrome</strong> to install without any warnings. (<a href="https://support.google.com/android/answer/2812853?hl=en" target="_blank" rel="noopener noreferrer">Google Help</a>)`;
      }
    } else {
      androidTip.classList.add("hidden");
    }
  }

  if (isSamsungBrowser) {
    pwaDesc.innerHTML = "Add to Home Screen.<br><span style='color: var(--accent-blue); font-weight: 600; font-size: 0.72rem;'>Tip: Open in Google Chrome to install without Android security warnings.</span>";
  } else if (isDesktop && !isMacSafari) {
    pwaDesc.textContent = "Install NoSaveWA on your computer for instant offline access.";
  }

  if (isIOS) {
    pwaDesc.textContent = "Tap the share icon and select 'Add to Home Screen'.";
    pwaInstallBtn.classList.add("hidden");
    headerInstallBtn.classList.remove("hidden");
    
    setTimeout(() => {
      if (localStorage.getItem("pwa_install_dismissed") !== "true") {
        pwaBanner.classList.remove("hidden");
      }
    }, 4000);
  } else if (isMacSafari) {
    pwaDesc.textContent = "Click 'File' > 'Add to Dock' in Safari's top menu bar.";
    pwaInstallBtn.classList.add("hidden");
    headerInstallBtn.classList.remove("hidden");
    
    setTimeout(() => {
      if (localStorage.getItem("pwa_install_dismissed") !== "true") {
        pwaBanner.classList.remove("hidden");
      }
    }, 4000);
  }

  // Detect Android/Desktop Chrome/Edge Prompt
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    headerInstallBtn.classList.remove("hidden");
    
    setTimeout(() => {
      if (localStorage.getItem("pwa_install_dismissed") !== "true") {
        pwaBanner.classList.remove("hidden");
      }
    }, 3000);
  });

  // Action: Trigger PWA Install (Banner Button)
  pwaInstallBtn.addEventListener("click", () => {
    triggerInstall();
  });

  // Action: Trigger PWA Install (Header Button)
  headerInstallBtn.addEventListener("click", () => {
    if (isIOS || isMacSafari) {
      pwaBanner.classList.remove("hidden");
      pwaBanner.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      triggerInstall();
    }
  });

  function triggerInstall() {
    if (!deferredPrompt) return;
    
    pwaBanner.classList.add("hidden");
    deferredPrompt.prompt();
    
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("PWA install accepted by user");
        headerInstallBtn.classList.add("hidden");
      } else {
        console.log("PWA install dismissed by user");
      }
      deferredPrompt = null;
    });
  }

  // Action: Cancel/Dismiss Install Banner
  pwaCancelBtn.addEventListener("click", () => {
    pwaBanner.classList.add("hidden");
    // Suppress prompt banner for 7 days
    localStorage.setItem("pwa_install_dismissed", "true");
  });

  // Hide buttons once installed
  window.addEventListener("appinstalled", () => {
    console.log("PWA was installed");
    headerInstallBtn.classList.add("hidden");
    pwaBanner.classList.add("hidden");
    deferredPrompt = null;
    
    // Trigger PWA install tracking
    fetchStats('install');
  });
}

/* ==========================================================================
   Modals Interface Setup (Privacy Policy & Terms)
   ========================================================================== */

function setupModals() {
  const privacyLink = document.getElementById("privacy-link");
  const termsLink = document.getElementById("terms-link");
  
  const privacyModal = document.getElementById("privacy-modal");
  const termsModal = document.getElementById("terms-modal");
  
  const privacyCloseBtn = document.getElementById("privacy-close-btn");
  const termsCloseBtn = document.getElementById("terms-close-btn");
  
  const privacyOverlay = document.getElementById("privacy-overlay");
  const termsOverlay = document.getElementById("terms-overlay");
  
  if (!privacyLink || !termsLink || !privacyModal || !termsModal || !privacyCloseBtn || !termsCloseBtn || !privacyOverlay || !termsOverlay) return;

  function toggleModal(modal, show) {
    if (show) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    } else {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  privacyLink.addEventListener("click", (e) => {
    e.preventDefault();
    toggleModal(privacyModal, true);
  });
  
  termsLink.addEventListener("click", (e) => {
    e.preventDefault();
    toggleModal(termsModal, true);
  });

  privacyCloseBtn.addEventListener("click", () => toggleModal(privacyModal, false));
  termsCloseBtn.addEventListener("click", () => toggleModal(termsModal, false));

  privacyOverlay.addEventListener("click", () => toggleModal(privacyModal, false));
  termsOverlay.addEventListener("click", () => toggleModal(termsModal, false));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      toggleModal(privacyModal, false);
      toggleModal(termsModal, false);
    }
  });
}

/* ==========================================================================
   Live Stats Counter Logic
   ========================================================================== */

let currentVisitorsVal = 0;
let currentInstallsVal = 0;

function initStats() {
  // Check if we need to record a new visit for this session
  const hasVisitedThisSession = sessionStorage.getItem("wa_session_visited");
  
  if (!hasVisitedThisSession) {
    // Record visit and fetch counts
    fetchStats('visit');
    sessionStorage.setItem("wa_session_visited", "true");
  } else {
    // Just fetch current counts
    fetchStats();
  }

  // Poll stats every 15 seconds for live refreshing updates
  setInterval(() => {
    fetchStats();
  }, 15000);
}

// Function to fetch or increment stats via serverless endpoint
async function fetchStats(action = null) {
  try {
    let url = '/api/stats';
    let options = { method: 'GET' };

    if (action) {
      url += `?action=${action}`;
      options.method = 'POST';
    }

    const res = await fetch(url, options);
    if (!res.ok) throw new Error('Network error fetching stats');
    
    const data = await res.json();
    if (data && data.success) {
      updateStatsUI(data.visitors, data.installs);
    }
  } catch (err) {
    console.warn('Failed to retrieve live stats:', err);
  }
}

// Function to update the UI count displays with smooth animations
function updateStatsUI(newVisitors, newInstalls) {
  const visitorsEl = document.getElementById("stat-visitors");
  const installsEl = document.getElementById("stat-installs");

  if (!visitorsEl || !installsEl) return;

  // Animate visitors if changed or initial load
  if (newVisitors !== currentVisitorsVal) {
    animateValue(visitorsEl, currentVisitorsVal, newVisitors, 1000);
    currentVisitorsVal = newVisitors;
  } else if (visitorsEl.textContent === "0") {
    visitorsEl.textContent = newVisitors;
    currentVisitorsVal = newVisitors;
  }

  // Animate installs if changed or initial load
  if (newInstalls !== currentInstallsVal) {
    animateValue(installsEl, currentInstallsVal, newInstalls, 1000);
    currentInstallsVal = newInstalls;
  } else if (installsEl.textContent === "0") {
    installsEl.textContent = newInstalls;
    currentInstallsVal = newInstalls;
  }
}

// Smooth numeric value animation using requestAnimationFrame
function animateValue(obj, start, end, duration) {
  if (start === end) {
    obj.textContent = end.toLocaleString();
    return;
  }
  
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    
    // Smooth easeOutQuad formula
    const easeProgress = progress * (2 - progress);
    const currentValue = Math.floor(easeProgress * (end - start) + start);
    
    obj.textContent = currentValue.toLocaleString();
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.textContent = end.toLocaleString();
    }
  };
  window.requestAnimationFrame(step);
}

