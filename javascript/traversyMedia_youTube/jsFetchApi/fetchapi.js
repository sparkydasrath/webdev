"use strict";

let getTextButton = document.getElementById("getText")
    .addEventListener("click", getText);

let getJsonButton = document.getElementById("getJson")
    .addEventListener("click", getJson);

let getFromApiButton = document.getElementById("getFromApi")
    .addEventListener("click", getFromApi);

let form = document.getElementById("addPost").addEventListener("submit", addPost);




function getText() {
    fetch("sample.txt")
        .then((res) => res.text())
        .then((data) => {
            document
                .getElementById("display")
                .innerHTML = data;
        })
}

function getJson() {
    fetch("users.json")
        .then((res) => res.json())
        .then((data) => {
            let output = "<h2>Users</h2>";
            data.forEach((user) => {
                output += `<div class="user">
                    <ul class="list-group mb-3">
                        <li class="list-group-item">Id: ${user.id}</li> 
                        <li class="list-group-item">Name:  ${user.name}</li> 
                        <li class="list-group-item">Email: ${user.email}</li>
                    </u>
                </div>`;
            });

            document
                .getElementById("display")
                .innerHTML = output;

        });
}

function getFromApi() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2 class="mb-4" >Posts</h2>`;
            data.forEach((post) => {
                output += `<div class="card card-body mb-3">
                        <h3>${post.title}</h3> 
                        <p>${post.body}</li>
                </div>`;
            });

            document
                .getElementById("display")
                .innerHTML = output;

        });
}

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Accept": "application/json, text/plain, */**",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                body: body
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))

}