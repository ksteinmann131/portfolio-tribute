$("#header")
  .on("mouseenter", function(){
    $(this).text("... our most inexhaustible source of magic.");
  })
  .on("mouseleave", function(){
    $(this).text("Words are, in my not-so-humble opinion...");
  });

// To wrap hyperlink around image
//   $(document).ready(function() {
//     $('img').each(function() {
//         var currentImage = $(this);
//         currentImage.wrap("<a target='_blank' href='" + currentImage.attr("src") + "'</a>");
//     });
// });


// $("book-lilacs")
//   .on("mouseenter", function(){
//     $(this).img("lilac.jpg");
//   })
//   .on("mouseleave", function(){
//     $(this).img("book-lilac2.jpg");
//   });
