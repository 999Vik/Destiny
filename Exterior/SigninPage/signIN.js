function myFunction() {
    var x = document.getElementById("enterPass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }