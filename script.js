(function (window) {
  var names = ["Mario", "Sam", "Jake", "Jhon", "Jimmy", "Paulina", "Lexi", "Jerry", "Adelle"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      bye.speak(names[i]);
    } else {
      hello.speak(names[i]);
    }
  }
})(window);

