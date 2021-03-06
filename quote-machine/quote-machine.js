$(document).ready(function() {
    getNewQuote();
    $("#get-new-quote").click(getNewQuote);

    $("#share-tweet").click(function() {
        var link = "https://twitter.com/intent/tweet?text="
        link += $("#quote-content").text() + " - " +$("#author").text();
        window.open(link);
    });
});

function getNewQuote() {
    $.ajax({
        url: "https://quotesondesign.com/wp-json/posts?filter%5Borderby%5D=rand&filter%5Bposts_per_page%5D=1&callback=",
        success: function(data) {
            var post = data.shift();
            $("#quote-content").html(post.content);
            $("#author").html("<em> " + post.title + "</em>");
        },
        cache: false
    });
}
