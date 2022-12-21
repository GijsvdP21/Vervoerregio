document.querySelector("#share-button").addEventListener("click", function () {
    navigator.share({
        title: document.title,
        url: window.location.href
    });
});


function search_element() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('alle-tekst');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "block";
        }
    }
}


let topButton = document.getElementById("back-to-top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    document.body.scrollTop > 250 || document.documentElement.scrollTop > 250 ? topButton.style.display = "flex" : topButton.style.display = "none";
};

