
try {
  new Function("import('/hacsfiles/frontend/main-b570e60a.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-b570e60a.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  