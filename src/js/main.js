$("document").ready(() => {
  // Swiper
  var swiper = new Swiper(".cards-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
  });

  // Toggle Menu
  $(".menu-toggle").click(() => {
    $("nav").toggleClass("show-menu");
  });

  // Scroll To Section
  $(".nav-link").on("click", (e) => {
    e.preventDefault();
    $(".nav-link").removeClass("active");
    $(`.nav-link[href*=${e.currentTarget.hash.slice(1)}]`).addClass("active");

    const hash = e.currentTarget.hash;
    const top = $(hash).offset().top - 50;
    window.location.hash = hash;
    $("html,body").animate(
      {
        scrollTop: top,
      },
      400
    );
  });

  $(".nav-link[href*=home]").addClass("active");
  $(window).scroll(() => {
    // Scroll Header
    const scrolled = this.scrollY;
    if (scrolled > 100) $("#home").addClass("scrollheader");
    else $("#home").removeClass("scrollheader");

    Array.from($("section[id]")).forEach((section) => {
      const sectionTop = section.offsetTop - 80,
        sectionHeight = section.clientHeight,
        sectionID = section.getAttribute("id");

      if (scrolled < 180) $(".nav-link[href*=home]").addClass("active");
      else $(".nav-link[href*=home]").removeClass("active");

      if (scrolled > sectionTop && scrolled <= sectionTop + sectionHeight) {
        document
          .querySelector(`.nav-item a[href*=${sectionID}]`)
          .classList.add("active");
      } else {
        document
          .querySelector(`.nav-item a[href*=${sectionID}]`)
          .classList.remove("active");
      }
    });
  });

  // Video

  let pausing = true;

  $(".video-btn").click(() => {
    $(".video-btn").toggleClass("playing");
    if (pausing) {
      $(".video video")[0].play();
      pausing = false;
    } else {
      $(".video video")[0].pause();
      pausing = true;
    }
  });

  // Change Theme

  $(".change-theme").click(() => {
    $("body").toggleClass("dark-theme");

    if ($("body").attr("class").includes("dark-theme")) {
      $(".change-theme i").removeClass("fa-moon");
      $(".change-theme i").addClass("fa-sun");
    } else {
      $(".change-theme i").removeClass("fa-sun");
      $(".change-theme i").addClass("fa-moon");
    }
  });
});
