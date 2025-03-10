document.addEventListener("DOMContentLoaded", function () {
    const list = document.querySelector(".list");
    const leftButton = document.getElementById("scroll-left");
    const rightButton = document.getElementById("scroll-right");

    leftButton.addEventListener("click", function () {
        list.scrollBy({ left: -300, behavior: "smooth" }); // 왼쪽으로 300px 이동
    });

    rightButton.addEventListener("click", function () {
        list.scrollBy({ left: 300, behavior: "smooth" }); // 오른쪽으로 300px 이동
    });
});