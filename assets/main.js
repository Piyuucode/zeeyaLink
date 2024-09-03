function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show back-to-top button when scrolling down
window.onscroll = function() {
    var button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function shareLink() {
    var currentUrl = window.location.href;
    navigator.share({ url: currentUrl })
      .then(() => console.log('Link shared successfully'))
      .catch((error) => console.error('Error sharing link:', error));
  }