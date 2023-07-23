// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
let header = document.getElementById("header");
let main = document.getElementById("main");

const myLogos = document.querySelectorAll(".myLogo");
myLogos.forEach((myLogo) => {
  myLogo.onclick = function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("active");
  };
});

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
    header.classList.remove("active");
  }
};
// menu end

// scroll start
function scrollFunc() {
  if (window.scrollY >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
const links = document.querySelectorAll(".links");
const sections = document.querySelectorAll(".anchor");
function changeLinkState() {
  let index = sections.length;
  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));
  links[index]?.classList.add("active");
}
links.forEach((e) => {
  onLinkClick(e);
});
function onLinkClick(linkItem) {
  linkItem.addEventListener("click", function () {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  });
}
window.onscroll = function () {
  if (main) {
    changeLinkState();
  }
  scrollFunc();
};
// scroll end
// tab start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
      setTimeout(() => {
        currentBtn.parentElement.style.top = "-100px";
        currentBtn.parentElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        currentBtn.parentElement.style.top = "unset";
      }, 500);
    }
  });
}
// tab end
// faq start
const faqBtn = document.querySelectorAll(".faqBtn");
const faqEvent = document.querySelectorAll(".faqEvent");
faqBtn.forEach((e) => {
  onFaqClick(faqBtn, faqEvent, e);
});
function onFaqClick(faqBtns, faqItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let faqId = currentBtn.getAttribute("data-faq");
    let currentTab = document.querySelector(faqId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".faqEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      faqBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      faqItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
      setTimeout(() => {
        currentBtn.parentElement.style.top = "-100px";
        currentBtn.parentElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        currentBtn.parentElement.style.top = "unset";
      }, 500);
    }
  });
}
// faq end
// sliders
// /*mobile slider */
function mobileOnlySlider() {
  $(".slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: false,
    dots: true,
  });
  $(".slider2").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: false,
    dots: true,
    centerMode: true,
  });
}
if (window.innerWidth < 541) {
  mobileOnlySlider();
}
function resizeListener(e) {
  if (window.innerWidth < 541) {
    $(".slider").addClass("sliderMob");
    if (!$(".slider").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
    $(".slider2").addClass("sliderMob");
    if (!$(".slider2").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
  } else {
    $(".slider").removeClass("sliderMob");
    if ($(".slider").hasClass("slick-initialized")) {
      $(".slider").slick("unslick");
    }
    $(".slider2").removeClass("sliderMob");
    if ($(".slider2").hasClass("slick-initialized")) {
      $(".slider2").slick("unslick");
    }
  }
}
resizeListener();
window.addEventListener("resize", () => {
  resizeListener();
});

// my Age and currentDate start
const myAge = document.getElementById("myAge");
if (myAge) {
  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
  myAge.innerHTML = getAge("1991-10-14");
}
const currentDate = document.getElementById("currentDate");
if (currentDate) {
  currentDate.innerHTML = new Date().getFullYear();
}
// my Age and currentDate end

// parallax start
gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg");
  // Give the backgrounds some random images
  // section.bg.style.backgroundImage = `url(..images/hero.jpg/${innerWidth}/${innerHeight}?random=${i})`;
  if (i && section.bg) {
    section.bg.style.backgroundPosition = `45% ${innerHeight / 2}px`;

    gsap.to(section.bg, {
      backgroundPosition: `45% ${-innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        scrub: true,
      },
    });
  } else {
    if (section.bg) {
      section.bg.style.backgroundPosition = "45% 0px";

      gsap.to(section.bg, {
        backgroundPosition: `45% ${-innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }
});
// parallax end

// window scroll start
let queryString = window.location.search.substring(1);

queryString.replace("?", "");
if (queryString) {
  window.addEventListener("load", () => {
    const link = document.querySelector(`#${queryString}`);
    link.scrollIntoView({ behavior: "smooth" });
  });
}
const footerForm = document.querySelector(".footer__inner-form");
const valTrue = document.querySelector(".valTrue");
const valFalse = document.querySelector(".valFalse");
const email = document.getElementById("email");
const emailOuter = document.getElementById("emailOuter");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,15}$/;
if (email) {
  email.oninput = () => {
    if (emailRegex.test(email.value) || email.value === "") {
      emailOuter.classList.remove("error");
    }
  };
}
// window scroll end
// validate start
const validateForm = () => {
  let status = 200;
  if (email.value !== "" && !emailRegex.test(email.value)) {
    emailOuter.classList.add("error");
  }
  if (email.value !== "" && !emailRegex.test(email.value)) {
    return false;
  } else {
    footerForm.classList.remove("active");
    if (status === 200) {
      valTrue.classList.add("active");
    } else {
      valFalse.classList.add("active");
    }
    return false;
  }
};
// validate end
// wow start
var wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
  scrollContainer: null,
  resetAnimation: true,
});
wow.init();
// wow end
