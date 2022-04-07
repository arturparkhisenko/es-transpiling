const c = function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) u(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === 'childList')
        for (const r of t.addedNodes)
          r.tagName === 'LINK' && r.rel === 'modulepreload' && u(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === 'use-credentials'
        ? (t.credentials = 'include')
        : e.crossorigin === 'anonymous'
        ? (t.credentials = 'omit')
        : (t.credentials = 'same-origin'),
      t
    );
  }
  function u(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = s(e);
    fetch(e.href, t);
  }
};
c();
function n() {
  return Math.random() < 0.5 ? 'No guts, no gory.' : 'Me eat brains!';
}
function l(i = 'Ghoul') {
  return 'z' + i;
}
function a() {
  return { name: l(), damage: 42, say: n };
}
var f = Object.freeze(
  Object.defineProperty(
    { __proto__: null, getRandomQuote: n, generateName: l, default: a },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
console.log(l());
console.log(n());
console.log(a());
console.log(f);
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
