$(document).ready(function() {

    $("#get-new-quote").click(getNewQuote);
});

function getNewQuote() {
    // $.getJSON( "https://quotesondesign.com/wp-json/posts?filter%5Borderby%5D=rand&filter%5Bposts_per_page%5D=1&callback=", function(data) {
    //     var post = data[0]; //data is array with 1 object
    //     var quote = post.content;
    //     var author = post.title;
    //     $("#quote-content").html(quote);
    //     $("#author").html(author);
    // });
    $.ajax({
           url: "https://quotesondesign.com/wp-json/posts?filter%5Borderby%5D=rand&filter%5Bposts_per_page%5D=1&callback=",
           success: function (data) {
               var post = data.shift();
               $("#quote-content").html(post.content);
               $("#author").html("<em> " + post.title + "</em>");
           },
           cache: false
       });
}
