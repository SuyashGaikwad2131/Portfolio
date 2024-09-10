document.addEventListener("DOMContentLoaded", function () {
  // Header fixed
  window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 991) {
      if (docScrollTop > 100) {
        document.querySelector("header").classList.add("fixed");
      } else {
        document.querySelector("header").classList.remove("fixed");
      }
    }
  };

  // Navbar links
  const navbar = document.querySelector(".navbar");
  const links = navbar.querySelectorAll("a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      links.forEach(function (otherLink) {
        otherLink.classList.remove("active");
      });

      this.classList.add("active");
      document.querySelector(".navbar").classList.toggle("show");
    });
  });

  // Hamburger
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("show");
  });

  // Portfolio Gallery
  const filterBtn = document.querySelector("#filterBtn").children;
  const items = document.querySelector(".gallery").children;

  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
      for (let j = 0; j < filterBtn.length; j++) {
        filterBtn[j].classList.remove("active");
      }
      this.classList.add("active");
      const target = this.getAttribute("data-target");
      for (let k = 0; k < items.length; k++) {
        items[k].style.display = "none";
        if (target == items[k].getAttribute("data-id") || target == "all") {
          items[k].style.display = "block";
        }
      }
    });
  }

  const closeLightbox = document.querySelector(".close-lightbox");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = lightbox.querySelector("img");

  lightbox.addEventListener("click", function (event) {
    if (event.target != lightboxImg) {
      lightbox.classList.remove("show");
      lightbox.classList.add("hide");
    }
  });

  closeLightbox.addEventListener("click", function () {
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
  });

  const gallery = document.querySelector(".gallery");
  const galleryItems = document.querySelectorAll(".item");

  galleryItems.forEach(function (item) {
    item.querySelector(".fa-plus").addEventListener("click", function () {
      lightbox.classList.remove("hide");
      lightbox.classList.add("show");
      lightboxImg.src = item.querySelector("img").getAttribute("src");
    });
  });

  // Testimonials Slider
  const sliderContainer = document.querySelector(".testimonials-box");
  const slider = sliderContainer.children;
  const containerWidth = sliderContainer.offsetWidth;

  const margin = 30;
  let itemsPerSlide = 0;
  let sliderDot;

  const responsive = [
    { breakPoint: { width: 0, items: 1 } },
    { breakPoint: { width: 991, items: 2 } },
  ];

  function load() {
    for (let i = 0; i < responsive.length; i++) {
      if (window.innerWidth > responsive[i].breakPoint.width) {
        itemsPerSlide = responsive[i].breakPoint.items;
      }
    }
    start();
  }

  function start() {
    let totalWidth = 0;
    for (let i = 0; i < slider.length; i++) {
      slider[i].style.width = containerWidth / itemsPerSlide - margin + "px";
      slider[i].style.margin = margin / 2 + "px";
      totalWidth += containerWidth / itemsPerSlide;
    }
    sliderContainer.style.width = totalWidth + "px";

    sliderDot = Math.ceil(slider.length / itemsPerSlide);

    for (let i = 0; i < sliderDot; i++) {
      const div = document.createElement("div");
      div.id = i;
      div.setAttribute("onclick", "controlSlide(this)");
      if (i == 0) {
        div.classList.add("active");
      }
      document.querySelector(".slider").appendChild(div);
    }
  }

  let currentSlide = 0;
  let autoSlide = 0;

  function controlSlide(element) {
    clearInterval(timer);
    timer = setInterval(autoPlay, 5000);
    autoSlide = element.id;
    currentSlide = element.id;
    changeSlide(currentSlide);
  }

  function changeSlide(currentSlide) {
    const controlButtons = document.querySelector(".slider").children;
    for (let i = 0; i < controlButtons.length; i++) {
      controlButtons[i].classList.remove("active");
    }
    controlButtons[currentSlide].classList.add("active");

    sliderContainer.style.marginLeft = -(containerWidth * currentSlide) + "px";
  }

  function autoPlay() {
    if (autoSlide == sliderDot - 1) {
      autoSlide = 0;
    } else {
      autoSlide++;
    }
    changeSlide(autoSlide);
  }

  let timer = setInterval(autoPlay, 5000);

  window.onload = load();

  // Get In Touch Button
  const getInTouchButton = document.querySelector(".button.btn a");

  if (getInTouchButton) {
    getInTouchButton.addEventListener("click", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.querySelector(".contact-form input[name='']").value;
      const email = document.querySelector(".contact-form input[name='']").value;
      const message = document.querySelector(".contact-form textarea").value;

      // Validate form data
      if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return;
      }

      // Prepare email content
      const emailContent = "Name: " + name + "\n";
      emailContent += "Email: " + email + "\n\n";
      emailContent += "Message:\n" + message;

      // Send email (you may replace this part with your preferred email sending method)
      const mailTo = "gaikwadsp71@gmail.com";
      const mailSubject = "New Contact Form Submission";
      const mailBody = encodeURIComponent(emailContent);
      const mailtoLink = "mailto:" + mailTo + "?subject=" + mailSubject + "&body=" + mailBody;

      window.location.href = mailtoLink;
    });
  }
});
