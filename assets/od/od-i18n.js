/* OpenDesign language switcher for vasic.digital OD pages.
 * Visible, keyboard-operable (WCAG 2.1 menu pattern). No external deps.
 *
 * Config (set inline by the generator before this script loads):
 *   window.OD_LANGS = [{code,name}, …]           // menu contents
 *   window.OD_PAGE  = { type, paths:{code:url} }  // per-language STATIC page URLs
 *   window.OD_I18N  = { code:{ key:value } }       // client dictionary (home chrome)
 *
 * Behaviour: for pages that have per-language static variants (products,
 * portfolio) selecting a language NAVIGATES to that variant (real localized
 * page + hreflang). For the home (no static per-language body) it sets
 * <html lang/dir>, applies the chrome dictionary to [data-i18n] nodes, and
 * remembers the choice.
 */
(function () {
  "use strict";
  var LANGS = window.OD_LANGS || [{ code: "en", name: "English" }];
  var PAGE = window.OD_PAGE || { type: "home", paths: {} };
  var I18N = window.OD_I18N || {};
  var RTL = { ar: 1, fa: 1, he: 1, ur: 1 };
  var root = document.documentElement;

  function current() { return (root.getAttribute("lang") || "en").toLowerCase(); }
  function dirFor(l) { return RTL[l] ? "rtl" : "ltr"; }
  function nameFor(l) {
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === l) return LANGS[i].name;
    return l.toUpperCase();
  }

  function applyDict(l) {
    var dict = I18N[l] || {};
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, k)) nodes[i].innerHTML = dict[k];
    }
    root.setAttribute("lang", l);
    root.setAttribute("dir", dirFor(l));
    try { localStorage.setItem("od-lang", l); } catch (e) {}
  }

  function select(l) {
    var url = PAGE.paths && PAGE.paths[l];
    if (url && l !== current()) { location.href = url; return; }
    applyDict(l);
    updateButton(l);
    close();
  }

  // ---- UI --------------------------------------------------------------
  var mount = document.getElementById("od-lang-mount");
  if (!mount) return;

  var style = document.createElement("style");
  style.textContent =
    ".od-lang{position:relative;display:inline-flex}" +
    ".od-lang__btn{gap:var(--od-space-2)}" +
    ".od-lang__menu{position:absolute;top:calc(100% + 6px);inset-inline-end:0;z-index:60;margin:0;padding:var(--od-space-2);list-style:none;min-width:12rem;max-height:60vh;overflow:auto;background:var(--od-surface,#fff);border:1px solid var(--od-border,#ddd);border-radius:var(--od-radius-md,8px);box-shadow:var(--od-shadow-lg,0 10px 30px rgba(0,0,0,.18))}" +
    ".od-lang__menu[hidden]{display:none}" +
    ".od-lang__menu button{display:flex;justify-content:space-between;gap:var(--od-space-4);width:100%;padding:var(--od-space-2) var(--od-space-3);background:none;border:0;border-radius:var(--od-radius-sm,6px);color:var(--od-text,#111);font:inherit;text-align:start;cursor:pointer}" +
    ".od-lang__menu button:hover,.od-lang__menu button:focus{background:var(--od-surface-2,#f0f0f0);outline:2px solid var(--od-accent,#a31e39);outline-offset:-2px}" +
    ".od-lang__menu button[aria-current=true]{font-weight:700}" +
    ".od-lang__code{font-family:var(--od-font-mono,monospace);font-weight:700;text-transform:uppercase}";
  document.head.appendChild(style);

  var wrap = document.createElement("div");
  wrap.className = "od-lang";
  var btn = document.createElement("button");
  btn.type = "button";
  btn.id = "od-lang-btn";
  btn.className = "od-btn od-btn--ghost od-lang__btn";
  btn.setAttribute("aria-haspopup", "menu");
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", "od-lang-menu");
  btn.innerHTML =
    '<svg class="od-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18"/></svg>' +
    '<span class="od-lang__code"></span>';
  var menu = document.createElement("ul");
  menu.id = "od-lang-menu";
  menu.className = "od-lang__menu";
  menu.setAttribute("role", "menu");
  menu.setAttribute("aria-label", "Language");
  menu.hidden = true;

  var items = [];
  LANGS.forEach(function (L) {
    var li = document.createElement("li");
    li.setAttribute("role", "none");
    var mi = document.createElement("button");
    mi.type = "button";
    mi.setAttribute("role", "menuitem");
    mi.setAttribute("tabindex", "-1");
    mi.setAttribute("data-lang", L.code);
    mi.setAttribute("lang", L.code);
    mi.innerHTML = "<span>" + L.name + "</span><span class=\"od-lang__code\">" + L.code + "</span>";
    mi.addEventListener("click", function () { select(L.code); btn.focus(); });
    li.appendChild(mi);
    menu.appendChild(li);
    items.push(mi);
  });

  wrap.appendChild(btn);
  wrap.appendChild(menu);
  mount.appendChild(wrap);

  function updateButton(l) {
    btn.querySelector(".od-lang__code").textContent = l.toUpperCase();
    btn.setAttribute("aria-label", "Language: " + nameFor(l) + ". Change language");
    for (var i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-current", items[i].getAttribute("data-lang") === l ? "true" : "false");
    }
  }

  var openState = false;
  function open() {
    openState = true; menu.hidden = false; btn.setAttribute("aria-expanded", "true");
    var cur = current(), idx = 0;
    for (var i = 0; i < items.length; i++) if (items[i].getAttribute("data-lang") === cur) idx = i;
    focusItem(idx);
    document.addEventListener("click", onDocClick, true);
  }
  function close() {
    openState = false; menu.hidden = true; btn.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", onDocClick, true);
  }
  function onDocClick(e) { if (!wrap.contains(e.target)) close(); }
  function focusItem(i) { i = (i + items.length) % items.length; items[i].tabIndex = 0; items[i].focus(); curIdx = i; }
  var curIdx = 0;

  btn.addEventListener("click", function () { openState ? close() : open(); });
  btn.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });
  menu.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "ArrowDown": e.preventDefault(); focusItem(curIdx + 1); break;
      case "ArrowUp": e.preventDefault(); focusItem(curIdx - 1); break;
      case "Home": e.preventDefault(); focusItem(0); break;
      case "End": e.preventDefault(); focusItem(items.length - 1); break;
      case "Escape": e.preventDefault(); close(); btn.focus(); break;
      case "Tab": close(); break;
    }
  });

  // Initial state + remembered choice on the home.
  updateButton(current());
  if (PAGE.type === "home") {
    var saved = null;
    try { saved = localStorage.getItem("od-lang"); } catch (e) {}
    if (saved && saved !== current() && I18N[saved]) { applyDict(saved); updateButton(saved); }
  }
})();
