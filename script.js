(function() {
    var quotes = $(".code");
    var quoteIndex = -1;
    var codes = document.getElementById("codes");
    var container = document.getElementById("container");
    var windowWidth = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

    var windowHeight = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    container.width = windowWidth;
    container.height = windowHeight - 255;

    function showNextQuote() {
        ++quoteIndex;
        var width = quotes.eq(quoteIndex % quotes.length).width();
        var height = quotes.eq(quoteIndex % quotes.length).height();
        codes.style.top = (Math.random() * (windowHeight - height - 255)) + 'px';
        codes.style.left = (Math.random() * (windowWidth - width - 5)) + 'px';

        if (quotes.eq(quoteIndex % quotes.length).text() == "play baseball" && quoteIndex == 0) {
            quotes.eq(quoteIndex % quotes.length)
                .fadeIn(2000)
                .delay(000)
                .fadeOut(1500, showNextQuote);


        } else {
            quotes.eq(quoteIndex % quotes.length)
                .fadeIn(1500)
                .delay(1000)
                .fadeOut(1500, showNextQuote);
        }
    }

    showNextQuote();

})();