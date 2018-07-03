// animate smoothe scrll;
$("#view-work").on("click", handleClick);

function handleClick() {
    const images = $("#images").position().top;

    $("html, body").animate({
        scrollTop: images
    }, 900);
}