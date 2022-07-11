(function (window) {
  var word = "goodbye";
  var bye = {
    speak: function (name) {
      console.log(word + " " + name);
    }
  };
  window.bye = bye;
})(window);
