(function (window) {
  var word = "hello";
  var hello = {
    speak: function (name) {
      console.log(word + " " + name);
    }
  };
  window.hello = hello;
})(window);

