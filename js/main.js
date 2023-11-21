document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function() {

        let progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(function(bar) {
            bar.classList.add("animate-width");
        });

    },500);
});