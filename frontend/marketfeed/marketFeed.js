function smallMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}