let button = document.getElementById("button")
    .addEventListener("click", loadUsers);

function loadUsers() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.github.com/users", true);
    xhr.send();

    xhr.onload = function () {
        if (this.status !== 200) {
            return;
        }

        let users = JSON.parse(xhr.responseText);

        var output = "";

        for (const u in users) {
            const user = users[u]

            console.log(user);

            output +=
                `<div class="user">
                    <img src="${user.avatar_url}" />
                    <ul>
                        <li>Id: ${user.id}</li> 
                        <li>Login: ${user.login}</li> 
                        <li>Url:  ${user.url}</li> 
                        <li>Repos: ${user.repos_url}</li>
                    </ul>
                </div>`;
        }

        document.getElementById("users")
            .innerHTML = output;
    }

}