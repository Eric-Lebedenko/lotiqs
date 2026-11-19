(function () {
  const { appUrl, pagesBase } = document.documentElement.dataset;
  const target = new URL(appUrl);
  const path = window.location.pathname;
  const base = pagesBase || "";
  // Preserve Telegram initData in the fragment and referral parameters verbatim.
  const appPath = path === base ? "/" : path.startsWith(base + "/") ? path.slice(base.length) : "/";
  target.pathname = appPath;
  target.search = window.location.search;
  target.hash = window.location.hash;
  document.getElementById("open-app").href = target.href;
  window.location.replace(target.href);
})();
