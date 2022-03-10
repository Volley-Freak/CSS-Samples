(function() {
    let socials = document.querySelectorAll(".bottom-cornor .social div");
    socials.forEach(function(social, index) {
        social.style.animation = `movein .6s cubic-bezier(.51,.92,.24,1.15) forwards ${
      index / 3 + 0.2
    }s`;
    });
})();