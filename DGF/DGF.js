document.addEventListener("DOMContentLoaded", function() {
    var getinvolve = document.getElementsByClassName("getinvolve");
    var undergetinvolve = document.getElementById("undergetinvolve");

    getinvolve.addEventListener("click", function(e) {
            undergetinvolve.style.display = "block";
    });
});
