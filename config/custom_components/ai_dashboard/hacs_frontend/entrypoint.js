
try {
  new Function("import('/hacsfiles/frontend/main-3617b0ee.js')")();
} catch (err) {
  var el = document.createElement('script');
  el.src = '/hacsfiles/frontend/main-3617b0ee.js';
  el.type = 'module';
  document.body.appendChild(el);
}
  