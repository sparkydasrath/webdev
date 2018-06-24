var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
ourRequest.onload = function () {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
        // This is where we'll do something with the retrieved data
        var data = JSON.parse(ourRequest.responseText);
        //console.log(data);
        createHtml(data);
    } else {
        console.log("We connected to the server, but it returned an error.");
    }
};

ourRequest.onerror = function () {
    console.log("Connection error");
};

ourRequest.send();

Handlebars.registerHelper("calculateAge", (birthYear) => {
    let age = new Date().getFullYear() - birthYear;
    if (age > 0) {
        return age + " years old";
    } else {
        return "Less than a year old";
    }
});

function createHtml(petsData) {
    var rawTemplate = document.getElementById("petsTemplate").innerHTML;
    var compilesTemplate = Handlebars.compile(rawTemplate);
    var generatedHtml = compilesTemplate(petsData);

    var petsContainer = document.getElementById("pets-container");
    petsContainer.innerHTML = generatedHtml;
}