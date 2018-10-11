jQuery(function ($) {


    function slideMenu() {
      var activeState = $("#menu-container .menu-list").hasClass("active");
      $("#menu-container").animate(
        {
          right: activeState ? "0%" : "-100%"
        },
        400
      );
    }
    $("#menu-wrapper").click(function(event) {
      event.stopPropagation();
      $("#hamburger-menu").toggleClass("open");
      $(".menu-list").toggleClass("active");
      slideMenu();


      $("body").toggleClass("overflow-hidden");
      $("html").toggleClass("overflow-hidden");
    });

    $(".menu-list").find(".accordion-toggle").click(function() {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

      $(".menu-list .accordion-content")
        .not($(this).next())
        .slideUp("fast")
        .removeClass("open");
      $(".menu-list .accordion-toggle")
        .not(jQuery(this))
        .removeClass("active-tab")
        .find(".menu-link")
        .removeClass("active");
    });

    
    // Equal height
    // ====================
    function equal_height(){
      var height_array = $(".bu").map( function(){
        return  $(this).height();
      }).get();
      var max_height = Math.max.apply( Math, height_array);
      $(".bu").height(max_height);
    }

    function equal_height_dm(){
      var height_array = $(".dm").map( function(){
        return  $(this).height();
      }).get();
      var max_height = Math.max.apply( Math, height_array);
      $(".dm").height(max_height);
    }

    equal_height_dm();
    equal_height();

  $(window).load(function() {
    equal_height();
    equal_height_dm();
  });

  $(window).resize(function(){
    equal_height();
    equal_height_dm();
  });

});
