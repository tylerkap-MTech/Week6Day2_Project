for (let i = 0; i <= 15; i++) {
    $("#boxContainer").append("<div class=box></div>")
}

$(".box").on("click", function () {
    $(this).toggleClass("boxLight");
});