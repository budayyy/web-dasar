function mydropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches(".dropbutton")) {
    var dropdown = document.getElementsByClassName("dropdown-item");
    for (var i = 0; i < dropdown.length; i++) {
      var opendropdown = dropdown[i];
      if (opendropdown.classList.contains("show")) {
        opendropdown.classList.remove("show");
      }
    }
  }
};
