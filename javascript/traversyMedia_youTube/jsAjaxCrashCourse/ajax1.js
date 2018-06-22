const button1 = document.getElementById("button");

button1.addEventListener("click", handleClick);

function handleClick(event) {
    //create xhr object

    let xhr = new XMLHttpRequest();

    // OPEN - type, url/file, async?
    xhr.open("GET", "sample.txt", true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
    }

    // send reqest
    xhr.send()

}