$(document).ready(function () {
    $(".delete-article").on("click", e => {
        $target = $(e.target);
        const id = $target.attr("data-id");
        $.ajax({
            type: "DELETE",
            url: "/articles/" + id,
            success: res => {
                alert("deleting article");
                window.location.href = "/";
            },
            error: err => {
                console.log(err);
            }
        });
    });
});