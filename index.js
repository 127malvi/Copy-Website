const urls = [
    "https://i.ytimg.com/vi/CxGSnA-RTsA/hqdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC419YNLNoMlVD9UEzQbpVPLFnxwy7xSdbrMFJ4holrAcQeIO_OUa7HCfD&s=10",
    "https://wp-media.petersons.com/blog/wp-content/uploads/2018/01/26100309/blur-close-up-code-computer-546819.jpg"
];

let index = 0;

function backAr() {
    if (index - 1 < 0) {
        index = urls.length - 1;
    } else {
        index--;
    }
    document.getElementById("caro_img").src = urls[index];
}

function forwAr() {
    if (index + 1 >= urls.length) {
        index = 0;
    } else {
        index++;
    }
    document.getElementById("caro_img").src = urls[index];
}

document.getElementById("side_class").addEventListener("click", function () {
    document.getElementById("dropdown_classes").classList.toggle("hidden")
});

document.getElementById("side_clubs").addEventListener("click", function () {
    document.getElementById("dropdown_clubs").classList.toggle("hidden")
});