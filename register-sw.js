if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
      navigator.serviceWorker.register("/uv/uv.sw.js", {
          scope: __uv$config.prefix,
      });
  });
}