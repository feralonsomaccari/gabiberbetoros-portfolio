new WOW({
  mobile: false // default
}).init();

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "js/particles.js-master/particles.json", function() {
  console.log("callback - particles.js config loaded");
});
