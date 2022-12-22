document.querySelector("#share-button").addEventListener("click", function () {
    navigator.share({
        title: document.title,
        url: window.location.href
    });
});

document.querySelector("#searchbar").addEventListener("input", function () {
    let input = this.value
    input = input.toLowerCase();

    let x = document.getElementsByClassName('alle-tekst');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].hidden = true;
        }
        else {
            x[i].hidden = false;
        }
    }

    let lijsten = document.getElementsByClassName('lijsten')
    for (i = 0; i < lijsten.length; i++) {
        if (lijsten[i].querySelector('details:not([hidden])')) {
            lijsten[i].hidden = false;
        }
        else {
            lijsten[i].hidden = true;
        }
    }
})


let topButton = document.getElementById("back-to-top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    document.body.scrollTop > 250 || document.documentElement.scrollTop > 250 ? topButton.style.display = "flex" : topButton.style.display = "none";
};

