const moon = document.getElementById("moon");
const mountainn = document.getElementById("mountain");
const star = document.getElementById("star");
const mountainFront = document.getElementById("mountain-front");
const text = document.getElementById("text");
const btn = document.getElementById("btn");

window.addEventListener("scroll", function () {
    const scrollValue = window.scrollY;
    star.style.left = `${scrollValue * 0.25}px`;
    moon.style.top = `${scrollValue * 1.25}px`;
    mountainn.style.top = `${scrollValue * 0.5}px`;
    mountainFront.style.top = `${scrollValue * 0}px`;
    text.style.marginRight = `${scrollValue * 5}px`;
    text.style.marginTop = `${scrollValue * 1.5}px`;
    btn.style.marginTop = `${scrollValue * 1.5}px`;
    
});
