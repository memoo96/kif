var width = $(window).width();

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $(function () {
    $("ul.dropdown-menu [data-toggle='dropdown']").on(
      "click",
      function (event) {
        event.preventDefault();
        event.stopPropagation();

        $(this).siblings().toggleClass("show");

        if (!$(this).next().hasClass("show")) {
          $(this)
            .parents(".dropdown-menu")
            .first()
            .find(".show")
            .removeClass("show");
        }
        $(this)
          .parents("li.nav-item.dropdown.show")
          .on("hidden.bs.dropdown", function (e) {
            $(".dropdown-submenu .show").removeClass("show");
          });
      },
    );
  });

  $(document).on("click", function (event) {
    if ($(this).width() <= 991) {
      var $trigger = $(".navbar");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $("#navbarContent").removeClass("show");
        $(".navbar-toggler").addClass("collapsed");
      }
    }
  });

  $(".search_box_popup .search_input").focus(function () {
    $(".search_box_popup .search_btn").css({
      visibility: "visible",
      opacity: "1",
    });
    $(this).css("margin-bottom", "20px");
  });

  var scrollButton = $(".scroll_top");
  $(window).scroll(function () {
    if ($("body").css("direction") == "ltr") {
      if ($(this).scrollTop() > 500) {
        scrollButton.css({
          opacity: "1",
          visibility: "visible",
          right: "50px",
        });
      } else {
        scrollButton.css({
          opacity: "0",
          visibility: "hidden",
          right: "0px",
        });
      }
    } else {
      if ($(this).scrollTop() > 500) {
        scrollButton.css({
          opacity: "1",
          visibility: "visible",
          left: "50px",
        });
      } else {
        scrollButton.css({
          opacity: "0",
          visibility: "hidden",
          left: "0px",
        });
      }
    }
  });

  scrollButton.click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  $(window).scroll(function () {
    var sc = $(this).scrollTop();
    if ($(this).width() > 991) {
      if (sc > 10) {
        $(".headSection").css({ display: "none" });
        $(".MainNav").css({
          top: "0",
          "background-color": "#990000",
          padding: ".5rem 1rem",
        });
        $(".MainNav .navbar-brand img").css({
          height: "80px",
        });
      } else {
        $(".headSection").css({ display: "block" });
        $(".MainNav").css({
          top: "48px",
          "background-color": "transparent",
          padding: "20px 1rem",
        });
        $(".MainNav .navbar-brand img").css({
          height: "100px",
        });
      }
    } else {
      if (sc > 10) {
        $(".headSection").css({ display: "none" });
        $(".MainNav").css({
          "background-color": "#990000",
          padding: ".5rem 1rem",
        });
        $(".MainNav .navbar-brand img").css({
          height: "60px",
        });
      } else {
        $(".headSection").css({ display: "none" });
        $(".MainNav").css({
          "background-color": "#990000",
          padding: ".5rem 1rem",
        });
        $(".MainNav .navbar-brand img").css({
          height: "60px",
        });
      }
    }
  });

  $(window).resize(function () {
    var sc = $(this).scrollTop();
    if ($(this).width() != width) {
      if ($(this).width() > 991) {
        if (sc > 10) {
          $(".MainNav").css({
            "background-color": "#990000",
            padding: ".5rem 1rem",
          });
          $(".MainNav .navbar-brand img").css({
            height: "80px",
          });
        } else {
          $(".MainNav").css({
            "background-color": "transparent",
            padding: "20px 1rem",
          });
          $(".MainNav .navbar-brand img").css({
            height: "100px",
          });
        }
      } else {
        if (sc > 10) {
          $(".MainNav").css({
            "background-color": "#990000",
            padding: ".5rem 1rem",
          });
          $(".MainNav .navbar-brand img").css({
            height: "60px",
          });
        } else {
          $(".MainNav").css({
            "background-color": "#990000",
            padding: ".5rem 1rem",
          });
          $(".MainNav .navbar-brand img").css({
            height: "60px",
          });
        }
      }
      width = $(window).width();
    }
  });

  $(document).ready(function () {
    $("select").niceSelect();
  });

  // chatbot functions .....................
  // answer question 1
  $(".Chatbot .box .content ul #question-1").click(function () {
    $("#chat-bubble-1").css({
      display: "block",
    });
    setTimeout(function () {
      $("#chat-bubble-1").css({
        display: "none",
      });
    }, 500);
    setTimeout(function () {
      $(".Chatbot .box .content ul #answer-1").css({
        display: "block",
      });
    }, 500);
  });

  // answer question 2
  $(".Chatbot .box .content ul #question-2").click(function () {
    $("#chat-bubble-2").css({
      display: "block",
    });
    setTimeout(function () {
      $("#chat-bubble-2").css({
        display: "none",
      });
    }, 500);
    setTimeout(function () {
      $(".Chatbot .box .content ul #answer-2").css({
        display: "block",
      });
    }, 500);
  });
  // answer question 3
  $(".Chatbot .box .content ul #question-3").click(function () {
    $("#chat-bubble-3").css({
      display: "block",
    });
    setTimeout(function () {
      $("#chat-bubble-3").css({
        display: "none",
      });
    }, 500);
    setTimeout(function () {
      $(".Chatbot .box .content ul #answer-3").css({
        display: "block",
      });
    }, 500);
  });
  // answer question 4
  $(".Chatbot .box .content ul #question-4").click(function () {
    $("#chat-bubble-4").css({
      display: "block",
    });
    setTimeout(function () {
      $("#chat-bubble-4").css({
        display: "none",
      });
    }, 500);
    setTimeout(function () {
      $(".Chatbot .box .content ul #answer-4").css({
        display: "block",
      });
    }, 500);
  });

  // close box by close icon
  $(".Chatbot .box .headerTitle .closeBox i").click(function () {
    $(".Chatbot .box").css({
      display: "none",
    });
  });

  // toggle box by clicking chatbot icon
  $(".Chatbot .fa-commenting").click(function () {
    $(".Chatbot .box").slideToggle();
  });
});
