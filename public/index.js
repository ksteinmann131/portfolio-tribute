$("#header")
  .on("mouseenter", function(){
    $(this).text("... our most inexhaustible source of magic.");
  })
  .on("mouseleave", function(){
    $(this).text("Words are, in my not-so-humble opinion...");
  });

  $(document).ready(function() {
    var wrapped = false;
    var original = $(".author-pic");

    $("#rowling").click(function(){
      if (!wrapped) {
        wrapped = true;
        $(".author-pic").wrap("<a href=\"https://www.jkrowling.com/\"></a>");
      }
    });
    $("#maas").click(function(){
      if (!wrapped) {
        wrapped = true;
        $(".author-pic").wrap("<a href=\"http://sarahjmaas.com/\"></a>");
      }
    });
    $("#paolini").click(function(){
      if (!wrapped) {
        wrapped = true;
        $(".author-pic").wrap("<a href=\"http://www.alagaesia.com/\"></a>");
      }
    });
    $("#marchetta").click(function(){
      if (!wrapped) {
        wrapped = true;
        $(".author-pic").wrap("<a href=\"https://melinamarchetta.wordpress.com/\"></a>");
      }
    });
    $("#diffenbaugh").click(function(){
      if (!wrapped) {
        wrapped = true;
        $(".author-pic").wrap("<a href=\"http://www.vanessadiffenbaugh.com/\"></a>");
      }
    });
    $("#morgenstern").click(function(){
      if (!wrapped) {
        wrapped = true;
        $(".author-pic").wrap("<a href=\"https://erinmorgenstern.com/\"></a>");
      }
    });
    $("#schwab").click(function(){
      if (!wrapped) {
        wrapped = true;
        $(".author-pic").wrap("<a href=\"http://www.veschwab.com/\"></a>");
      }
    });
    $("#crouch").click(function(){
      if (!wrapped) {
        wrapped = true;
        $(".author-pic").wrap("<a href=\"http://blakecrouch.com/\"></a>");
      }
    });
  });
