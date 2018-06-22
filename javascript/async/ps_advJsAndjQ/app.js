$(function () {
    "use strict";

    //v1
    // $("#load").on("click", handleClick);


    // function handleClick() {
    //     $("#section1").load("c1.html");
    //     $("#section2").load("c2.html");
    //     $("#section3").load("c3.html", handleAfterLoad);
    // }

    // function handleAfterLoad() {
    //     $("#procced").removeAttr("disabled");
    // }


    //v2
    $("#load").on("click", handleClick);


    function handleClick() {
        $.when(
                $.get("c11.html", res => $("#section1").html(res), "html"),
                $.get("c2.html", res => $("#section2").html(res), "html"),
                $.get("c3.html", res => $("#section3").html(res), "html"),
            )
            .promise()
            .done()
            .fail(res => handleFailure(res))
            .always(handleAfterLoad);

    }

    function handleAfterLoad() {
        $("#procced").removeAttr("disabled");
    }

    function handleFailure(res) {
        $("#messages").append(res.statusText);
    }
})