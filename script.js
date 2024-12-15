$(function () {
    const wdIcon= document.querySelector("#eye");
    $("#wd-btn").click(
        function () {
            // Lors du survol
            this.classList.toggle("fa-sun");
            $('body').toggleClass("d-mode");
            
        }
    );
});
