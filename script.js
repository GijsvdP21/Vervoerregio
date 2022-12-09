document.querySelector("#share-button").addEventListener("click", function () {
    navigator.share({
        title: document.title,
        url: window.location.href
    });
});