"use strict";
for (var i = 0; i < 360; i++) {
  var color = document.createElement("span");
  color.setAttribute("id", "d" + i);
  color.style.backgroundColor = "hsl(" + i + ", 100%, 50%)";
  color.style.msTransform = "rotate(" + i + "deg)";
  color.style.webkitTransform = "rotate(" + i + "deg)";
  color.style.MozTransform = "rotate(" + i + "deg)";
  color.style.OTransform = "rotate(" + i + "deg)";
  color.style.transform = "rotate(" + i + "deg)";
  document.getElementById("colorwheel").appendChild(color);
}
