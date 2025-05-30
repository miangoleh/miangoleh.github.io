// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    const profilePic = document.querySelector(".profile-pic");
    profilePic.style.animation = "fadeInScaleUp 0.25s ease-out forwards";
    
    const year = new Date().getFullYear();
    const footerText = document.getElementById('footer-text');
    footerText.innerText = `© ${year} S. Mahdi H. Miangoleh`;
});

// Google Analytics setup
(function() {
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-0GSFDC69G7";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-0GSFDC69G7');
})();